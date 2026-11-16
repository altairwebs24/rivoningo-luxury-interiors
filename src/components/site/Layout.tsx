import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { business, media } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" }, { to: "/about", label: "About" }, { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" }, { to: "/contact", label: "Book" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-7">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img src={media("rivoningo-logo.jpeg")} alt="Rivoningo logo" className="h-10 w-10 object-contain" />
            <span className="leading-none"><span className="block font-display text-lg tracking-wide">Rivoningo</span><span className="block text-[0.58rem] uppercase tracking-[0.25em] text-gold">Steel & Interior</span></span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link-active" }} activeOptions={{ exact: item.to === "/" }}>{item.label}</Link>)}
          </nav>
          <button className="md:hidden" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && <nav className="flex flex-col border-t border-border px-5 py-3 md:hidden">{nav.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="py-2 font-display text-xl">{item.label}</Link>)}</nav>}
      </header>
      <main>{children}</main>
      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 py-10 md:grid-cols-3 md:px-7">
          <div><p className="font-script text-4xl text-gold">Simply the Best</p><p className="mt-3 max-w-sm text-sm leading-6 text-ink-muted">Steel strength, interior elegance and finishing made for the way you live.</p></div>
          <div className="space-y-3 text-sm text-ink-muted"><p className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold" />{business.address}</p><p className="flex gap-3"><Phone className="h-4 w-4 text-gold" />{business.phoneDisplay}</p><p className="flex gap-3"><Mail className="h-4 w-4 text-gold" />{business.email}</p></div>
          <div className="md:text-right"><p className="font-display text-2xl">{business.name}</p><p className="mt-2 text-sm text-ink-muted">Founded {business.founded} · {business.hours}</p></div>
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({ eyebrow, title, script, children }: { eyebrow: string; title: string; script: string; children?: ReactNode }) {
  return <section className="mx-auto max-w-7xl px-5 pb-9 pt-14 md:px-7 md:pt-20"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 max-w-5xl font-display text-4xl leading-[0.98] md:text-6xl">{title} <span className="font-script text-gold">{script}</span></h1>{children && <div className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{children}</div>}</section>;
}
