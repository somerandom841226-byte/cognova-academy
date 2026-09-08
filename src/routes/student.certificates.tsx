import { createFileRoute } from "@tanstack/react-router";
import { Award, Download, Lock, Share2 } from "lucide-react";

export const Route = createFileRoute("/student/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates – CogNova Academy" },
      {
        name: "description",
        content:
          "Download and share the certificates you have earned at CogNova Academy, and see what is next.",
      },
      { property: "og:title", content: "Certificates – CogNova Academy" },
      {
        property: "og:description",
        content: "Your earned CogNova Academy certificates and upcoming ones.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Certificates,
});

const earned = [
  {
    course: "Graphic Design Fundamentals",
    issued: "Issued 14 Aug 2026",
    id: "CN-GD-2026-0114",
    tint: "bg-blush",
  },
  {
    course: "AI Smart Kids — Level 1",
    issued: "Issued 02 Jul 2026",
    id: "CN-AI-2026-0072",
    tint: "bg-lavender",
  },
];

const upcoming = [
  { course: "Modern Web Development", note: "4 lessons left" },
  { course: "AI Smart Kids — Level 2", note: "Unlocks after Level 1 project" },
];

function Certificates() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Certificates
        </h1>
        <p className="mt-1 text-sm text-muted-foreground sm:text-base">
          Proof of the work you have shipped.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        {earned.map((c) => (
          <article
            key={c.id}
            className="overflow-hidden rounded-3xl bg-card shadow-sm shadow-navy/5"
          >
            <div
              className={`flex items-center justify-between gap-3 ${c.tint} px-5 py-6`}
            >
              <div className="min-w-0">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-navy/60">
                  CogNova Academy
                </p>
                <h2 className="mt-1 truncate text-lg font-extrabold text-navy">
                  {c.course}
                </h2>
              </div>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-background text-navy">
                <Award className="size-5" />
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 p-5">
              <div>
                <p className="text-sm font-semibold">{c.issued}</p>
                <p className="text-xs font-medium text-muted-foreground">
                  ID {c.id}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground"
                >
                  <Download className="size-3.5" />
                  PDF
                </button>
                <button
                  type="button"
                  aria-label="Share certificate"
                  className="grid size-9 place-items-center rounded-full bg-secondary text-foreground transition-colors hover:bg-sky-soft"
                >
                  <Share2 className="size-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-card p-5 shadow-sm shadow-navy/5 sm:p-6">
        <h2 className="text-lg font-bold sm:text-xl">On the way</h2>
        <ul className="mt-4 space-y-3">
          {upcoming.map((u) => (
            <li
              key={u.course}
              className="flex items-center gap-3 rounded-2xl bg-secondary/60 p-4"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-background text-muted-foreground">
                <Lock className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate font-bold">{u.course}</p>
                <p className="text-sm text-muted-foreground">{u.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
