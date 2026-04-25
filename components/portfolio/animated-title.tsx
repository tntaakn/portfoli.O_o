"use client";

import { useEffect, useState, useCallback } from "react";

const letters = ["", "P", "O", "R", "T", "F", "O", "L", "I", "O"];

export function AnimatedPortfolioTitle() {
  const [visibleLetters, setVisibleLetters] = useState<number[]>([]);

  const startAnimation = useCallback(() => {
    setVisibleLetters([]);
    let currentIndex = 0;

    const showInterval = setInterval(() => {
      if (currentIndex < letters.length) {
        setVisibleLetters((prev) => [...prev, currentIndex]);
        currentIndex++;
      } else {
        clearInterval(showInterval);
        // Wait then reset for loop
        setTimeout(() => {
          startAnimation();
        }, 2500);
      }
    }, 180);

    return () => clearInterval(showInterval);
  }, []);

  useEffect(() => {
    const cleanup = startAnimation();
    return cleanup;
  }, [startAnimation]);

  return (
    <div className="flex flex-wrap justify-center gap-1 md:gap-3 lg:gap-4">
      {letters.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className={`
            font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold
            transition-all duration-700 ease-out
            ${visibleLetters.includes(index)
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-50"
            }
          `}
          style={{
            color: "#A9C9E2",
            textShadow: visibleLetters.includes(index)
              ? `
                0 0 40px rgba(169, 201, 226, 0.6),
                0 0 80px rgba(169, 201, 226, 0.4),
                0 0 120px rgba(90, 159, 212, 0.3),
                2px 2px 0px rgba(25, 74, 122, 0.8)
              `
              : "none",
            transitionDelay: `${index * 60}ms`,
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
