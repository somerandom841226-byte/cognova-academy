import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Do I need any experience to start a course?",
    a: "Not at all. Most of our courses are designed for complete beginners, with clear learning paths that build up from the fundamentals. Advanced tracks are labeled so you always know what to expect.",
  },
  {
    q: "Do I get a certificate when I finish?",
    a: "Yes! Every completed course comes with a verified certificate you can share on LinkedIn or add to your resume. Pro members also get project reviews from mentors.",
  },
  {
    q: "Can I learn at my own pace?",
    a: "Absolutely. All courses are self-paced with lifetime access while subscribed. Learn 10 minutes a day or binge a whole track on the weekend — it's up to you.",
  },
  {
    q: "What if a course isn't right for me?",
    a: "No worries — you can switch courses anytime at no cost, and every paid plan comes with a 14-day money-back guarantee, no questions asked.",
  },
  {
    q: "How do mentors and the community work?",
    a: "Each course has a dedicated community space where learners share projects and feedback. Pro members can also book 1:1 mentor sessions for personalized guidance.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-coral">
            FAQ
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy-deep md:text-5xl">
            Questions?{" "}
            <span className="hl-blue hl-blue-foreground">Answered.</span>
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-3xl ring-1 transition-colors ${
                  isOpen
                    ? "bg-sky-soft ring-sky-deep/30"
                    : "bg-card ring-border hover:bg-mist"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-extrabold text-navy-deep md:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "rotate-45 bg-navy-deep text-sun"
                        : "bg-secondary text-navy-deep"
                    }`}
                  >
                    <Plus className="size-4" strokeWidth={3} />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm font-medium leading-relaxed text-navy-deep/70 md:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
