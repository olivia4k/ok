import { RevealText, RevealWrapper } from "./Reveal";

const stats = [
  { value: "7", label: "Lat praktyki projektowej" },
  { value: "2", label: "Kraje" },
];

const specialisms = ["Architektura mieszkaniowa", "Zamówienia prywatne"];

const collaborators = ["Projektowanie oświetlenia", "Rzemiosło na zamówienie"];

export function About() {
  return (
    <section
      id="about"
      className="w-full max-w-screen-2xl mx-auto px-8 lg:px-16"
    >
      <div className="relative mb-16">
        <span className="micro-caps text-warm-slate mb-4 block">
          02 / O mnie
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left: Portrait */}
        <div className="lg:col-span-5 relative">
          <div className="relative z-10 mt-8">
            <RevealWrapper style={{ height: "clamp(480px, 80vh, 900px)" }}>
              <div className="reveal-inner w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src="/images/zoliborz_6.webp"
                  alt="Architektka wnętrz w minimalistycznej pracowni w Toruniu — naturalne światło"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </RevealWrapper>
          </div>
          <div className="mt-6 flex gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-8">
                <div>
                  <p className="font-serif text-4xl mb-1">{stat.value}</p>
                  <span className="micro-caps text-warm-slate">
                    {stat.label}
                  </span>
                </div>
                {index < stats.length - 1 && (
                  <div className="w-px h-12 bg-warm-mist" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Philosophy Text */}
        <div className="lg:col-span-7 pt-4 lg:pt-24">
          <RevealText>
            <h3
              className="font-serif mb-10"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.1,
              }}
            >
              <em>O mnie</em>
            </h3>
          </RevealText>

          <div className="w-16 h-px bg-warm-ink mb-10" />

          <div className="space-y-6">
            <RevealText>
              <p className="font-sans font-light text-warm-slate leading-relaxed text-base lg:text-lg">
                Jestem architektką i absolwentką Politechniki Poznańskiej, gdzie
                w 2018 roku obroniłam dyplom magisterski. Doświadczenie
                zdobywałam w biurach projektowych w Polsce i w Niemczech,
                pracując przy projektach budynków oraz wnętrz. Dziś tworzę
                funkcjonalne, ponadczasowe przestrzenie dopasowane do potrzeb
                ich użytkowników.
              </p>
            </RevealText>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <span className="micro-caps text-warm-slate block mb-3">
                Architektura
              </span>
              <ul className="space-y-2">
                {specialisms.map((item) => (
                  <li key={item} className="micro-caps text-warm-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="micro-caps text-warm-slate block mb-3">
                Architektura wnętrz
              </span>
              <ul className="space-y-2">
                {collaborators.map((item) => (
                  <li key={item} className="micro-caps text-warm-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
