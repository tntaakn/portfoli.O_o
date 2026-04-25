"use client";

import { useEffect, useRef } from "react";

interface Firefly {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  glowIntensity: number;
  pulseSpeed: number;
  pulseOffset: number;
}

export function Fireflies() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const firefliesRef = useRef<Firefly[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createFireflies = (count: number) => {
      const fireflies: Firefly[] = [];
      for (let i = 0; i < count; i++) {
        fireflies.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.3,
          glowIntensity: Math.random() * 20 + 10,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
      return fireflies;
    };

    const drawFirefly = (firefly: Firefly, time: number) => {
      const pulse = Math.sin(time * firefly.pulseSpeed + firefly.pulseOffset);
      const currentOpacity = firefly.opacity * (0.5 + pulse * 0.5);
      const currentGlow = firefly.glowIntensity * (0.7 + pulse * 0.3);

      // Outer glow
      const gradient = ctx.createRadialGradient(
        firefly.x,
        firefly.y,
        0,
        firefly.x,
        firefly.y,
        currentGlow
      );
      gradient.addColorStop(0, `rgba(255, 215, 0, ${currentOpacity})`);
      gradient.addColorStop(0.3, `rgba(255, 200, 100, ${currentOpacity * 0.6})`);
      gradient.addColorStop(0.6, `rgba(255, 180, 50, ${currentOpacity * 0.3})`);
      gradient.addColorStop(1, "rgba(255, 180, 50, 0)");

      ctx.beginPath();
      ctx.arc(firefly.x, firefly.y, currentGlow, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(firefly.x, firefly.y, firefly.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 220, ${currentOpacity + 0.3})`;
      ctx.fill();
    };

    const updateFirefly = (firefly: Firefly) => {
      firefly.x += firefly.vx;
      firefly.y += firefly.vy;

      // Random direction changes
      if (Math.random() < 0.02) {
        firefly.vx += (Math.random() - 0.5) * 0.2;
        firefly.vy += (Math.random() - 0.5) * 0.2;
      }

      // Limit speed
      const maxSpeed = 0.8;
      const speed = Math.sqrt(firefly.vx ** 2 + firefly.vy ** 2);
      if (speed > maxSpeed) {
        firefly.vx = (firefly.vx / speed) * maxSpeed;
        firefly.vy = (firefly.vy / speed) * maxSpeed;
      }

      // Wrap around edges
      if (firefly.x < -20) firefly.x = canvas.width + 20;
      if (firefly.x > canvas.width + 20) firefly.x = -20;
      if (firefly.y < -20) firefly.y = canvas.height + 20;
      if (firefly.y > canvas.height + 20) firefly.y = -20;
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      firefliesRef.current.forEach((firefly) => {
        updateFirefly(firefly);
        drawFirefly(firefly, time * 0.01);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    firefliesRef.current = createFireflies(50);
    animate(0);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
