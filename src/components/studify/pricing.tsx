import { Check, ArrowUpRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    blurb: "Perfect for dipping your toes in and exploring the basics.",
    features: [
      "Access to 20+ free courses",
      "Community forums",
      "Course completion badges",
      "Mobile & web access",
    ],
    featured: false,
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "$12",
    period: "/ month",
    blurb: "Our most popular plan for learners who want real momentum.",
    features: [
      "Unlimited access to all 300+ courses",
      "Hands-on projects & certificates",
      "1:1 mentor feedback",
      "Offline downloads",
      "Priority community support",
    ],
    featured: true,
    cta: "Go Pro",
  },
  {
    name: "Teams",
    price: "$29",
    period: "/ seat / month",
    blurb: "Upskill your whole team with shared tracks and analytics.",
    features: [
      "Everything in Pro",
      "Team learning paths",
      "Progress analytics dashboard",
      "Dedicated success manager",
    ],
    featured: false,
    cta: "Contact Sales",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-mist py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-coral">
            Pricing
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy-deep md:text-5xl">
            Simple Plans for{" "}
            <span className="hl-blue hl-blue-foreground">Every Learner</span>
          </h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-muted-foreground">
            Start free, upgrade when you're ready. No hidden fees, cancel
            anytime.
          </p>
        </div>

        <div className="mt-10 grid sm:mt-14 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.featured
                  ? "bg-navy text-primary-foreground shadow-2xl shadow-navy/30 lg:-my-4 lg:py-12"
                  : "bg-card shadow-sm ring-1 ring-border"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-sun px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-navy-deep">
                  Most Popular
                </span>
              )}
              <h3
                className={`text-lg font-extrabold ${
                  plan.featured ? "text-sun" : "text-navy-deep"
                }`}
              >
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`text-5xl font-extrabold tracking-tight ${
                    plan.featured ? "text-primary-foreground" : "text-navy-deep"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm font-semibold ${
                    plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`mt-3 text-sm font-medium leading-relaxed ${
                  plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {plan.blurb}
              </p>

              <ul className="mt-7 flex-1 space-y-3.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
                        plan.featured
                          ? "bg-sun text-navy-deep"
                          : "bg-mint text-navy-deep"
                      }`}
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        plan.featured ? "text-primary-foreground/90" : "text-foreground/80"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3.5 pl-7 pr-2 text-sm font-bold transition-transform hover:scale-[1.03] ${
                  plan.featured
                    ? "bg-sun text-navy-deep"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {plan.cta}
                <span
                  className={`grid size-9 place-items-center rounded-full transition-transform group-hover:rotate-45 ${
                    plan.featured
                      ? "bg-navy-deep text-sun"
                      : "bg-sun text-primary"
                  }`}
                >
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
