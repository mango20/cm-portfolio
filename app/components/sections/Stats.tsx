"use client";

import { stats } from "@/app/data/stats";
import { Stat } from "@/app/types/stats";
import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setStartCount(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8"
      aria-label="Professional highlights"
    >
      {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} startCount={startCount} />
      ))}
    </div>
  );
}

interface StatItemProps extends Stat {
  startCount: boolean;
}

function StatItem({ value, suffix, label, startCount }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;

    const duration = 1200;
    let startTime: number | null = null;
    let frameId = 0;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(eased * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [startCount, value]);

  return (
    <div className="flex flex-col gap-2 border-l-2 border-accent pl-4">
      <p
        className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        aria-label={`${value}${suffix} ${label}`}
      >
        <span aria-hidden="true">
          {count}
          {count === value && startCount ? suffix : ""}
        </span>
      </p>

      <p className="text-sm leading-relaxed text-muted sm:text-base">{label}</p>
    </div>
  );
}
