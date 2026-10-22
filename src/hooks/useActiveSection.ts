import { useEffect, useState } from "react";

export interface Section {
  id: string;
  label: string;
}

/**
 * Tracks the currently visible section for the sticky sidebar label.
 */
export function useActiveSection(sections: Section[]) {
  const [activeLabel, setActiveLabel] = useState<string>(
    sections.length > 0 ? sections[0].label : ""
  );

  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = sections.find((s) => s.id === entry.target.id);
            if (found) {
              setActiveLabel(found.label);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return activeLabel;
}
