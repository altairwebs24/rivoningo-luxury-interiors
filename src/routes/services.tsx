import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro, SiteLayout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services | Rivoningo Steel & Interior Design" }, { name: "description", content: "Kitchen units, wardrobes, renovations, gates, carports and security doors." },
    { property: "og:title", content: "Rivoningo Services" }, { property: "og:description", content: "Custom interior and steelwork services in Phalaborwa." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Services,
});

function Services() {
  return <SiteLayout><PageIntro eyebrow="What we create" title="Every detail," script="made to measure">From interiors that feel refined to steelwork made to protect, we shape each piece around your space.</PageIntro><section className="mx-auto grid max-w-7xl gap-px bg-border px-5 sm:grid-cols-2 lg:grid-cols-3 md:px-8">{services.map((s, i) => <article key={s} className="group bg-background p-8"><span className="font-display text-gold">{String(i + 1).padStart(2, "0")}</span><h2 className="mt-12 font-display text-3xl transition group-hover:text-gold">{s}</h2></article>)}</section><section className="mx-auto max-w-7xl px-5 py-24 text-center md:px-8"><h2 className="font-display text-5xl">Have a space in mind?</h2><Button asChild variant="gold" size="xl" className="mt-8"><Link to="/contact">Request a booking <ArrowRight /></Link></Button></section></SiteLayout>;
}
