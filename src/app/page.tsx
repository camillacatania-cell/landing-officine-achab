import Image from "next/image";
import { ArrowUpRight, MapPin, Envelope } from "@phosphor-icons/react/dist/ssr";

const NAV_LINKS = [
  { label: "Lo studio", href: "#studio" },
  { label: "Le collezioni", href: "#collezioni" },
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
        <span className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <Image src="/images/mu-logo.png" alt="MU" width={40} height={19} />
          Creative Space
        </span>
        <nav className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-muted-foreground)] transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contatti"
          className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--color-on-primary)] transition-[background-color,transform] duration-200 ease-out hover:bg-[var(--color-secondary)] active:scale-[0.97]"
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
          Il design che si tocca.
        </h1>
        <p className="max-w-md text-base leading-relaxed text-[var(--color-muted-foreground)] md:text-lg">
          MU Creative Space porta a Palermo gioielli, tessuti e ceramiche
          disegnati e realizzati a mano da Cetti Davì e Dario Feo, in
          edizione limitata, dal 2003.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#collezioni"
            className="flex h-12 items-center justify-center rounded-full bg-[var(--color-primary)] px-6 text-sm font-medium text-[var(--color-on-primary)] transition-[background-color,transform] duration-200 ease-out hover:bg-[var(--color-secondary)] active:scale-[0.97]"
          >
            Scopri le collezioni
          </a>
          <a
            href="#contatti"
            className="flex h-12 items-center justify-center rounded-full border border-[var(--color-border)] px-6 text-sm font-medium transition-[background-color,transform] duration-200 ease-out hover:bg-[var(--color-muted)] active:scale-[0.97]"
          >
            Vieni a trovarci
          </a>
        </div>
      </div>
      <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:aspect-[3/4]">
        <Image
          src="/images/store-interior.jpg"
          alt="Interno dello store MU Creative Space, Piazza Cattolica, Palermo"
          fill
          priority
          className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
        />
      </div>
    </section>
  );
}

const VALUE_PROPS = [
  {
    title: "Fatto a mano, in edizione limitata",
    body: "Ogni pezzo nasce dal disegno e passa per la lavorazione manuale: nessuna serie, nessuna copia.",
    image: "/images/model-portrait.jpg",
    alt: "Modella con collana gioiello MU in ceramica",
  },
  {
    title: "Vent'anni di ricerca",
    body: "Cetti Davì e Dario Feo studiano materiali e forme dal 2003, tra Palermo e il resto del mondo.",
    image: "/images/mandala-candleholder.jpg",
    alt: "Portacandela in ceramica, collezione Mandala",
  },
  {
    title: "Uno spazio da toccare",
    body: "\"Si prega di toccare\": in Piazza Cattolica ogni oggetto si scopre anche con le mani.",
    image: "/images/ibridi-1.jpg",
    alt: "Complemento d'arredo IBRIDI, texture scultorea nera",
  },
];

function ValueProps() {
  return (
    <section id="collezioni" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-6 md:grid-cols-3">
        <article className="group flex flex-col gap-5 md:col-span-2 md:row-span-1">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
            <Image
              src={VALUE_PROPS[0].image}
              alt={VALUE_PROPS[0].alt}
              fill
              className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
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
            <article key={item.title} className="group flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
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
      id="studio"
      className="relative border-y border-[var(--color-border)] bg-[var(--color-primary)] text-[var(--color-on-primary)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-16 h-16 bg-gradient-to-b from-transparent to-[var(--color-primary)]"
      />
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-display text-2xl leading-snug md:text-3xl">
          &ldquo;I colori, le luci, gli odori, i suoni e soprattutto
          l&apos;esperienza tattile: tutto qui viene curato nei minimi
          dettagli.&rdquo;
        </p>
        <p className="mt-6 text-sm uppercase tracking-[0.2em] opacity-80">
          Cetti Davì, fondatrice di MU Creative Space
        </p>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-16 h-16 bg-gradient-to-t from-transparent to-[var(--color-primary)]"
      />
    </section>
  );
}

function Contact() {
  return (
    <section id="contatti" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Vieni a scoprirlo di persona.
          </h2>
          <p className="max-w-md text-[var(--color-muted-foreground)]">
            Lo studio è aperto in Piazza Cattolica, nel cuore della Kalsa.
            Passa a trovarci o scrivici per sapere cosa c&apos;è in
            lavorazione questa settimana.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <MapPin size={20} weight="regular" aria-hidden="true" />
              <span>Piazza Cattolica 4, 90133 Palermo</span>
            </div>
            <div className="flex items-center gap-3">
              <Envelope size={20} weight="regular" aria-hidden="true" />
              <a
                href="mailto:info@mucreativespace.com"
                className="underline decoration-[var(--color-border)] underline-offset-4 transition-colors duration-200 hover:decoration-foreground"
              >
                info@mucreativespace.com
              </a>
            </div>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/twillin-campaign.jpg"
            alt="Campagna Twillin, foulard in seta stampata MU Creative Space"
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
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-[var(--color-muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <span>MU Creative Space — Piazza Cattolica 4, Palermo</span>
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contatti"
            className="transition-colors duration-200 hover:text-foreground"
          >
            Privacy
          </a>
          <a
            href="mailto:info@mucreativespace.com"
            className="inline-flex items-center gap-1 transition-colors duration-200 hover:text-foreground"
          >
            Scrivici <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
