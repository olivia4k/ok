import { useEffect, useRef } from "react";

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function RevealWrapper({ children, className = "", style }: RevealWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const inner = wrapper.querySelector(".reveal-inner");
    if (!inner) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("revealed");
            }, 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(inner);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={wrapperRef} className={`reveal-wrapper ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}

export function RevealText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("revealed");
            }, 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`text-reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
