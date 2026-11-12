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
 * Zdjęcie tytułowe zajmuje 72% szerokości treści (klasa `lg:w-[72%]`),
 * a biała kopia tytułu jest przycinana od lewej na 100% − 72% = 28%.
 * Te dwie wartości muszą zostać spójne.
 */
const IMAGE_CLIP_LEFT = "28%";
const IMAGE_HEIGHT = "clamp(400px, 75vh, 850px)";

export function Hero({ introDone }: { introDone: boolean }) {
  return (
    <section
      id="hero"
      className="relative w-full pt-20"
      data-started={introDone ? "true" : "false"}
    >
      <div className="w-full max-w-screen-2xl mx-auto px-8 lg:px-16">
        {/* Hero Top Label */}
        <div className="pt-20 pb-10 flex justify-between items-start">
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
          po nim. Biała kopia tytułu nad zdjęciem jest przycięta do jego
          prostokąta, więc tylko litery znajdujące się na zdjęciu są białe.
        */}
        <div className="relative" style={{ minHeight: IMAGE_HEIGHT }}>
          <h1 className="hero-title font-serif" style={TITLE_STYLE}>
            <em className="italic">Był sobie projekt</em>
          </h1>

          <div
            className="hero-image relative z-10 mt-10 w-full overflow-hidden lg:absolute lg:top-0 lg:right-0 lg:mt-0 lg:w-[72%]"
            style={{ height: IMAGE_HEIGHT }}
          >
            <img
              className="w-full h-full object-cover object-top"
              src="/images/zytnia_3.webp"
              alt="Przedpokój z łukowym przejściem, drewnianą podłogą w jodełkę i schodami — projekt wnętrz domu w Toruniu"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* Biała kopia tytułu — widoczna wyłącznie na zdjęciu */}
          <h1
            aria-hidden="true"
            className="hero-title hidden lg:block absolute left-0 right-0 top-0 z-20 font-serif text-white pointer-events-none select-none"
            style={{
              ...TITLE_STYLE,
              clipPath: `inset(0 0 0 ${IMAGE_CLIP_LEFT})`,
            }}
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
