import { GraduationCap, ArrowUpRight } from "lucide-react";

const links = ["Home", "Courses", "About Us", "Pricing", "Contact"];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-background/90 py-2.5 pl-5 pr-2.5 shadow-lg shadow-navy/5 ring-1 ring-border backdrop-blur">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </span>
          <span className="text-xl font-extrabold tracking-tight text-foreground">
            CogNova
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#pricing"
          className="group inline-flex items-center gap-2 rounded-full bg-primary py-2.5 pl-5 pr-1.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Get Started
          <span className="grid size-8 place-items-center rounded-full bg-sun text-primary transition-transform group-hover:rotate-45">
            <ArrowUpRight className="size-4" />
          </span>
        </a>
      </nav>
    </header>
  );
}
