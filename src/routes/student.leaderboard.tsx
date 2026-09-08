import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Crown, Flame, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/student/leaderboard")({
  head: () => ({
    meta: [
      { title: "Leaderboard – CogNova Academy" },
      {
        name: "description",
        content:
          "See how your learning points compare with other CogNova Academy students this week.",
      },
      { property: "og:title", content: "Leaderboard – CogNova Academy" },
      {
        property: "og:description",
        content: "Weekly and all-time points across the CogNova Academy cohort.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Leaderboard,
});

type Row = { name: string; points: number; streak: number; you?: boolean };

const week: Row[] = [
  { name: "Ishita M.", points: 1480, streak: 12 },
  { name: "Daniyal K.", points: 1395, streak: 9 },
  { name: "Zoya P.", points: 1320, streak: 11 },
  { name: "Aarav R.", points: 1210, streak: 7, you: true },
  { name: "Rehan S.", points: 1150, streak: 5 },
  { name: "Meher J.", points: 1080, streak: 4 },
  { name: "Kabir T.", points: 960, streak: 3 },
];

const allTime: Row[] = [
  { name: "Zoya P.", points: 9840, streak: 11 },
  { name: "Ishita M.", points: 9310, streak: 12 },
  { name: "Aarav R.", points: 8720, streak: 7, you: true },
  { name: "Daniyal K.", points: 8410, streak: 9 },
  { name: "Meher J.", points: 7650, streak: 4 },
  { name: "Rehan S.", points: 7220, streak: 5 },
  { name: "Kabir T.", points: 6580, streak: 3 },
];

const ranges = ["This week", "All time"] as const;

const initials = (n: string) =>
  n
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

function Leaderboard() {
  const [range, setRange] = useState<(typeof ranges)[number]>("This week");
  const rows = range === "This week" ? week : allTime;
  const podium = rows.slice(0, 3);
  const order = [1, 0, 2];

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Leaderboard
          </h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">
            Points come from lessons finished and assignments graded.
          </p>
        </div>
        <div className="flex gap-2">
          {ranges.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRange(r)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                range === r
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground/70 hover:bg-secondary"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </header>

      <section className="grid grid-cols-3 items-end gap-3 rounded-3xl bg-navy p-5 sm:gap-5 sm:p-8">
        {order.map((idx, slot) => {
          const r = podium[idx];
          if (!r) return null;
          const heights = ["h-20 sm:h-24", "h-28 sm:h-36", "h-16 sm:h-20"];
          return (
            <div key={r.name} className="flex flex-col items-center gap-2">
              {idx === 0 && <Crown className="size-5 text-sun" />}
              <span className="grid size-11 place-items-center rounded-full bg-sky-soft text-sm font-extrabold text-navy sm:size-14">
                {initials(r.name)}
              </span>
              <p className="max-w-full truncate text-xs font-bold text-primary-foreground sm:text-sm">
                {r.name}
              </p>
              <p className="text-xs font-semibold text-primary-foreground/60">
                {r.points.toLocaleString()} pts
              </p>
              <div
                className={`flex w-full items-center justify-center rounded-t-2xl ${
                  idx === 0 ? "bg-sun" : "bg-navy-card"
                } ${heights[slot]}`}
              >
                <span
                  className={`text-xl font-extrabold ${
                    idx === 0 ? "text-navy" : "text-primary-foreground"
                  }`}
                >
                  {idx + 1}
                </span>
              </div>
            </div>
          );
        })}
      </section>

      <section className="rounded-3xl bg-card p-2 shadow-sm shadow-navy/5 sm:p-4">
        <ul className="divide-y divide-border">
          {rows.map((r, i) => (
            <li
              key={r.name}
              className={`flex items-center gap-3 rounded-2xl px-3 py-3 sm:px-4 ${
                r.you ? "bg-sun-soft" : ""
              }`}
            >
              <span className="w-6 text-sm font-extrabold text-muted-foreground">
                {i + 1}
              </span>
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-xs font-bold">
                {initials(r.name)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold">
                  {r.name}
                  {r.you && (
                    <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-[0.65rem] font-bold text-primary-foreground">
                      You
                    </span>
                  )}
                </p>
                <p className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                  <Flame className="size-3" />
                  {r.streak} day streak
                </p>
              </div>
              <p className="flex items-center gap-1 text-sm font-extrabold">
                <TrendingUp className="size-3.5 text-sky-deep" />
                {r.points.toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
