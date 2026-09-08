import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BookOpen,
  Clock,
  Flame,
  PlayCircle,
  Target,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/student/")({
  head: () => ({
    meta: [
      { title: "Student Dashboard – CogNova Academy" },
      {
        name: "description",
        content:
          "Track your lessons, assignments, streaks and certificates from your CogNova Academy student dashboard.",
      },
      { property: "og:title", content: "Student Dashboard – CogNova Academy" },
      {
        property: "og:description",
        content: "Your learning progress at a glance on CogNova Academy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

const stats = [
  { label: "Lessons completed", value: "18 / 32", icon: BookOpen, tint: "bg-sky-soft" },
  { label: "Day streak", value: "7 days", icon: Flame, tint: "bg-sun-soft" },
  { label: "Hours learned", value: "24.5 h", icon: Clock, tint: "bg-mint" },
  { label: "Leaderboard rank", value: "#4", icon: Trophy, tint: "bg-lavender" },
];

const courses = [
  { title: "AI Smart Kids", lesson: "Lesson 7 · Teaching a machine to see", progress: 62, tint: "bg-lavender" },
  { title: "Graphic Design Fundamentals", lesson: "Lesson 4 · Type & hierarchy", progress: 40, tint: "bg-blush" },
  { title: "Modern Web Development", lesson: "Lesson 11 · State & props", progress: 78, tint: "bg-mint" },
];

const agenda = [
  { time: "Today · 5:00 PM", title: "Live studio: colour theory in practice" },
  { time: "Thu · 6:30 PM", title: "Assignment review — AI Smart Kids" },
  { time: "Sat · 11:00 AM", title: "Project week kickoff" },
];

function Dashboard() {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-4xl bg-navy p-6 text-primary-foreground sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
          Welcome back
        </p>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl">
          Keep going, Aarav.
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
          You are 4 lessons away from finishing Modern Web Development. Finish
          this week to unlock your next certificate.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/student/lessons"
            className="group inline-flex items-center gap-2 rounded-full bg-sun py-2.5 pl-5 pr-2 text-sm font-bold text-primary"
          >
            Resume learning
            <span className="grid size-8 place-items-center rounded-full bg-primary text-sun transition-transform group-hover:rotate-45">
              <ArrowUpRight className="size-4" />
            </span>
          </Link>
          <Link
            to="/student/assignments"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <Target className="size-4" />
            View assignments
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-3xl bg-card p-5 shadow-sm shadow-navy/5"
          >
            <span
              className={`grid size-10 place-items-center rounded-2xl ${s.tint} text-navy`}
            >
              <s.icon className="size-5" />
            </span>
            <p className="mt-4 text-2xl font-extrabold tracking-tight">
              {s.value}
            </p>
            <p className="text-sm font-medium text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </section>

      <div className="grid gap-4 lg:grid-cols-3">
        <section className="rounded-3xl bg-card p-5 shadow-sm shadow-navy/5 sm:p-6 lg:col-span-2">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold sm:text-xl">Continue learning</h2>
            <Link
              to="/student/lessons"
              className="text-sm font-semibold text-sky-deep hover:underline"
            >
              All lessons
            </Link>
          </div>

          <ul className="mt-5 space-y-4">
            {courses.map((c) => (
              <li
                key={c.title}
                className="flex flex-col gap-3 rounded-2xl bg-secondary/60 p-4 sm:flex-row sm:items-center"
              >
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-2xl ${c.tint} text-navy`}
                >
                  <PlayCircle className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold">{c.title}</p>
                  <p className="truncate text-sm text-muted-foreground">
                    {c.lesson}
                  </p>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-background">
                    <div
                      className="h-full rounded-full bg-sky-deep"
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm font-bold sm:w-12 sm:text-right">
                  {c.progress}%
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl bg-card p-5 shadow-sm shadow-navy/5 sm:p-6">
          <h2 className="text-lg font-bold sm:text-xl">This week</h2>
          <ul className="mt-5 space-y-4">
            {agenda.map((a) => (
              <li key={a.title} className="border-l-2 border-sun pl-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {a.time}
                </p>
                <p className="mt-1 text-sm font-semibold leading-snug">
                  {a.title}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
