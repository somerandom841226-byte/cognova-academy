import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Lock, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/student/lessons")({
  head: () => ({
    meta: [
      { title: "My Lessons – CogNova Academy" },
      {
        name: "description",
        content:
          "Browse and resume your CogNova Academy lessons across AI, design and web development tracks.",
      },
      { property: "og:title", content: "My Lessons – CogNova Academy" },
      {
        property: "og:description",
        content: "Every lesson in your CogNova Academy learning path.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Lessons,
});

type Lesson = { title: string; duration: string; state: "done" | "current" | "locked" };

const tracks: { course: string; tint: string; lessons: Lesson[] }[] = [
  {
    course: "AI Smart Kids",
    tint: "bg-lavender",
    lessons: [
      { title: "What is intelligence?", duration: "12 min", state: "done" },
      { title: "Patterns everywhere", duration: "15 min", state: "done" },
      { title: "Teaching a machine to see", duration: "18 min", state: "current" },
      { title: "Building your first bot", duration: "22 min", state: "locked" },
    ],
  },
  {
    course: "Graphic Design Fundamentals",
    tint: "bg-blush",
    lessons: [
      { title: "Colour & contrast", duration: "14 min", state: "done" },
      { title: "Type & hierarchy", duration: "20 min", state: "current" },
      { title: "Layout systems", duration: "17 min", state: "locked" },
    ],
  },
  {
    course: "Modern Web Development",
    tint: "bg-mint",
    lessons: [
      { title: "HTML that means something", duration: "16 min", state: "done" },
      { title: "Styling with tokens", duration: "19 min", state: "done" },
      { title: "State & props", duration: "24 min", state: "current" },
      { title: "Shipping your project", duration: "21 min", state: "locked" },
    ],
  },
];

const filters = ["All", "In progress", "Completed"] as const;

function Lessons() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const matches = (l: Lesson) =>
    filter === "All" ||
    (filter === "Completed" ? l.state === "done" : l.state !== "done");

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            My lessons
          </h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">
            Pick up exactly where you left off.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground/70 hover:bg-secondary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      <div className="space-y-4">
        {tracks.map((track) => {
          const visible = track.lessons.filter(matches);
          if (visible.length === 0) return null;
          const done = track.lessons.filter((l) => l.state === "done").length;

          return (
            <section
              key={track.course}
              className="rounded-3xl bg-card p-5 shadow-sm shadow-navy/5 sm:p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className={`size-3 rounded-full ${track.tint}`} />
                  <h2 className="text-lg font-bold sm:text-xl">
                    {track.course}
                  </h2>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {done} of {track.lessons.length} complete
                </p>
              </div>

              <ul className="mt-4 divide-y divide-border">
                {visible.map((l) => (
                  <li
                    key={l.title}
                    className="flex items-center gap-3 py-3 first:pt-1"
                  >
                    {l.state === "done" ? (
                      <CheckCircle2 className="size-5 shrink-0 text-sky-deep" />
                    ) : l.state === "current" ? (
                      <PlayCircle className="size-5 shrink-0 text-navy" />
                    ) : (
                      <Lock className="size-5 shrink-0 text-muted-foreground" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p
                        className={`truncate font-semibold ${
                          l.state === "locked" ? "text-muted-foreground" : ""
                        }`}
                      >
                        {l.title}
                      </p>
                      <p className="text-xs font-medium text-muted-foreground">
                        {l.duration}
                      </p>
                    </div>
                    {l.state !== "locked" && (
                      <button
                        type="button"
                        className="rounded-full bg-secondary px-4 py-1.5 text-xs font-bold transition-colors hover:bg-sky-soft"
                      >
                        {l.state === "done" ? "Review" : "Resume"}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
