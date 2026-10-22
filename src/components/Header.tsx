function scrollToSection(id: string) {
  const target = document.querySelector(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

interface HeaderProps {
  currentLabel?: string;
}

export function Header({ currentLabel }: HeaderProps) {
  const navItems = [
    { label: "Wybrane realizacje", href: "#work" },
    { label: "O mnie", href: "#about" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 bg-warm-paper/95 backdrop-blur-sm scroll-mt-24"
    >
      <div className="w-full max-w-screen-2xl mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between py-6">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center gap-3"
          >
            <div className="w-6 h-px bg-warm-ink" />
            <span className="font-serif italic text-sm tracking-wide text-warm-ink">
              Był sobie projekt
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="nav-link micro-caps text-warm-ink hover:text-warm-slate transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="micro-caps text-warm-slate hidden lg:block">
            {currentLabel ?? "Toruń / Cała Polska"}
          </div>
        </div>
      </div>
      <hr className="hr-rule" />
    </header>
  );
}
