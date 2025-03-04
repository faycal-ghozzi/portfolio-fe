"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import React from "react";

interface AuroraTextProps extends MotionProps {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export function AuroraText({
  className,
  children,
  as: Component = "span",
  ...props
}: AuroraTextProps) {
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      className={cn(
        "relative inline-flex bg-clip-text text-transparent leading-[1.2] pb-[0.2em] min-h-[1.2em]",
        className
      )}
      {...props}
      style={{
        backgroundImage:
          "linear-gradient(-45deg, #ff3cac, #784ba0, #2b86c5, #42e695, #ffcc00)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        lineHeight: "1.2",
        paddingBottom: "0.2em",
        minHeight: "1.2em",
      }}
    >
      {children}
    </MotionComponent>
  );
}
