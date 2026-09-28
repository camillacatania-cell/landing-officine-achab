import Image from "next/image";
import { ArrowUpRight, MapPin, Envelope } from "@phosphor-icons/react/dist/ssr";

const NAV_LINKS = [
  { label: "Galleria", href: "#galleria" },
  { label: "Perché sceglierci", href: "#perche" },
  { label: "Contatti", href: "#contatti" },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueProps />
        <Highlight />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--background)]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <span className="font-display text-lg font-semibold tracking-tight">
          Officine Achab
        </span>
        <nav className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-muted-foreground)] transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contatti"
          className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--color-on-primary)] transition-colors hover:bg-[var(--color-secondary)]"
        >
          Vieni a trovarci
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 pt-16 pb-24 md:grid-cols-2 md:items-center md:pt-20">
      <div className="flex flex-col gap-6">
        <h1 className="font-display max-w-xl text-4xl font-semibold leading-none tracking-tight md:text-6xl">
          Il design che non trovi altrove.
        </h1>
        <p className="max-w-md text-base leading-relaxed text-[var(--color-muted-foreground)] md:text-lg">
          Officine Achab porta a Palermo pezzi unici di moda e arredo, nati
          dalle mani di designer emergenti e case che scelgono la qualità.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#galleria"
            className="flex h-12 items-center justify-center rounded-full bg-[var(--color-primary)] px-6 text-sm font-medium text-[var(--color-on-primary)] transition-colors hover:bg-[var(--color-secondary)]"
          >
            Scopri la galleria
          </a>
          <a
            href="#contatti"
            className="flex h-12 items-center justify-center rounded-full border border-[var(--color-border)] px-6 text-sm font-medium transition-colors hover:bg-[var(--color-muted)]"
          >
            Vieni a trovarci
          </a>
        </div>
      </div>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:aspect-[3/4]">
        <Image
          src="https://picsum.photos/seed/officine-achab-gallery-interior/900/1200"
          alt="Interno della galleria Officine Achab, via Alloro 13, Palermo"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}

const VALUE_PROPS = [
  {
    title: "Pezzi introvabili",
    body: "Ogni oggetto è selezionato personalmente, mai in serie, mai scontato nel gusto.",
    image: "officine-achab-unique-piece",
  },
  {
    title: "Voci nuove del design",
    body: "Spazio a designer siciliani e internazionali ancora poco conosciuti, insieme a marchi storici come Marimekko.",
    image: "officine-achab-emerging-designer",
  },
  {
    title: "Un'esperienza, non uno scaffale",
    body: "In via Alloro 13, nel cuore della Kalsa, ogni visita è un percorso tra storie e materiali.",
    image: "officine-achab-kalsa-store",
  },
];

function ValueProps() {
  return (
    <section id="galleria" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-6 md:grid-cols-3">
        <article className="flex flex-col gap-5 md:col-span-2 md:row-span-1">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
            <Image
              src={`https://picsum.photos/seed/${VALUE_PROPS[0].image}/1200/750`}
              alt={VALUE_PROPS[0].title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold">
              {VALUE_PROPS[0].title}
            </h3>
            <p className="mt-2 max-w-md text-[var(--color-muted-foreground)]">
              {VALUE_PROPS[0].body}
            </p>
          </div>
        </article>

        <div className="flex flex-col gap-6">
          {VALUE_PROPS.slice(1).map((item) => (
            <article key={item.title} className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={`https://picsum.photos/seed/${item.image}/700/525`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlight() {
  return (
    <section
      id="perche"
      className="border-y border-[var(--color-border)] bg-[var(--color-primary)] text-[var(--color-on-primary)]"
    >
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-display text-2xl leading-snug md:text-3xl">
          Due architetti hanno trasformato una vetrina in via Alloro in un
          punto di riferimento per il design a Palermo, premiato a Palermo
          Design Week per la sua capacità di raccontare gli oggetti che
          espone.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contatti" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Vieni a scoprirla di persona.
          </h2>
          <p className="max-w-md text-[var(--color-muted-foreground)]">
            La galleria è aperta nel cuore della Kalsa. Passa a trovarci o
            scrivici per sapere cosa c&apos;è in esposizione questa settimana.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <MapPin size={20} weight="regular" aria-hidden="true" />
              <span>Via Alloro 13, 90133 Palermo</span>
            </div>
            <div className="flex items-center gap-3">
              <Envelope size={20} weight="regular" aria-hidden="true" />
              <a
                href="mailto:info@officineachab.it"
                className="underline decoration-[var(--color-border)] underline-offset-4 hover:decoration-foreground"
              >
                info@officineachab.it
              </a>
            </div>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src="https://picsum.photos/seed/officine-achab-via-alloro-facade/900/675"
            alt="Facciata di Officine Achab su via Alloro, Palermo"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-[var(--color-muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <span>Officine Achab — Via Alloro 13, Palermo</span>
        <a
          href="mailto:info@officineachab.it"
          className="inline-flex items-center gap-1 hover:text-foreground"
        >
          Scrivici <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
