import { useEffect, useRef } from "react";

/**
 * IntersectionObserver-based reveal hook.
 * Adds the `revealed` class to target elements once they enter the viewport.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  selector: string,
  options?: IntersectionObserverInit
) {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const container = containerRef.current ?? document;
    const elements = container.querySelectorAll(selector);
    if (elements.length === 0) return;

    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: "0px 0px -60px 0px",
    };

    const mergedOptions = { ...defaultOptions, ...options };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          setTimeout(() => {
            target.classList.add("revealed");
          }, 100);
        }
      });
    }, mergedOptions);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [selector, options]);

  return containerRef;
}
