import { Quote, Star } from "lucide-react";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";

const testimonials = [
  {
    avatar: avatar1,
    name: "Maya Thompson",
    role: "Junior UX Designer",
    quote:
      "CogNova Academy made learning feel like a game I actually wanted to play. Three months in, I landed my first design job — the projects in my portfolio did the talking.",
  },
  {
    avatar: avatar2,
    name: "Jonas Berg",
    role: "Marketing Manager",
    quote:
      "The lessons are short, sharp, and immediately useful. I applied the growth-marketing course at work the same week and our signups jumped 30%.",
  },
  {
    avatar: avatar3,
    name: "Lena Fischer",
    role: "Frontend Developer",
    quote:
      "I tried five platforms before CogNova. This is the first one I actually finished. The mentors' feedback on my projects made all the difference.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-navy py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-sun">
            Testimonials
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl">
            Loved by{" "}
            <span className="hl-blue hl-blue-foreground">Learners</span>{" "}
            Everywhere
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl bg-navy-card p-7 ring-1 ring-primary-foreground/10 transition-transform hover:-translate-y-2"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-sun text-navy-deep">
                <Quote className="size-5 fill-current" />
              </span>
              <div className="mt-5 flex items-center gap-1 text-sun">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm font-medium leading-relaxed text-primary-foreground/75">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-primary-foreground/10 pt-5">
                <img
                  src={t.avatar}
                  alt={`Avatar of ${t.name}`}
                  loading="lazy"
                  width={96}
                  height={96}
                  className="size-12 rounded-full border-2 border-sun object-cover"
                />
                <div>
                  <p className="text-sm font-extrabold text-primary-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs font-semibold text-primary-foreground/50">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
