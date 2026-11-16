import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteLayout } from "@/components/site/Layout";
import { business, media } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Rivoningo | Justice Reaans Marutha" }, { name: "description", content: "Meet Justice Reaans Marutha, owner and director of Rivoningo since 2021." },
    { property: "og:title", content: "About Rivoningo Steel & Interior Design" }, { property: "og:description", content: "Meet the owner and the story behind Rivoningo." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: media("justice-marutha.jpg") }, { name: "twitter:image", content: media("justice-marutha.jpg") },
  ] }),
  component: About,
});

function About() {
  return <SiteLayout><PageIntro eyebrow="Our story" title="Built with vision," script="finished with heart">Since {business.founded}, Rivoningo has brought together the reliability of steel and the warmth of thoughtful interiors.</PageIntro>
    <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-16 md:grid-cols-2 md:px-7"><img src={media("justice-marutha.jpg")} alt="Justice Reaans Marutha" className="aspect-[4/5] w-full object-cover shadow-luxury" /><div><p className="eyebrow">Owner & Director</p><h2 className="mt-3 font-display text-4xl md:text-6xl">{business.owner}</h2><p className="mt-5 text-base leading-7 text-muted-foreground">Justice founded Rivoningo with a clear belief: every client deserves work that is strong, stylish and personal. From practical steel fabrication to elegant kitchen units, each project is approached with care and pride.</p><blockquote className="mt-7 border-l-2 border-gold pl-5 font-script text-4xl text-gold">Simply the Best</blockquote><p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">{business.legal}</p></div></section>
  </SiteLayout>;
}
