import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/studify/nav";
import { Hero } from "@/components/studify/hero";
import { Features } from "@/components/studify/features";
import { Courses } from "@/components/studify/courses";
import { Growth } from "@/components/studify/growth";
import { Testimonials } from "@/components/studify/testimonials";
import { Pricing } from "@/components/studify/pricing";
import { Faq } from "@/components/studify/faq";
import { Footer } from "@/components/studify/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CogNova Academy – Think Beyond, Learn Beyond" },
      {
        name: "description",
        content:
          "CogNova Academy offers expert-led, project-based courses in AI, design, web development and marketing. Think beyond, learn beyond.",
      },
      {
        property: "og:title",
        content: "CogNova Academy – Think Beyond, Learn Beyond",
      },
      {
        property: "og:description",
        content:
          "Project-based courses taught by real-world experts, plus a community that keeps you growing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
