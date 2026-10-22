import { RevealText, RevealWrapper } from "./Reveal";

const steps = [
  {
    roman: "01.",
    title: "Rozmowa i konsultacja",
    text: "Zaczynamy od poznania Twoich potrzeb, stylu życia i oczekiwań. Rozmawiamy o funkcji wnętrza, budżecie oraz możliwościach przestrzeni. Już na tym etapie mogę zaproponować pierwsze rozwiązania lub pomóc w podjęciu konkretnych decyzji.",
  },
  {
    roman: "02.",
    title: "Koncepcja",
    text: "Przygotowuję układ funkcjonalny oraz kierunek aranżacji. Dobieram materiały, kolorystykę i elementy wyposażenia tak, aby stworzyć spójną, wygodną i ponadczasową przestrzeń dopasowaną do Ciebie.",
  },
  {
    roman: "03.",
    title: "Projekt",
    text: "Dopracowuję wszystkie szczegóły potrzebne do realizacji. Powstaje komplet rysunków wykonawczych, zestawienie materiałów i wyposażenia oraz dokumentacja, która ułatwia sprawne przeprowadzenie prac.",
  },
  {
    roman: "04.",
    title: "Realizacja i nadzór",
    text: "Jeśli zdecydujesz się na pełną współpracę, wspieram Cię również podczas realizacji projektu. Pozostaję w kontakcie z wykonawcami, pomagam rozwiązywać pojawiające się kwestie i dbam o to, aby efekt końcowy był zgodny z założeniami projektu.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="w-full max-w-screen-2xl mx-auto px-8 lg:px-16"
    >
      <span className="micro-caps text-warm-slate mb-4 block">03 / Proces</span>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
        <RevealText>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              lineHeight: 1.05,
            }}
          >
            Proces
          </h2>
        </RevealText>
      </div>

      <div className="max-w-4xl mb-20 space-y-6">
        <RevealText>
          <p className="font-sans font-light text-warm-slate leading-relaxed text-base lg:text-lg">
            Każdy projekt jest inny, dlatego zakres współpracy zawsze dopasowuję
            do Twoich potrzeb. Mogę pomóc na etapie pojedynczej konsultacji,
            przygotować koncepcję wnętrza lub poprowadzić cały proces – od
            pierwszego pomysłu aż po realizację.
          </p>
        </RevealText>
        <RevealText>
          <p className="font-sans font-light text-warm-slate leading-relaxed text-base lg:text-lg">
            Poniżej znajdziesz przykładowy przebieg współpracy. Każdy projekt
            wyceniam indywidualnie, w zależności od jego zakresu i stopnia
            zaangażowania.
          </p>
        </RevealText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {steps.map((step) => (
          <div
            key={step.title}
            className="border-l border-warm-mist pl-8 py-6 lg:py-0"
          >
            <span className="font-serif text-6xl text-warm-mist block mb-6">
              {step.roman}
            </span>
            <span className="micro-caps text-warm-slate block mb-4">
              {step.title}
            </span>
            <p className="font-sans font-light text-warm-slate text-sm leading-relaxed">
              {step.text}
            </p>
          </div>
        ))}
      </div>

      {/* Process Image */}
      <div className="mt-16">
        <RevealWrapper style={{ height: "clamp(300px, 50vh, 600px)" }}>
          <div className="reveal-inner w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="/images/probki.png"
              alt="Próbki materiałów i wykończeń wnętrz"
            />
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
