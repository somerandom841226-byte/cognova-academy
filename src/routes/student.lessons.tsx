import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FileText,
  Lock,
  PlayCircle,
  X,
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/student/lessons")({
  head: () => ({
    meta: [
      { title: "My Lessons – CogNova Academy" },
      {
        name: "description",
        content:
          "Pick a course, then work through week-by-week video lectures, slide notes and the week assignment at CogNova Academy.",
      },
      { property: "og:title", content: "My Lessons – CogNova Academy" },
      {
        property: "og:description",
        content:
          "Week-wise video lectures, lecture slides and assignments for every CogNova Academy course.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Lessons,
});

type Lecture = {
  id: string;
  title: string;
  duration: string;
  video: string;
  done: boolean;
};

type Week = {
  number: number;
  title: string;
  notes: { name: string; size: string };
  lectures: Lecture[];
  assignment: { title: string; due: string };
};

type Course = {
  id: string;
  title: string;
  tint: string;
  blurb: string;
  weeks: Week[];
};

const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";

const initialCourses: Course[] = [
  {
    id: "ai-smart-kids",
    title: "AI Smart Kids",
    tint: "bg-lavender",
    blurb: "Playful introduction to how machines learn and think.",
    weeks: [
      {
        number: 1,
        title: "Thinking machines",
        notes: { name: "Week 1 – Thinking machines.pptx", size: "4.2 MB" },
        lectures: [
          { id: "a1", title: "What is intelligence?", duration: "12 min", video: SAMPLE_VIDEO, done: true },
          { id: "a2", title: "Patterns everywhere", duration: "15 min", video: SAMPLE_VIDEO, done: true },
          { id: "a3", title: "Humans vs computers", duration: "10 min", video: SAMPLE_VIDEO, done: true },
        ],
        assignment: { title: "Spot the pattern worksheet", due: "Fri, 26 Sep" },
      },
      {
        number: 2,
        title: "Teaching a machine",
        notes: { name: "Week 2 – Teaching a machine.pptx", size: "5.1 MB" },
        lectures: [
          { id: "a4", title: "Teaching a machine to see", duration: "18 min", video: SAMPLE_VIDEO, done: true },
          { id: "a5", title: "Training with examples", duration: "16 min", video: SAMPLE_VIDEO, done: false },
          { id: "a6", title: "Building your first bot", duration: "22 min", video: SAMPLE_VIDEO, done: false },
        ],
        assignment: { title: "Train a tiny image classifier", due: "Fri, 3 Oct" },
      },
      {
        number: 3,
        title: "AI in the real world",
        notes: { name: "Week 3 – AI in the real world.pptx", size: "3.8 MB" },
        lectures: [
          { id: "a7", title: "AI around your home", duration: "14 min", video: SAMPLE_VIDEO, done: false },
          { id: "a8", title: "Being fair and safe", duration: "13 min", video: SAMPLE_VIDEO, done: false },
        ],
        assignment: { title: "Design a helpful AI helper", due: "Fri, 10 Oct" },
      },
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design Fundamentals",
    tint: "bg-blush",
    blurb: "Colour, type and layout skills you can use on any brief.",
    weeks: [
      {
        number: 1,
        title: "Colour & contrast",
        notes: { name: "Week 1 – Colour & contrast.pptx", size: "6.4 MB" },
        lectures: [
          { id: "g1", title: "Colour wheel basics", duration: "14 min", video: SAMPLE_VIDEO, done: true },
          { id: "g2", title: "Building a palette", duration: "17 min", video: SAMPLE_VIDEO, done: true },
        ],
        assignment: { title: "Palette study – 3 moods", due: "Fri, 26 Sep" },
      },
      {
        number: 2,
        title: "Type & hierarchy",
        notes: { name: "Week 2 – Type & hierarchy.pptx", size: "5.6 MB" },
        lectures: [
          { id: "g3", title: "Anatomy of type", duration: "20 min", video: SAMPLE_VIDEO, done: false },
          { id: "g4", title: "Pairing typefaces", duration: "15 min", video: SAMPLE_VIDEO, done: false },
          { id: "g5", title: "Setting hierarchy", duration: "18 min", video: SAMPLE_VIDEO, done: false },
        ],
        assignment: { title: "Poster with three type levels", due: "Fri, 3 Oct" },
      },
    ],
  },
  {
    id: "web-dev",
    title: "Modern Web Development",
    tint: "bg-mint",
    blurb: "From semantic markup to shipping a live project.",
    weeks: [
      {
        number: 1,
        title: "Structure & styling",
        notes: { name: "Week 1 – Structure & styling.pptx", size: "4.9 MB" },
        lectures: [
          { id: "w1", title: "HTML that means something", duration: "16 min", video: SAMPLE_VIDEO, done: true },
          { id: "w2", title: "Styling with tokens", duration: "19 min", video: SAMPLE_VIDEO, done: true },
        ],
        assignment: { title: "Rebuild a landing section", due: "Fri, 26 Sep" },
      },
      {
        number: 2,
        title: "React essentials",
        notes: { name: "Week 2 – React essentials.pptx", size: "7.2 MB" },
        lectures: [
          { id: "w3", title: "Components & JSX", duration: "21 min", video: SAMPLE_VIDEO, done: true },
          { id: "w4", title: "State & props", duration: "24 min", video: SAMPLE_VIDEO, done: false },
        ],
        assignment: { title: "Interactive card grid", due: "Fri, 3 Oct" },
      },
      {
        number: 3,
        title: "Shipping",
        notes: { name: "Week 3 – Shipping.pptx", size: "3.1 MB" },
        lectures: [
          { id: "w5", title: "Shipping your project", duration: "21 min", video: SAMPLE_VIDEO, done: false },
        ],
        assignment: { title: "Publish your portfolio", due: "Fri, 10 Oct" },
      },
    ],
  },
];

function Lessons() {
  const [courses, setCourses] = useState(initialCourses);
  const [courseId, setCourseId] = useState<string | null>(null);
  const [openWeek, setOpenWeek] = useState<number | null>(1);
  const [player, setPlayer] = useState<{
    lecture: Lecture;
    week: Week;
  } | null>(null);

  const course = useMemo(
    () => courses.find((c) => c.id === courseId) ?? null,
    [courses, courseId],
  );

  const progressOf = (c: Course) => {
    const all = c.weeks.flatMap((w) => w.lectures);
    const done = all.filter((l) => l.done).length;
    return { done, total: all.length, pct: Math.round((done / all.length) * 100) };
  };

  const markDone = (lectureId: string) => {
    setCourses((prev) =>
      prev.map((c) => ({
        ...c,
        weeks: c.weeks.map((w) => ({
          ...w,
          lectures: w.lectures.map((l) =>
            l.id === lectureId ? { ...l, done: true } : l,
          ),
        })),
      })),
    );
  };

  if (!course) {
    return (
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            My lessons
          </h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">
            Select a course to see its week-by-week lectures.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => {
            const p = progressOf(c);
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setCourseId(c.id);
                  setOpenWeek(1);
                }}
                className="group rounded-3xl bg-card p-5 text-left shadow-sm shadow-navy/5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <span
                  className={`flex size-11 items-center justify-center rounded-2xl ${c.tint}`}
                >
                  <PlayCircle className="size-5 text-navy" />
                </span>
                <h2 className="mt-4 text-lg font-bold sm:text-xl">{c.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{c.blurb}</p>

                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-sky-deep"
                    style={{ width: `${p.pct}%` }}
                  />
                </div>
                <p className="mt-2 text-xs font-semibold text-muted-foreground">
                  {c.weeks.length} weeks · {p.done}/{p.total} lectures done
                </p>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const p = progressOf(course);

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() => {
            setCourseId(null);
            setPlayer(null);
          }}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold shadow-sm shadow-navy/5 transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="size-4" /> All courses
        </button>

        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className={`size-3 rounded-full ${course.tint}`} />
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                {course.title}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {course.weeks.length} weeks · {p.done} of {p.total} lectures
                complete
              </p>
            </div>
          </div>
          <p className="text-sm font-bold text-sky-deep">{p.pct}%</p>
        </div>
      </header>

      {player && (
        <section className="overflow-hidden rounded-3xl bg-card shadow-sm shadow-navy/5">
          <div className="relative aspect-video w-full bg-navy">
            <video
              key={player.lecture.id}
              src={player.lecture.video}
              controls
              className="size-full"
            />
            <button
              type="button"
              aria-label="Close player"
              onClick={() => setPlayer(null)}
              className="absolute right-3 top-3 rounded-full bg-card/90 p-2 shadow-sm backdrop-blur transition-colors hover:bg-card"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Week {player.week.number} · {player.week.title}
              </p>
              <h2 className="mt-1 truncate text-lg font-bold sm:text-xl">
                {player.lecture.title}
              </h2>
              <p className="text-sm font-medium text-muted-foreground">
                {player.lecture.duration}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() =>
                  toast.success("Opening notes", {
                    description: player.week.notes.name,
                  })
                }
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold transition-colors hover:bg-sky-soft"
              >
                <FileText className="size-4" /> Lecture notes (PPT)
              </button>
              {!player.lecture.done && (
                <button
                  type="button"
                  onClick={() => {
                    markDone(player.lecture.id);
                    toast.success("Lecture marked complete");
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <CheckCircle2 className="size-4" /> Mark complete
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      <div className="space-y-4">
        {course.weeks.map((week) => {
          const done = week.lectures.filter((l) => l.done).length;
          const weekComplete = done === week.lectures.length;
          const isOpen = openWeek === week.number;

          return (
            <section
              key={week.number}
              className="overflow-hidden rounded-3xl bg-card shadow-sm shadow-navy/5"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenWeek(isOpen ? null : week.number)}
                className="flex w-full items-center gap-3 p-5 text-left sm:p-6"
              >
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-2xl text-sm font-extrabold text-navy ${course.tint}`}
                >
                  {week.number}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="truncate text-base font-bold sm:text-lg">
                    Week {week.number} — {week.title}
                  </h2>
                  <p className="text-sm font-medium text-muted-foreground">
                    {done} of {week.lectures.length} lectures ·{" "}
                    {weekComplete ? "assignment unlocked" : "assignment locked"}
                  </p>
                </div>
                <ChevronDown
                  className={`size-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="space-y-4 border-t border-border p-5 sm:p-6">
                  <ul className="divide-y divide-border">
                    {week.lectures.map((l) => (
                      <li
                        key={l.id}
                        className="flex flex-wrap items-center gap-3 py-3 first:pt-0"
                      >
                        {l.done ? (
                          <CheckCircle2 className="size-5 shrink-0 text-sky-deep" />
                        ) : (
                          <PlayCircle className="size-5 shrink-0 text-navy" />
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-semibold">{l.title}</p>
                          <p className="text-xs font-medium text-muted-foreground">
                            {l.duration} · video lecture
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setPlayer({ lecture: l, week })}
                          className="rounded-full bg-secondary px-4 py-1.5 text-xs font-bold transition-colors hover:bg-sky-soft"
                        >
                          {l.done ? "Rewatch" : "Watch"}
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-mist p-4">
                    <FileText className="size-5 shrink-0 text-navy" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold">
                        {week.notes.name}
                      </p>
                      <p className="text-xs font-medium text-muted-foreground">
                        Slides for all Week {week.number} lectures ·{" "}
                        {week.notes.size}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        toast.success("Opening notes", {
                          description: week.notes.name,
                        })
                      }
                      className="rounded-full bg-card px-4 py-1.5 text-xs font-bold shadow-sm transition-colors hover:bg-secondary"
                    >
                      Open notes
                    </button>
                  </div>

                  <div
                    className={`flex flex-wrap items-center gap-3 rounded-2xl p-4 ${
                      weekComplete ? "bg-sun-soft" : "bg-secondary/60"
                    }`}
                  >
                    {weekComplete ? (
                      <ClipboardList className="size-5 shrink-0 text-navy" />
                    ) : (
                      <Lock className="size-5 shrink-0 text-muted-foreground" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p
                        className={`truncate font-semibold ${
                          weekComplete ? "" : "text-muted-foreground"
                        }`}
                      >
                        {week.assignment.title}
                      </p>
                      <p className="text-xs font-medium text-muted-foreground">
                        {weekComplete
                          ? `Due ${week.assignment.due}`
                          : `Unlocks after all ${week.lectures.length} Week ${week.number} lectures`}
                      </p>
                    </div>
                    <button
                      type="button"
                      disabled={!weekComplete}
                      onClick={() =>
                        toast.success("Assignment opened", {
                          description: week.assignment.title,
                        })
                      }
                      className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {weekComplete ? "Start assignment" : "Locked"}
                    </button>
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
