import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageIntro, SiteLayout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { bookingMessage, business, services, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Book a Consultation | Rivoningo" }, { name: "description", content: "Send Rivoningo a prefilled WhatsApp booking request." },
    { property: "og:title", content: "Book Rivoningo" }, { property: "og:description", content: "Request kitchens, wardrobes, renovations or steelwork via WhatsApp." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Contact,
});

const empty = { name: "", phone: "", service: services[0], date: "", location: "", details: "" };
function Contact() {
  const [values, setValues] = useState(empty);
  const update = (key: keyof typeof empty, value: string) => setValues((v) => ({ ...v, [key]: value }));
  const submit = (e: FormEvent) => { e.preventDefault(); window.open(whatsappUrl(bookingMessage(values)), "_blank", "noopener,noreferrer"); };
  return <SiteLayout><PageIntro eyebrow="Booking" title="Let’s create" script="something remarkable">Complete the form and WhatsApp will open with your booking request ready to send.</PageIntro>
    <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 lg:grid-cols-[1fr_1.4fr] md:px-8"><aside className="space-y-7 bg-ink p-8 text-ink-foreground md:p-10"><h2 className="font-display text-4xl">Visit or message us</h2>{[{ i: MapPin, t: business.address }, { i: MessageCircle, t: business.phoneDisplay }, { i: Mail, t: business.email }, { i: Clock, t: business.hours }].map(({ i: Icon, t }) => <p key={t} className="flex gap-4 text-ink-muted"><Icon className="h-5 w-5 shrink-0 text-gold" />{t}</p>)}</aside>
      <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2"><Field label="Full name"><input required className="lux-input" value={values.name} onChange={(e) => update("name", e.target.value)} /></Field><Field label="Phone number"><input required type="tel" className="lux-input" value={values.phone} onChange={(e) => update("phone", e.target.value)} /></Field><Field label="Service"><select className="lux-input" value={values.service} onChange={(e) => update("service", e.target.value)}>{services.map((s) => <option key={s}>{s}</option>)}</select></Field><Field label="Preferred date"><input type="date" className="lux-input" value={values.date} onChange={(e) => update("date", e.target.value)} /></Field><div className="sm:col-span-2"><Field label="Project location"><input className="lux-input" value={values.location} onChange={(e) => update("location", e.target.value)} /></Field></div><div className="sm:col-span-2"><Field label="Tell us about your project"><textarea required rows={6} className="lux-input resize-none" value={values.details} onChange={(e) => update("details", e.target.value)} /></Field></div><Button type="submit" variant="gold" size="xl" className="sm:col-span-2"><MessageCircle /> Send booking on WhatsApp</Button></form></section>
  </SiteLayout>;
}
function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="block"><span className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>{children}</label>; }
