import { ArrowUpRight, Clock3, PlaySquare, Star } from "lucide-react";
import courseMarketing from "@/assets/course-marketing.jpg";
import courseDesign from "@/assets/course-design.jpg";
import courseWebdev from "@/assets/course-webdev.jpg";

const courses = [
  {
    image: courseMarketing,
    bg: "bg-blush",
    tag: "Marketing",
    tagBg: "bg-coral/15 text-coral",
    title: "AI Smart Kids",
    lessons: 42,
    hours: 12,
    rating: "4.9",
    price: "$49",
  },
  {
    image: courseDesign,
    bg: "bg-lavender",
    tag: "Design",
    tagBg: "bg-sky-deep/20 text-navy",
    title: "Graphic Design Fundamentals",
    lessons: 36,
    hours: 9,
    rating: "4.8",
    price: "$39",
  },
  {
    image: courseWebdev,
    bg: "bg-mint",
    tag: "Development",
    tagBg: "bg-mint text-navy",
    title: "Modern Web Development",
    lessons: 58,
    hours: 18,
    rating: "5.0",
    price: "$59",
  },
];

export function Courses() {
  return (
    <section id="courses" className="bg-background py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-coral">
              Popular Courses
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy-deep md:text-5xl">
              Explore Our <span className="hl-blue hl-blue-foreground">Popular</span>{" "}
              Courses
            </h2>
          </div>
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-primary py-3 pl-6 pr-1.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            View All Courses
            <span className="grid size-8 place-items-center rounded-full bg-sun text-primary transition-transform group-hover:rotate-45">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>

        <div className="mt-10 grid sm:mt-14 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <article
              key={c.title}
              className="group rounded-3xl bg-card p-4 shadow-sm ring-1 ring-border transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-navy/10"
            >
              <div
                className={`relative overflow-hidden rounded-2xl ${c.bg} grid place-items-center p-6`}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  width={640}
                  height={480}
                  className="aspect-[4/3] w-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2"
                />
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide ${c.tagBg}`}
                >
                  {c.tag}
                </span>
              </div>

              <div className="px-2 pb-2 pt-5">
                <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <PlaySquare className="size-3.5 text-coral" />
                    {c.lessons} Lessons
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="size-3.5 text-coral" />
                    {c.hours} Hours
                  </span>
                  <span className="ml-auto inline-flex items-center gap-1 text-foreground">
                    <Star className="size-3.5 fill-sun text-sun" />
                    {c.rating}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-extrabold leading-snug text-navy-deep">
                  {c.title}
                </h3>

                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <p className="text-xl font-extrabold text-navy-deep">
                    {c.price}
                    <span className="text-xs font-semibold text-muted-foreground">
                      {" "}
                      / course
                    </span>
                  </p>
                  <span className="grid size-10 place-items-center rounded-full bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}

          <article className="flex flex-col items-center justify-center rounded-3xl bg-card p-6 text-center shadow-sm ring-1 ring-border transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-navy/10 sm:max-w-none">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              More coming soon
            </p>
            <h3 className="mt-3 text-2xl font-extrabold text-navy-deep">
              View more
            </h3>
            <p className="mt-2 max-w-[16rem] text-sm font-medium text-muted-foreground">
              We just launched CogNova Academy and are busy adding new courses.
            </p>
            <a
              href="#pricing"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Get notified
              <ArrowUpRight className="size-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
