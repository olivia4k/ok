import { RevealText, RevealWrapper } from "./Reveal";

export function Hero() {
  return (
    <section id="hero" className="relative w-full pt-20">
      <div className="w-full max-w-screen-2xl mx-auto px-8 lg:px-16">
        {/* Hero Top Label */}
        <div className="pt-20 pb-10 flex justify-between items-start">
          <RevealText>
            <span className="micro-caps text-warm-slate">
              mgr inź. arch. Olivia Klepacka
            </span>
          </RevealText>
          <RevealText className="text-right hidden md:block">
            <span className="micro-caps text-warm-slate">
              Architektura wnętrz i projektowanie przestrzeni
            </span>
          </RevealText>
        </div>

        {/* Hero Title */}
        <div className="relative mb-12">
          <RevealText>
            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(2.5rem, 10vw, 5rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
              }}
            >
              <em className="italic"> Był sobie projekt</em>
            </h1>
          </RevealText>
          <div className="absolute right-0 bottom-0 hidden lg:block"></div>
        </div>
      </div>

      {/* Full-bleed Hero Image */}
      <RevealWrapper
        className="w-full"
        style={{ height: "clamp(400px, 75vh, 850px)" }}
      >
        <div className="reveal-inner w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="/images/zoliborz_5.png"
            alt="Przestronne minimalistyczne wnętrze dzienne, surowe ściany z betonu, wysokie okna od podłogi do sufitu"
          />
        </div>
      </RevealWrapper>

      {/* Hero Footer Bar */}
      <div className="w-full max-w-screen-2xl mx-auto px-8 lg:px-16 py-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="flex items-center gap-8">
          <span className="micro-caps text-warm-slate">
            Przewiń, aby odkrywać
          </span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-warm-mist" />
            <i className="fa-solid fa-arrow-down text-warm-mist text-xs" />
          </div>
        </div>
      </div>
    </section>
  );
}
