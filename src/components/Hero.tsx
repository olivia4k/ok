import type { CSSProperties } from "react";
import { RevealText } from "./Reveal";

/**
 * `lineHeight` 1.3 obejmuje pełny em-box fontu, dzięki czemu górna krawędź
 * boxu tytułu pokrywa się z górną krawędzią liter — można je wyrównać
 * z górą zdjęcia.
 */
const TITLE_STYLE: CSSProperties = {
  fontSize: "clamp(2.5rem, 10vw, 5rem)",
  lineHeight: 1.3,
  letterSpacing: "-0.02em",
};

/**
 * Zdjęcie tytułowe: na desktopie 72% szerokości treści po prawej,
 * na mobile poziomy kadr na całą szerokość. Biała kopia tytułu jest
 * przycinana do prostokąta zdjęcia na desktopie (patrz `.hero-title-on-image`
 * w index.css — 28% = 100% − 72%).
 */
const IMAGE_HEIGHT_CLASS = "lg:h-[clamp(400px,75vh,850px)]";

export function Hero({ introDone }: { introDone: boolean }) {
  return (
    <section
      id="hero"
      className="relative w-full pt-16 lg:pt-20"
      data-started={introDone ? "true" : "false"}
    >
      <div className="w-full max-w-screen-2xl mx-auto px-8 lg:px-16">
        {/* Hero Top Label */}
        <div className="pt-6 pb-6 lg:pt-20 lg:pb-10 flex justify-between items-start">
          <RevealText>
            <span className="micro-caps text-warm-slate">
              mgr inż. arch. Olivia Klepacka
            </span>
          </RevealText>
          <RevealText className="text-right hidden md:block">
            <span className="micro-caps text-warm-slate">
              Projektowanie i nadzór wnętrz · Toruń
            </span>
          </RevealText>
        </div>

        {/*
          Zdjęcie pojawia się pierwsze (delikatny zoom + fade), tytuł chwilę
          po nim — biały, na zdjęciu. Na desktopie tytuł zaczyna się poza
          zdjęciem (ciemny na papierze), a jego końcówka leży na zdjęciu.
        */}
        <div className="relative lg:min-h-[clamp(400px,75vh,850px)]">
          {/* Ciemny tytuł — tylko desktop; na mobile tytuł jest biały na zdjęciu */}
          <h1 className="hero-title hidden lg:block font-serif" style={TITLE_STYLE}>
            <em className="italic">Był sobie projekt</em>
          </h1>

          <div
            className={`hero-image relative z-10 aspect-[8/7] w-full overflow-hidden max-lg:-mx-8 max-lg:w-auto lg:absolute lg:top-0 lg:right-0 lg:aspect-auto lg:w-[72%] ${IMAGE_HEIGHT_CLASS}`}
          >
            <img
              className="w-full h-full object-cover object-top"
              src="/images/zytnia_3.webp"
              alt="Przedpokój z łukowym przejściem, drewnianą podłogą w jodełkę i schodami — projekt wnętrz domu w Toruniu"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* Biała kopia tytułu — na mobile nad całym zdjęciem, na desktopie
              przycięta do jego prostokąta */}
          <h1
            aria-hidden="true"
            className="hero-title hero-title-on-image absolute left-0 right-0 top-0 z-20 font-serif text-white pointer-events-none select-none max-lg:-left-8 max-lg:-right-8 max-lg:p-6"
            style={TITLE_STYLE}
          >
            <em className="italic">Był sobie projekt</em>
          </h1>
        </div>
      </div>

      {/* Hero Footer Bar */}
      <div className="w-full max-w-screen-2xl mx-auto px-8 lg:px-16 py-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="flex items-center gap-8">
          <span className="micro-caps text-warm-slate">
            Przewiń, aby odkrywać
          </span>
          <div className="w-8 h-px bg-warm-mist" />
        </div>
      </div>
    </section>
  );
}
