import { GraduationCap, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import footerKids from "@/assets/footer-kids.jpg";

const columns = [
  {
    title: "Platform",
    links: ["Browse Courses", "Become a Mentor", "Pricing", "For Teams"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Press Kit"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact", "Community", "Status"],
  },
];

const socials = [Twitter, Instagram, Youtube, Linkedin];

export function Footer() {
  return (
    <footer id="contact" className="bg-navy-deep pt-20 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-full bg-sun text-navy-deep">
                <GraduationCap className="size-5" />
              </span>
              <span className="text-xl font-extrabold tracking-tight">
                CogNova Academy
              </span>
            </a>
            <p className="mt-4 text-sm font-medium leading-relaxed text-primary-foreground/60">
              Fun, practical courses taught by real-world experts. Learn
              smarter, grow faster — one project at a time.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#contact"
                  aria-label="CogNova on social media"
                  className="grid size-10 place-items-center rounded-full bg-navy-card text-primary-foreground/80 transition-colors hover:bg-sun hover:text-navy-deep"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-extrabold uppercase tracking-widest text-sun">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#contact"
                        className="text-sm font-semibold text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <img
          src={footerKids}
          alt="Illustration of students learning together under a tree"
          loading="lazy"
          width={1536}
          height={640}
          className="mx-auto mt-16 w-full max-w-3xl rounded-3xl"
        />

        <p
          aria-hidden
          className="mt-8 select-none text-center text-[18vw] font-extrabold leading-none tracking-tight text-navy-card md:text-[14rem]"
        >
          CogNova
        </p>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-navy-card py-6 text-xs font-semibold text-primary-foreground/50 sm:flex-row">
          <p>© 2026 CogNova Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#contact" className="hover:text-primary-foreground">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-primary-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
