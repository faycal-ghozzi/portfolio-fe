"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { AuroraText } from "@/components/decoration/aurora-text";

interface TypingAnimationProps extends MotionProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  finalWordDelay?: number;
  as?: React.ElementType;
}

export function TypingAnimation({
  words,
  className,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 2000,
  finalWordDelay = 5000,
  as: Component = "div",
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const isLastWord = wordIndex === words.length - 1;

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentDelay = isLastWord ? finalWordDelay : delayBetween;

    if (!isDeleting) {
      if (displayedText.length < words[wordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(words[wordIndex].substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), currentDelay);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(words[wordIndex].substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetween, finalWordDelay]);

  return (
      <MotionComponent
        ref={elementRef}
        className={cn(
          "relative text-6xl font-semibold tracking-[-0.02em] leading-[1.4] pb-6 min-h-[1.2em]",
          className
        )}
        {...props}
      >
        {isLastWord ? (
          <AuroraText className="aurora-text">{displayedText}</AuroraText>
        ) : (
          <>{displayedText}</>
      )}
      <span className="animate-blink" style={{color: "transparent"}}>|</span>
    </MotionComponent>
  );
}
