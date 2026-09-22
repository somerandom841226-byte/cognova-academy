import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CalendarDays, CheckCircle2, CircleDashed, Send } from "lucide-react";

export const Route = createFileRoute("/student/assignments")({
  head: () => ({
    meta: [
      { title: "Assignments – CogNova Academy" },
      {
        name: "description",
        content:
          "See upcoming, submitted and graded assignments for your CogNova Academy courses.",
      },
      { property: "og:title", content: "Assignments – CogNova Academy" },
      {
        property: "og:description",
        content: "Deadlines, submissions and grades in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Assignments,
});

type Status = "Pending" | "Submitted" | "Graded";

const assignments: {
  title: string;
  course: string;
  due: string;
  status: Status;
  grade?: string;
}[] = [
  { title: "Train a simple image classifier", course: "AI Smart Kids", due: "Due in 2 days", status: "Pending" },
  { title: "Poster redesign with a type scale", course: "Graphic Design Fundamentals", due: "Due in 5 days", status: "Pending" },
  { title: "Build a responsive card grid", course: "Modern Web Development", due: "Submitted Mon", status: "Submitted" },
  { title: "Colour palette study", course: "Graphic Design Fundamentals", due: "Graded last week", status: "Graded", grade: "A" },
  { title: "Pattern hunt worksheet", course: "AI Smart Kids", due: "Graded 2 weeks ago", status: "Graded", grade: "A-" },
];

const tabs = ["Pending", "Submitted", "Graded"] as const;

const badgeTint: Record<Status, string> = {
  Pending: "bg-sun-soft text-navy",
  Submitted: "bg-sky-soft text-navy",
  Graded: "bg-mint text-navy",
};

function Assignments() {
  const [tab, setTab] = useState<Status>("Pending");
  const visible = assignments.filter((a) => a.status === tab);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Assignments
        </h1>
        <p className="mt-1 text-sm text-muted-foreground sm:text-base">
          Project work is where the learning sticks.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        {tabs.map((t) => {
          const count = assignments.filter((a) => a.status === t).length;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`rounded-3xl p-5 text-left transition-colors ${
                tab === t ? "bg-navy text-primary-foreground" : "bg-card"
              }`}
            >
              <p className="text-3xl font-extrabold">{count}</p>
              <p
                className={`text-sm font-semibold ${
                  tab === t ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {t}
              </p>
            </button>
          );
        })}
      </div>

      <section className="rounded-3xl bg-card p-5 shadow-sm shadow-navy/5 sm:p-6">
        <h2 className="text-lg font-bold sm:text-xl">{tab} work</h2>

        {visible.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">
            Nothing here right now.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {visible.map((a) => (
              <li
                key={a.title}
                className="flex flex-col gap-3 rounded-2xl bg-secondary/60 p-4 sm:flex-row sm:items-center"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-background text-navy">
                  {a.status === "Pending" ? (
                    <CircleDashed className="size-5" />
                  ) : a.status === "Submitted" ? (
                    <Upload className="size-5" />
                  ) : (
                    <CheckCircle2 className="size-5" />
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold leading-snug">{a.title}</p>
                  <p className="text-sm text-muted-foreground">{a.course}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                    <CalendarDays className="size-3.5" />
                    {a.due}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {a.grade && (
                    <span className="rounded-full bg-background px-3 py-1 text-sm font-extrabold">
                      {a.grade}
                    </span>
                  )}
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${badgeTint[a.status]}`}
                  >
                    {a.status}
                  </span>
                  {a.status === "Pending" && (
                    <button
                      type="button"
                      className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground"
                    >
                      Start
                      <ArrowRight className="size-3.5" />
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
