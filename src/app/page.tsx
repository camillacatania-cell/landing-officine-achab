import Image from "next/image";
import { ArrowUpRight, MapPin, Envelope, Phone } from "@phosphor-icons/react/dist/ssr";

const NAV_LINKS = [
  { label: "Il palazzo", href: "#palazzo" },
  { label: "La cucina", href: "#cucina" },
  { label: "La cantina", href: "#cantina" },
  { label: "Contatti", href: "#contatti" },
];

const DISHES = [
  {
    title: "Tonno scottato, gelatina di agrumi",
    body: "Crudo di tonno rosso siciliano, note agrumate e fiori eduli — un piatto che gioca sulla materia prima, non sulla tecnica.",
    image: "/images-vespri/piatto-tonno2.jpg",
    alt: "Tonno scottato con gelatina di agrumi e fiori eduli",
  },
  {
    title: "Morchelle e albicocca",
    body: "Funghi morchella, mousse leggera, albicocche marinate: la ricerca di Alberto Rizzo tra territorio e tecnica contemporanea.",
    image: "/images-vespri/piatto-morchelle.jpg",
    alt: "Piatto con funghi morchella e albicocche marinate",
  },
  {
    title: "Zuppa verde, capasanta",
    body: "Vellutata di verdure di stagione, capasanta scottata, olio aromatico — la cucina di mare incontra l'orto.",
    image: "/images-vespri/piatto-zuppa.jpg",
    alt: "Zuppa verde con capasanta scottata",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1">
        <Hero />
        <Palazzo />
        <Cucina />
        <Cantina />
        <Contatti />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--background)]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="font-display text-lg font-semibold tracking-tight">
          Osteria dei Vespri
        </a>
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
          className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--color-on-primary)] transition-[background-color,transform] duration-200 ease-out hover:bg-[var(--color-accent)] active:scale-[0.97]"
        >
          Prenota un tavolo
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src="/images-vespri/facciata.jpg"
          alt="Facciata e dehor di Osteria dei Vespri, Piazza Croce dei Vespri, Palermo"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end gap-6 px-6 pb-16 md:px-16">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">
            Palazzo Gangi Valguarnera · Kalsa, Palermo
          </p>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.05] text-white md:text-6xl">
            Si mangia nella sala dove Visconti girò il ballo del Gattopardo.
          </h1>
          <p className="max-w-xl text-base text-white/85 md:text-lg">
            Dal 1999, cucina siciliana contemporanea di Alberto Rizzo e una cantina
            di oltre 650 etichette, dentro le mura di uno dei palazzi più belli di Palermo.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contatti"
              className="flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-[var(--color-foreground)] transition-[background-color,transform] duration-200 ease-out hover:bg-[var(--color-muted)] active:scale-[0.97]"
            >
              Prenota un tavolo
            </a>
            <a
              href="#cucina"
              className="flex h-12 items-center justify-center rounded-full border border-white/60 px-6 text-sm font-medium text-white transition-[background-color,transform] duration-200 ease-out hover:bg-white/10 active:scale-[0.97]"
            >
              Scopri la cucina
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Palazzo() {
  return (
    <section id="palazzo" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:gap-16">
      <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:aspect-[3/4]">
        <Image
          src="/images-vespri/sala-palazzo.jpg"
          alt="Sala interna di Palazzo Gangi Valguarnera, affreschi e lampadari di cristallo"
          fill
          className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
          Il palazzo
        </p>
        <h2 className="font-display text-3xl leading-tight md:text-4xl">
          Tra Palazzo Bonet e Palazzo Valguarnera Ganci
        </h2>
        <p className="text-base leading-relaxed text-[var(--color-muted-foreground)]">
          Avvolta dalle mura dell&apos;antico Palazzo Gangi, l&apos;Osteria dei Vespri osserva
          silenziosa i passanti tra Piazza Croce dei Vespri e la storica Galleria d&apos;Arte
          Moderna. È qui, nel 1963, che Luchino Visconti girò la sequenza del gran ballo
          ne <em>Il Gattopardo</em>.
        </p>
        <blockquote className="border-l-2 border-[var(--color-accent)] pl-6 font-display text-xl italic leading-snug text-[var(--color-foreground)]">
          &ldquo;Se vogliamo che tutto rimanga com&apos;è, bisogna che tutto cambi.&rdquo;
          <footer className="mt-2 text-sm not-italic text-[var(--color-muted-foreground)]">
            G. T. di Lampedusa, Il Gattopardo
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

function Cucina() {
  return (
    <section
      id="cucina"
      className="relative border-y border-[var(--color-border)] bg-[var(--color-secondary)] text-[var(--color-on-secondary)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-16 h-16 bg-gradient-to-b from-transparent to-[var(--color-secondary)]"
      />
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">La cucina</p>
          <h2 className="max-w-2xl font-display text-3xl leading-tight md:text-4xl">
            Sicilianità contaminata da idee gastronomiche più settentrionali.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-white/80">
            La cucina, guidata da Alberto Rizzo, parte dalla tradizione del territorio
            per incontrare altre tradizioni — elaborata con tecniche innovative, senza
            tradire mai il prodotto.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {DISHES.map((dish) => (
            <article key={dish.title} className="group flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={dish.image}
                  alt={dish.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-display text-lg">{dish.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/75">{dish.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-16 h-16 bg-gradient-to-t from-transparent to-[var(--color-secondary)]"
      />
    </section>
  );
}

function Cantina() {
  return (
    <section id="cantina" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:gap-16">
      <div className="order-2 flex flex-col gap-6 md:order-1">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
          La cantina
        </p>
        <h2 className="font-display text-3xl leading-tight md:text-4xl">
          Più di 650 etichette, italiane e internazionali
        </h2>
        <p className="text-base leading-relaxed text-[var(--color-muted-foreground)]">
          Punto di forza dell&apos;Osteria dei Vespri, la cantina raccoglie classici
          intramontabili, vini naturali e biodinamici, ma anche &ldquo;vino frutto&rdquo;
          e vini barricati — una selezione curata quanto la sala che li ospita.
        </p>
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-10">
          <div>
            <p className="font-display text-3xl">650+</p>
            <p className="text-sm text-[var(--color-muted-foreground)]">etichette in carta</p>
          </div>
          <div>
            <p className="font-display text-3xl">1999</p>
            <p className="text-sm text-[var(--color-muted-foreground)]">anno di apertura</p>
          </div>
        </div>
      </div>
      <div className="group relative order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl md:order-2">
        <Image
          src="/images-vespri/carta-vini.jpg"
          alt="Carta dei vini di Osteria dei Vespri su tavolo esterno"
          fill
          className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
        />
      </div>
    </section>
  );
}

function Contatti() {
  return (
    <section id="contatti" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Vi aspettiamo tra le mura del Gattopardo.
          </h2>
          <p className="max-w-md text-[var(--color-muted-foreground)]">
            La sala è piccola e la richiesta alta: prenotare con anticipo è
            la norma, non l&apos;eccezione.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <MapPin size={20} weight="regular" aria-hidden="true" />
              <span>Piazza Croce dei Vespri 6, 90133 Palermo</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} weight="regular" aria-hidden="true" />
              <a
                href="tel:+390916171631"
                className="underline decoration-[var(--color-border)] underline-offset-4 transition-colors duration-200 hover:decoration-foreground"
              >
                +39 091 617 1631
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Envelope size={20} weight="regular" aria-hidden="true" />
              <a
                href="mailto:info@osteriadeivespri.it"
                className="underline decoration-[var(--color-border)] underline-offset-4 transition-colors duration-200 hover:decoration-foreground"
              >
                info@osteriadeivespri.it
              </a>
            </div>
          </div>
          <a
            href="tel:+390916171631"
            className="inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 text-sm font-medium text-[var(--color-on-primary)] transition-[background-color,transform] duration-200 ease-out hover:bg-[var(--color-accent)] active:scale-[0.97]"
          >
            Chiama per prenotare <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images-vespri/sala-vino.jpg"
            alt="Sala di Osteria dei Vespri, tavolo apparecchiato con bottiglia di vino"
            fill
            className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
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
        <span>Osteria dei Vespri — Piazza Croce dei Vespri 6, Palermo</span>
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
            href="mailto:info@osteriadeivespri.it"
            className="inline-flex items-center gap-1 transition-colors duration-200 hover:text-foreground"
          >
            Scrivici <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
