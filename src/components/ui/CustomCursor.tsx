"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.body;
    body.classList.add("cursor-hidden");

    let targetX = 0;
    let targetY = 0;
    let ringX = 0;
    let ringY = 0;
    let frameId = 0;

    const handleMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const render = () => {
      ringX += (targetX - ringX) * 0.15;
      ringY += (targetY - ringY) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX - 4}px, ${targetY - 4}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 21}px, ${ringY - 21}px, 0)`;
      }

      frameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMove);
    frameId = requestAnimationFrame(render);

    return () => {
      body.classList.remove("cursor-hidden");
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
