import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/studify/nav";
import { Hero } from "@/components/studify/hero";
import { Features } from "@/components/studify/features";
import { Courses } from "@/components/studify/courses";
import { Growth } from "@/components/studify/growth";
import { Instructors } from "@/components/studify/instructors";
import { Testimonials } from "@/components/studify/testimonials";
import { Pricing } from "@/components/studify/pricing";
import { Faq } from "@/components/studify/faq";
import { Footer } from "@/components/studify/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studify – Learn Smarter, Grow Faster" },
      {
        name: "description",
        content:
          "Studify is a playful learning platform with expert-led courses, real projects and a community that helps you grow your skills.",
      },
      { property: "og:title", content: "Studify – Learn Smarter, Grow Faster" },
      {
        property: "og:description",
        content:
          "Expert-led courses, real projects and a supportive community. Learn smarter with Studify.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Growth />
        <Instructors />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
