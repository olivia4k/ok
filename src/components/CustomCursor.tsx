import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only enable custom cursor on pointer/hover-capable devices
    const matchHover = window.matchMedia("(hover: hover)").matches;
    if (!matchHover) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".project-card")) {
        cursor.classList.add("expanded");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".project-card")) {
        cursor.classList.remove("expanded");
      }
    };

    const animate = () => {
      cursorPos.current.x += (mouse.current.x - cursorPos.current.x) * 0.12;
      cursorPos.current.y += (mouse.current.y - cursorPos.current.y) * 0.12;
      cursor.style.left = `${cursorPos.current.x}px`;
      cursor.style.top = `${cursorPos.current.y}px`;
      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div id="custom-cursor" ref={cursorRef} />
      <div id="cursor-dot" ref={dotRef} />
    </>
  );
}
