import { ArrowUpRight, BadgeCheck } from "lucide-react";
import characterCool from "@/assets/character-cool.png";
import boyPointing from "@/assets/boy-pointing.png";
import stairsFlag from "@/assets/stairs-flag.png";

const points = [
  "Bite-sized lessons that fit your schedule",
  "Hands-on projects reviewed by mentors",
  "Certificates that employers actually value",
  "A friendly community that keeps you going",
];

export function Growth() {
  return (
    <section className="overflow-hidden bg-sky-soft py-16 sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:gap-14 lg:grid-cols-2">
        {/* Illustration side */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-x-6 bottom-0 top-16 rounded-[2.5rem] bg-sun" />
          <img
            src={characterCool}
            alt="A confident 3D student character"
            loading="lazy"
            width={768}
            height={1024}
            className="relative mx-auto w-3/4"
          />
          <img
            src={stairsFlag}
            alt=""
            aria-hidden
            className="animate-float-slow absolute -left-6 top-2 w-24 md:w-28"
          />
          <img
            src={boyPointing}
            alt=""
            aria-hidden
            className="animate-float-slower absolute -right-8 bottom-6 w-20 md:w-24"
          />
          <div className="absolute -right-2 top-10 rounded-2xl bg-background px-4 py-3 shadow-lg">
            <p className="text-2xl font-extrabold text-navy-deep">95%</p>
            <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
              Success Rate
            </p>
          </div>
        </div>

        {/* Copy side */}
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-coral">
            Smarter Learning
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy-deep md:text-5xl">
            A Smarter Way to{" "}
            <span className="hl-blue hl-blue-foreground">Learn</span> &amp; Grow
          </h2>
          <p className="mt-5 max-w-lg text-base font-medium leading-relaxed text-navy-deep/70">
            CogNova Academy turns big goals into small, joyful steps. Follow a clear
            path, practice with real projects, and watch your skills compound
            week after week.
          </p>

          <ul className="mt-7 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <BadgeCheck className="size-4" />
                </span>
                <span className="text-sm font-bold text-navy-deep">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#pricing"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary py-3 pl-7 pr-2 text-sm font-bold text-primary-foreground shadow-xl shadow-navy/20 transition-transform hover:scale-[1.03]"
          >
            Join CogNova Today
            <span className="grid size-9 place-items-center rounded-full bg-sun text-primary transition-transform group-hover:rotate-45">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>
      </div>

    </section>
  );
}
