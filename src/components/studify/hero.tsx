import { ArrowUpRight, Play, Star } from "lucide-react";
import heroStudents from "@/assets/hero-students.png";
import boltOrange from "@/assets/bolt-orange.png";
import boltBlue from "@/assets/bolt-blue.png";
import brain from "@/assets/brain.png";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";

const avatars = [avatar1, avatar2, avatar3];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-sky-soft via-sky to-sky-soft pb-0 pt-28 sm:pt-36 md:pt-44"
    >
      {/* floating decorations */}
      <img
        src={boltOrange}
        alt=""
        aria-hidden
        className="animate-float-slow absolute left-[6%] top-[30%] hidden w-20 md:block lg:w-24"
      />
      <img
        src={boltBlue}
        alt=""
        aria-hidden
        className="animate-float-slower absolute right-[7%] top-[26%] hidden w-20 md:block lg:w-24"
      />
      <img
        src={brain}
        alt=""
        aria-hidden
        className="animate-float-slow absolute left-[16%] top-[58%] hidden w-16 lg:block"
      />
      <img
        src={brain}
        alt=""
        aria-hidden
        className="animate-float-slower absolute right-[15%] top-[60%] hidden w-16 lg:block"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-xs font-bold uppercase tracking-widest text-foreground shadow-sm">
          <span className="size-2 rounded-full bg-coral" />
          WELCOME TO COGNOVA
        </p>

        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-deep sm:text-5xl sm:leading-[1.05] md:text-7xl">
          Think&nbsp;<span className="hl-blue hl-blue-foreground">Beyond</span>,
          <br />
          Learn Beyond with CogNova Academy.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-navy-deep/70 md:text-lg">
          Fun, practical courses taught by real-world experts. Build skills
          through projects, not lectures — and join thousands of learners
          leveling up every day.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#courses"
            className="group inline-flex items-center gap-2 rounded-full bg-primary py-3 pl-7 pr-2 text-sm font-bold text-primary-foreground shadow-xl shadow-navy/20 transition-transform hover:scale-[1.03]"
          >
            Start Learning
            <span className="grid size-9 place-items-center rounded-full bg-sun text-primary transition-transform group-hover:rotate-45">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
          <a
            href="#about-us"
            className="inline-flex items-center gap-3 rounded-full bg-background px-7 py-3 text-sm font-bold text-foreground shadow-md transition-transform hover:scale-[1.03]"
          >
            <span className="grid size-8 place-items-center rounded-full bg-secondary">
              <Play className="size-3.5 fill-current" />
            </span>
            How It Works
          </a>
        </div>

        <div className="mt-9 flex items-center justify-center gap-4">
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Happy CogNova learner"
                width={96}
                height={96}
                className="size-11 rounded-full border-[3px] border-sun object-cover shadow-md"
              />
            ))}
            <span className="grid size-11 place-items-center rounded-full border-[3px] border-sun bg-primary text-xs font-extrabold text-primary-foreground shadow-md">
              12k+
            </span>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1 text-coral">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <p className="mt-0.5 text-xs font-bold text-navy-deep/70">
              4.9 rating from 2,400+ learners
            </p>
          </div>
        </div>
      </div>

      <img
        src={heroStudents}
        alt="A group of cheerful 3D students learning together"
        width={1920}
        height={1024}
        className="relative mx-auto -mb-4 mt-10 w-full max-w-5xl px-4"
      />
    </section>
  );
}
