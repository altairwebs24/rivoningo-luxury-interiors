import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { PageIntro, SiteLayout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { business, media, projects } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Rivoningo Steel & Interior Design | Phalaborwa" },
    { name: "description", content: "Luxury kitchens, wardrobes, interiors and custom steelwork in Phalaborwa." },
    { property: "og:title", content: "Rivoningo Steel & Interior Design" },
    { property: "og:description", content: "Luxury kitchens, wardrobes, interiors and custom steelwork in Phalaborwa." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});

function Home() {
  return <SiteLayout>
    <section className="relative min-h-[76svh] overflow-hidden bg-ink">
      <video className="absolute inset-0 h-full w-full object-cover" src={media("rivoningo-project-film.mp4")} poster={media("project-film-poster.jpg")} autoPlay muted loop playsInline preload="auto" aria-label="Rivoningo interior project film" />
      <div className="hero-veil absolute inset-0" />
      <div className="relative mx-auto flex min-h-[76svh] max-w-7xl flex-col justify-end px-5 pb-12 pt-20 md:px-7 md:pb-16">
        <p className="eyebrow text-gold">Steel · Interior · Since {business.founded}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[0.92] text-ink-foreground md:text-7xl">Crafted for <span className="font-script text-gold">beautiful living</span></h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-ink-muted">Bespoke kitchens, wardrobes, feature walls and strong custom steelwork from Phalaborwa.</p>
        <div className="mt-6 flex flex-wrap gap-2"><Button asChild variant="gold" size="lg"><Link to="/contact">Book on WhatsApp <ArrowRight /></Link></Button><Button asChild variant="glass" size="lg"><Link to="/projects">View projects</Link></Button></div>
      </div>
    </section>
    <PageIntro eyebrow="The Rivoningo standard" title="Strength, detail and" script="quiet luxury">We deliver strong, stylish and custom work at affordable prices, guided by one simple promise: Simply the Best.</PageIntro>
    <section className="mx-auto grid max-w-7xl gap-px bg-border px-5 md:grid-cols-3 md:px-7">
      {[{ icon: Sparkles, t: "Interior finishes", d: "Kitchens, wardrobes, TV stands and statement walls." }, { icon: ShieldCheck, t: "Steel fabrication", d: "Gates, carports, frames and security doors." }, { icon: Wrench, t: "Complete renovations", d: "Partitioning, storage and transformed spaces." }].map(({ icon: Icon, t, d }) => <article key={t} className="bg-background p-6"><Icon className="h-6 w-6 text-gold" /><h2 className="mt-6 font-display text-2xl">{t}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p></article>)}
    </section>
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-7"><div className="flex items-end justify-between gap-6"><h2 className="font-display text-4xl md:text-6xl">Selected <span className="font-script text-gold">projects</span></h2><Link to="/projects" className="gold-link hidden md:inline-flex">All projects <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-8 grid gap-4 md:grid-cols-3">{projects.slice(0, 3).map((p) => <figure key={p.title} className="project-card"><img src={media(p.image)} alt={p.title} className="aspect-[4/5] w-full object-cover" /><figcaption className="p-4"><p className="eyebrow">{p.category}</p><p className="mt-2 font-display text-xl">{p.title}</p></figcaption></figure>)}</div></section>
  </SiteLayout>;
}
