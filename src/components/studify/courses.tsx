import { ArrowUpRight, Clock3, PlaySquare, Star } from "lucide-react";
import courseMarketing from "@/assets/course-marketing.jpg";
import courseDesign from "@/assets/course-design.jpg";
import courseWebdev from "@/assets/course-webdev.jpg";
import courseData from "@/assets/course-data.jpg";
import courseAi from "@/assets/course-ai.jpg";
import courseUiux from "@/assets/course-uiux.jpg";

const courses = [
  {
    image: courseMarketing,
    bg: "bg-blush",
    tag: "Marketing",
    tagBg: "bg-coral/15 text-coral",
    title: "Digital Marketing Mastery",
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
  {
    image: courseData,
    bg: "bg-sun-soft",
    tag: "Data",
    tagBg: "bg-sun text-navy-deep",
    title: "Data Science Bootcamp",
    lessons: 47,
    hours: 15,
    rating: "4.9",
    price: "$69",
  },
  {
    image: courseAi,
    bg: "bg-sky-soft",
    tag: "AI",
    tagBg: "bg-navy text-primary-foreground",
    title: "AI & Machine Learning Basics",
    lessons: 31,
    hours: 11,
    rating: "4.8",
    price: "$59",
  },
  {
    image: courseUiux,
    bg: "bg-blush",
    tag: "UI/UX",
    tagBg: "bg-coral/15 text-coral",
    title: "UI/UX Design Essentials",
    lessons: 39,
    hours: 10,
    rating: "4.9",
    price: "$45",
  },
];

export function Courses() {
  return (
    <section id="courses" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </div>
    </section>
  );
}
