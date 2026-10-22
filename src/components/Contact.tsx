import { RevealText } from "./Reveal";

const socials = ["Facebook"];

function scrollToSection(id: string) {
  const target = document.querySelector(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Contact() {
  return (
    <section id="contact" className="w-full max-w-screen-2xl mx-auto px-8 lg:px-16">
      <span className="micro-caps text-warm-slate mb-4 block">04 / Kontakt</span>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-7">
          <RevealText>
            <h2
              className="font-serif mb-8"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                lineHeight: 0.95,
              }}
            >
              Rozpocznijmy
              <br />
              <em>rozmowę.</em>
            </h2>
          </RevealText>

          <p className="font-sans font-light text-warm-slate leading-relaxed text-base lg:text-lg max-w-xl mb-12">
            Zapraszam do kontaktu.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:olivia.klepacka@gmail.com"
              className="group flex items-center gap-4 nav-link w-fit"
            >
              <i className="fa-regular fa-envelope text-warm-slate group-hover:text-warm-ink transition-colors" />
              <span className="font-sans text-warm-ink font-light text-base lg:text-lg">
                olivia.klepacka@gmail.com
              </span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 pt-4 lg:pt-16">
          <div className="space-y-8">
            <div className="flex items-center gap-6 pt-4">
              {socials.map((social) => (
                <a
                  key={social}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contact");
                  }}
                  className="micro-caps text-warm-slate hover:text-warm-ink transition-colors nav-link"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
