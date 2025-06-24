"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  let mouseX = 0,
    mouseY = 0;
  let cursorX = 0,
    cursorY = 0;

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX - 16;
      mouseY = e.clientY - 16;
    };
    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", moveCursor);
    requestRef.current = requestAnimationFrame(animate);

    // Grow and color on hover
    const handlePointerOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a,button,[role=button],input,textarea,label,select")
      ) {
        cursorRef.current?.classList.add("cursor-hover");
      }
    };
    const handlePointerOut = () => {
      cursorRef.current?.classList.remove("cursor-hover");
    };
    window.addEventListener("pointerover", handlePointerOver);
    window.addEventListener("pointerout", handlePointerOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor trailing" />;
}
