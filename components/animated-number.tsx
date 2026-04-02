"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  end: number;
  durationMs?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export function AnimatedNumber({
  end,
  durationMs = 2000,
  suffix = "",
  prefix = "",
  className
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / durationMs, 1);
      const eased = 1 - (1 - p) ** 3;
      setVal(Math.round(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, end, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}
