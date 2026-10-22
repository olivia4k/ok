import { Section, useActiveSection } from "../hooks/useActiveSection";

const sections: Section[] = [
  { id: "hero", label: "00 / WSTĘP" },
  { id: "work", label: "01 / REALIZACJE" },
  { id: "about", label: "02 / O MNIE" },
  { id: "process", label: "03 / PROCES" },
  { id: "contact", label: "04 / KONTAKT" },
];

export function Sidebar() {
  const activeLabel = useActiveSection(sections);

  return (
    <div
      id="sticky-sidebar"
      className="hidden lg:flex flex-col items-center gap-6 pl-5"
      style={{ transform: "translateY(-50%) rotate(180deg)" }}
    >
      <span className="micro-caps text-warm-slate whitespace-nowrap">
        {activeLabel}
      </span>
      <div className="w-px h-16 bg-warm-mist" />
    </div>
  );
}
