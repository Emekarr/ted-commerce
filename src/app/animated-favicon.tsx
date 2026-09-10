"use client";
import { useEffect } from "react";


export default function AnimatedFavicon() {
  useEffect(() => {
    const PERIOD = 6500;
    const WINK_MS = 5000;
    const SIZE = 32;

    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      document.head.appendChild(link);
    }

    const canvas = document.createElement("canvas");
    canvas.width = SIZE;
    canvas.height = SIZE;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const raf = 0;
    let interval: ReturnType<typeof setInterval> | null = null;

    const draw = () => {
      const elapsed = Date.now() % PERIOD;
      const isWink = elapsed < WINK_MS;

      ctx.clearRect(0, 0, SIZE, SIZE);

      ctx.fillStyle = "#2EE59D";
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#053E37";
      ctx.beginPath();
      ctx.arc(11.2, 12.2, 2.3, 0, Math.PI * 2);
      ctx.fill();

      if (isWink) {
        ctx.strokeStyle = "#053E37";
        ctx.lineWidth = 1.8;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(18.1, 13.4);
        ctx.quadraticCurveTo(20.3, 8.6, 22.5, 13.4);
        ctx.stroke();
      } else {
        ctx.fillStyle = "#053E37";
        ctx.beginPath();
        ctx.arc(20.3, 12.2, 2.3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.strokeStyle = "#053E37";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(9.5, 20);
      ctx.quadraticCurveTo(16, 25.5, 22.5, 20);
      ctx.stroke();

      try {
        const url = canvas.toDataURL("image/png");
        link!.href = url;
        link!.type = "image/png";
      } catch {
      }
    };

    draw();
    interval = setInterval(draw, 100);

    return () => {
      if (interval) clearInterval(interval);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
