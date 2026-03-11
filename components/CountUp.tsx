"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/lib/useInView";

interface CountUpProps {
  end: string;
  duration?: number;
}

export function CountUp({ end, duration = 2000 }: CountUpProps) {
  const { ref, isInView } = useInView();
  const [display, setDisplay] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Extract numeric part
    const numMatch = end.match(/(\d+)/);
    if (!numMatch) {
      setDisplay(end);
      return;
    }

    const target = parseInt(numMatch[1], 10);
    const prefix = end.slice(0, end.indexOf(numMatch[1]));
    const suffix = end.slice(end.indexOf(numMatch[1]) + numMatch[1].length);

    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(`${prefix}${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return <span ref={ref}>{display}</span>;
}
