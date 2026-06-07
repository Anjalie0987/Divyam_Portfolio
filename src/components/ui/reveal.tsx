"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, fadeDown, fadeLeft, fadeRight, scaleIn } from "@/animations/motion";

type PresetType = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleIn";

const presets = {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
};

interface RevealProps {
  children: React.ReactNode;
  preset?: PresetType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  preset = "fadeUp",
  delay = 0,
  duration = 0.8,
  className,
  once = true,
}: RevealProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const variant = presets[preset];

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div
        variants={variant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
