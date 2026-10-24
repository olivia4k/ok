function scrollToSection(id: string) {
  const target = document.querySelector(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Footer() {
  return (
    <footer id="footer" className="w-full border-t border-warm-ink">
      <div className="w-full max-w-screen-2xl mx-auto px-8 lg:px-16 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center gap-3"
          >
            <div className="w-6 h-px bg-warm-ink" />
            <span className="font-serif italic text-sm tracking-wide">
              mgr inż. arch. Olivia Klepacka
            </span>
          </a>

          <div className="flex flex-wrap items-center gap-6">
            <span className="micro-caps text-warm-slate">
              © 2025 Portfolio architekta wnętrz
            </span>
            <div className="w-px h-3 bg-warm-mist hidden md:block" />
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="micro-caps text-warm-slate hover:text-warm-ink transition-colors"
            >
              Prywatność
            </a>
            <div className="w-px h-3 bg-warm-mist hidden md:block" />
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="micro-caps text-warm-slate hover:text-warm-ink transition-colors"
            >
              Impressum
            </a>
            <div className="w-px h-3 bg-warm-mist hidden md:block" />
            <a
              href="https://www.facebook.com/profile.php?id=61595879215127&locale=pl_PL"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 micro-caps text-warm-slate hover:text-warm-ink transition-colors"
            >
              <i className="fa-brands fa-facebook-f text-[0.6rem]" />
              Facebook
              <i className="fa-solid fa-arrow-up-right text-[0.5rem] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <span className="micro-caps text-warm-slate hidden lg:block">
            Toruń · 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
