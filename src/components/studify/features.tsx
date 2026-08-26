import { BookOpenCheck, BriefcaseBusiness, ChartLine, Trophy } from "lucide-react";
import featureCourses from "@/assets/feature-courses.jpg";
import featureProjects from "@/assets/feature-projects.jpg";
import featureProgress from "@/assets/feature-progress.jpg";
import featureOutcomes from "@/assets/feature-outcomes.jpg";

const features = [
  {
    icon: BookOpenCheck,
    image: featureCourses,
    title: "Expert-Led Courses",
    text: "Learn from industry pros who teach with clarity, energy, and real experience — not slide decks.",
  },
  {
    icon: BriefcaseBusiness,
    image: featureProjects,
    title: "Real-World Projects",
    text: "Every course ends with portfolio-ready work you can actually show to clients and employers.",
  },
  {
    icon: ChartLine,
    image: featureProgress,
    title: "Personalized Progress",
    text: "Smart milestones, streaks, and feedback keep you moving at the pace that fits your life.",
  },
  {
    icon: Trophy,
    image: featureOutcomes,
    title: "Proven Outcomes",
    text: "Certificates, career support, and a community that celebrates every win along the way.",
  },
];

export function Features() {
  return (
    <section id="about-us" className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-sun">
            WHY COGNOVA ACADEMY
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl">
            Everything You Need to{" "}
            <span className="hl-blue hl-blue-foreground">Succeed</span>
          </h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-primary-foreground/60">
            One platform that takes you from curious beginner to confident
            professional — with structure, support, and a little fun.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-3xl bg-navy-card p-5 ring-1 ring-primary-foreground/10 transition-all hover:-translate-y-2 hover:ring-sun/60"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  width={640}
                  height={560}
                  className="aspect-[8/7] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sun text-navy-deep">
                  <f.icon className="size-5" />
                </span>
                <h3 className="text-lg font-extrabold text-primary-foreground">
                  {f.title}
                </h3>
              </div>
              <p className="mt-3 text-sm font-medium leading-relaxed text-primary-foreground/60">
                {f.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
