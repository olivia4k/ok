import { useEffect, useRef, useState, type CSSProperties } from "react";

type Phase = "idle" | "line" | "typing" | "moving" | "exit";

const WORD = "Był sobie projekt";

interface LoaderProps {
  onDone: () => void;
}

/**
 * Intro animation inspired by bakkerblanc.ch:
 * a line grows out of a dot in the centre of the screen, the wordmark
 * appears letter by letter, then the whole lockup flies up into the header.
 */
export function Loader({ onDone }: LoaderProps) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [moveStyle, setMoveStyle] = useState<CSSProperties>({});
  const [removed, setRemoved] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      onDone();
      setRemoved(true);
      return;
    }

    document.documentElement.classList.add("is-intro");

    const schedule = (fn: () => void, ms: number) => {
      timers.current.push(window.setTimeout(fn, ms));
    };

    schedule(() => setPhase("line"), 80);
    schedule(() => setPhase("typing"), 880);

    schedule(() => {
      const logo = logoRef.current;
      const target = document.querySelector<HTMLElement>("[data-header-logo]");

      if (logo && target) {
        const from = logo.getBoundingClientRect();
        const to = target.getBoundingClientRect();
        const scale = to.width / from.width;
        const dx = to.left + to.width / 2 - (from.left + from.width / 2);
        const dy = to.top + to.height / 2 - (from.top + from.height / 2);

        setMoveStyle({
          transform: `translate(${dx}px, ${dy}px) scale(${scale})`,
        });
      }

      setPhase("moving");
    }, 2150);

    schedule(() => {
      setPhase("exit");
      document.documentElement.classList.remove("is-intro");
      onDone();
    }, 3150);

    schedule(() => setRemoved(true), 3800);

    return () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
      timers.current = [];
      document.documentElement.classList.remove("is-intro");
    };
  }, [onDone]);

  if (removed) return null;

  const showLine = phase !== "idle";
  const showText = phase === "typing" || phase === "moving" || phase === "exit";
  const moving = phase === "moving" || phase === "exit";

  return (
    <div
      className={[
        "intro-loader",
        showLine ? "is-line" : "",
        showText ? "is-typing" : "",
        moving ? "is-moving" : "",
        phase === "exit" ? "is-exit" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      <div className="intro-logo" ref={logoRef} style={moveStyle}>
        <div className="intro-lockup">
          <span className="intro-line-track">
            <span className="intro-dot" />
            <span className="intro-line" />
          </span>
          <span className="intro-text">
            {Array.from(WORD).map((char, index) => (
              <span
                key={`${char}-${index}`}
                className="intro-char"
                style={{ transitionDelay: `${index * 38}ms` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
