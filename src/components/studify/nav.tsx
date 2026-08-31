import { useState } from "react";
import { GraduationCap, ArrowUpRight, Menu, X } from "lucide-react";

const links = ["Home", "Courses", "About Us", "Pricing", "Contact"];

const hrefFor = (label: string) =>
  `#${label.toLowerCase().replace(/\s+/g, "-")}`;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <nav className="mx-auto max-w-6xl rounded-3xl bg-background/90 shadow-lg shadow-navy/5 ring-1 ring-border backdrop-blur lg:rounded-full">
        <div className="flex items-center justify-between py-2.5 pl-4 pr-2.5 sm:pl-5">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
              <GraduationCap className="size-5" />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-foreground sm:text-xl">
              CogNova
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((label) => (
              <li key={label}>
                <a
                  href={hrefFor(label)}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#pricing"
              className="group hidden items-center gap-2 rounded-full bg-primary py-2.5 pl-5 pr-1.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Get Started
              <span className="grid size-8 place-items-center rounded-full bg-sun text-primary transition-transform group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-10 place-items-center rounded-full bg-secondary text-foreground lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border px-4 pb-4 pt-3 lg:hidden">
            <ul className="space-y-1">
              {links.map((label) => (
                <li key={label}>
                  <a
                    href={hrefFor(label)}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground sm:hidden"
            >
              Get Started
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
