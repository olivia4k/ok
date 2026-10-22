import { useEffect, useState } from "react";

export interface Section {
  id: string;
  label: string;
}

/**
 * Tracks the currently visible section for the sticky sidebar label.
 *
 * Uses the section crossing a reference line in the upper part of the
 * viewport instead of an IntersectionObserver threshold. Sections can be
 * taller than the viewport (e.g. the works gallery), in which case an
 * intersection ratio threshold is never reached and the label gets stuck.
 */
export function useActiveSection(sections: Section[]) {
  const [activeLabel, setActiveLabel] = useState<string>(
    sections.length > 0 ? sections[0].label : ""
  );

  useEffect(() => {
    if (sections.length === 0) return;

    const update = () => {
      const referenceLine = window.innerHeight * 0.4;
      let current = sections[0];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        const { top } = el.getBoundingClientRect();
        if (top <= referenceLine) {
          current = section;
        }
      }

      // At the very bottom the last section may never reach the reference
      // line, so make sure the final label is shown.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        current = sections[sections.length - 1];
      }

      setActiveLabel(current.label);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sections]);

  return activeLabel;
}
