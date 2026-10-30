import { RevealText, RevealWrapper } from "./Reveal";

const details = [
  { label: "Lokalizacja", value: "Sopot, Polska" },
  { label: "Rok", value: "2025" },
  { label: "Powierzchnia", value: "380 m²" },
  { label: "Materiały", value: "Wapień · Dąb · Tynk" },
  { label: "Typologia", value: "Rezydencja prywatna" },
];

export function Feature() {
  return (
    <section id="feature" className="w-full max-w-screen-2xl mx-auto px-8 lg:px-16">
      <span className="micro-caps text-warm-slate mb-4 block">04 / W fokusie</span>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16">
        <div className="lg:col-span-8">
          <RevealText>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                lineHeight: 1.05,
              }}
            >
              Penthouse Sopot
              <br />
              <em>— Studium powściągliwości</em>
            </h2>
          </RevealText>
        </div>
        <div className="lg:col-span-4">
          <div className="space-y-4">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="flex justify-between items-center py-3 border-b border-warm-mist"
              >
                <span className="micro-caps text-warm-slate">{detail.label}</span>
                <span className="micro-caps text-warm-ink">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Images */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        <div className="lg:col-span-8">
          <RevealWrapper style={{ height: "clamp(320px, 65vh, 700px)" }}>
            <div className="reveal-inner w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="/images/hero.webp"
                alt="Luksusowy salon w penthouse'u z panoramicznym widokiem na morze i podłogą z wapienia"
              />
            </div>
          </RevealWrapper>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6">
          <RevealWrapper className="flex-1" style={{ height: "clamp(200px, 30vh, 340px)" }}>
            <div className="reveal-inner w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="/images/hero.webp"
                alt="Detal materiałowy — płyta z trawertynu i element z mosiądzu"
              />
            </div>
          </RevealWrapper>
          <RevealWrapper className="flex-1" style={{ height: "clamp(200px, 30vh, 340px)" }}>
            <div className="reveal-inner w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="/images/hero.webp"
                alt="Minimalistyczna sypialnia główna z widokiem na ocean, lniana pościel"
              />
            </div>
          </RevealWrapper>
        </div>
      </div>

      <div className="mt-12">
        <p className="font-sans font-light text-warm-slate leading-relaxed max-w-3xl text-base lg:text-lg">
          Brief był radykalny w swojej prostocie: usunąć wszystko, aż to, co
          pozostanie, będzie nieredukowalne. Efektem jest 380-metrowy apartament
          na wybrzeżu Bałtyku, który oddycha w rytmie pływów — kamienne podłogi,
          które rano chłodzą, dębowe panele, które wieczorem się ocieplają, i
          widok, który sprawia, że każdy gest we wnętrzu staje się drugorzędny.
        </p>
      </div>
    </section>
  );
}
