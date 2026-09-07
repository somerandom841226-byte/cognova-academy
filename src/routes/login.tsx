import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Eye, EyeOff, GraduationCap, Lock, Mail } from "lucide-react";
import boltOrange from "@/assets/bolt-orange.png";
import boltBlue from "@/assets/bolt-blue.png";
import brain from "@/assets/brain.png";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In – CogNova Academy" },
      {
        name: "description",
        content:
          "Sign in to your CogNova Academy account to continue your project-based courses. New accounts are invitation only for now.",
      },
      { property: "og:title", content: "Sign In – CogNova Academy" },
      {
        property: "og:description",
        content:
          "Existing CogNova Academy learners can sign in here and pick up right where they left off.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/login" }],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-soft via-sky to-sky-soft px-5 py-10 sm:px-6 sm:py-14">
      <img
        src={boltOrange}
        alt=""
        aria-hidden
        className="animate-float-slow absolute left-[6%] top-[18%] hidden w-20 md:block"
      />
      <img
        src={boltBlue}
        alt=""
        aria-hidden
        className="animate-float-slower absolute right-[7%] top-[22%] hidden w-20 md:block"
      />
      <img
        src={brain}
        alt=""
        aria-hidden
        className="animate-float-slow absolute bottom-[12%] left-[14%] hidden w-16 lg:block"
      />

      <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </span>
          <span className="text-xl font-extrabold tracking-tight text-foreground">
            CogNova
          </span>
        </Link>

        <div className="mt-8 w-full rounded-[2rem] border border-white/50 bg-white/50 p-6 shadow-xl shadow-navy/10 backdrop-blur-xl sm:p-8">
          <h1 className="text-center text-2xl font-extrabold tracking-tight text-navy-deep sm:text-3xl">
            Welcome back
          </h1>
          <p className="mt-2 text-center text-sm font-medium text-navy-deep/70">
            Sign in to continue learning with CogNova Academy.
          </p>

          <form
            className="mt-7 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-navy-deep/70"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-navy-deep/40" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-white/60 bg-background/80 py-3 pl-11 pr-4 text-sm font-medium text-foreground outline-none transition-shadow placeholder:text-navy-deep/35 focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-navy-deep/70"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-navy-deep/40" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full rounded-full border border-white/60 bg-background/80 py-3 pl-11 pr-12 text-sm font-medium text-foreground outline-none transition-shadow placeholder:text-navy-deep/35 focus:ring-2 focus:ring-primary/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full text-navy-deep/50 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <label className="flex items-center gap-2 text-sm font-semibold text-navy-deep/70">
                <input
                  type="checkbox"
                  name="remember"
                  className="size-4 rounded border-navy-deep/30 accent-primary"
                />
                Remember me
              </label>
              <a
                href="#"
                className="text-sm font-bold text-navy-deep underline-offset-4 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 pl-6 pr-2 text-sm font-bold text-primary-foreground shadow-xl shadow-navy/20 transition-transform hover:scale-[1.02]"
            >
              Sign In
              <span className="grid size-9 place-items-center rounded-full bg-sun text-primary transition-transform group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
            </button>

            {submitted && (
              <p
                role="status"
                className="rounded-2xl bg-background/80 px-4 py-3 text-center text-xs font-semibold text-navy-deep/70"
              >
                Sign-in isn't connected yet — this page is the design only.
              </p>
            )}
          </form>

          <div className="mt-6 rounded-2xl border border-white/60 bg-background/70 px-4 py-3 text-center text-xs font-semibold leading-relaxed text-navy-deep/70">
            New sign-ups are closed for now. CogNova Academy accounts are
            invitation only —{" "}
            <a href="/#contact" className="font-bold text-navy-deep underline-offset-4 hover:underline">
              contact us
            </a>{" "}
            to request access.
          </div>
        </div>

        <Link
          to="/"
          className="mt-6 text-sm font-bold text-navy-deep/70 underline-offset-4 hover:text-navy-deep hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
