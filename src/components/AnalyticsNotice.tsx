import { useEffect, useState } from "react";

const STORAGE_KEY = "analytics-notice-dismissed";

export function AnalyticsNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore storage errors (e.g. private mode) — the notice just reappears.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Informacja o analityce"
      className="fixed bottom-4 left-4 right-4 z-[200] mx-auto flex max-w-md items-start gap-4 border border-warm-mist bg-warm-paper p-4 sm:bottom-6"
    >
      <div className="min-w-0">
        <p className="micro-caps text-warm-slate mb-2">Analityka</p>
        <p className="font-sans text-xs font-light leading-relaxed text-warm-slate">
          Ta strona korzysta z Google Analytics, aby lepiej rozumieć, jak
          odwiedzający korzystają z portfolio.
        </p>
      </div>
      <button
        type="button"
        onClick={dismiss}
        className="micro-caps shrink-0 border border-warm-ink px-3 py-2 text-warm-ink transition-colors hover:bg-warm-ink hover:text-warm-paper"
      >
        Akceptuję
      </button>
    </div>
  );
}
