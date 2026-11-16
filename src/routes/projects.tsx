import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteLayout } from "@/components/site/Layout";
import { media, projects } from "@/lib/site";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects | Rivoningo Steel & Interior Design" }, { name: "description", content: "Explore Rivoningo kitchens, wardrobes and interior feature walls." },
    { property: "og:title", content: "Rivoningo Projects" }, { property: "og:description", content: "A gallery of refined kitchens, wardrobes and interiors." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: media("luxury-kitchen.jpg") }, { name: "twitter:image", content: media("luxury-kitchen.jpg") },
  ] }),
  component: Projects,
});

function Projects() {
  return <SiteLayout><PageIntro eyebrow="Portfolio" title="Spaces that" script="speak softly">A selection of kitchens, wardrobes and feature walls showing the finish and character we bring to every room.</PageIntro><section className="mx-auto grid max-w-7xl gap-6 px-5 pb-24 sm:grid-cols-2 lg:grid-cols-3 md:px-8">{projects.map((p, i) => <figure key={p.title} className={`project-card ${i % 3 === 1 ? "lg:translate-y-12" : ""}`}><img src={media(p.image)} alt={p.title} className="aspect-[3/4] w-full object-cover" /><figcaption className="p-5"><p className="eyebrow">{p.category}</p><p className="mt-2 font-display text-2xl">{p.title}</p></figcaption></figure>)}</section></SiteLayout>;
}
