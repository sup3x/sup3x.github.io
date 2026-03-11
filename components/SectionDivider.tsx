"use client";

import { useInView } from "@/lib/useInView";

export function SectionDivider() {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="section-divider"
        style={{
          transform: isInView ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
          transformOrigin: "center",
        }}
      />
    </div>
  );
}
