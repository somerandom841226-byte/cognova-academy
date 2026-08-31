import { ArrowUpRight } from "lucide-react";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import instructor3 from "@/assets/instructor-3.jpg";
import instructor4 from "@/assets/instructor-4.jpg";
import instructor5 from "@/assets/instructor-5.jpg";
import instructor6 from "@/assets/instructor-6.jpg";

const instructors = [
  { image: instructor1, name: "Daniel Reyes", role: "Marketing Strategist", bg: "bg-blush" },
  { image: instructor2, name: "Emma Collins", role: "Brand Designer", bg: "bg-mint" },
  { image: instructor3, name: "Amara Osei", role: "Data Scientist", bg: "bg-sun-soft" },
  { image: instructor4, name: "Sofia Meyer", role: "UX Researcher", bg: "bg-lavender" },
  { image: instructor5, name: "Lucas Weber", role: "Web Developer", bg: "bg-sky-soft" },
  { image: instructor6, name: "Priya Nair", role: "AI Engineer", bg: "bg-blush" },
];

export function Instructors() {
  return (
    <section className="bg-background py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-coral">
            Our Mentors
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy-deep md:text-5xl">
            Meet Our Expert{" "}
            <span className="hl-blue hl-blue-foreground">Instructors</span>
          </h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-muted-foreground">
            Learn directly from professionals who have shipped real products,
            grown real brands, and love teaching.
          </p>
        </div>

        <div className="mt-10 grid sm:mt-14 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((t) => (
            <article
              key={t.name}
              className="group rounded-3xl bg-card p-4 shadow-sm ring-1 ring-border transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-navy/10"
            >
              <div
                className={`relative overflow-hidden rounded-2xl ${t.bg}`}
              >
                <img
                  src={t.image}
                  alt={`Portrait of ${t.name}`}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 right-3 grid size-10 place-items-center rounded-full bg-sun text-navy-deep opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <div className="px-2 pb-2 pt-4 text-center">
                <h3 className="text-lg font-extrabold text-navy-deep">
                  {t.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">
                  {t.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
