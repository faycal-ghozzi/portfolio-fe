"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "@/components/magicui/particles";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function WelcomePage() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  const { t } = useLanguage();

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      <span className="pointer-events-none z-10 text-center text-6xl font-semibold mt-4">
        {t("introduction")}
      </span>

      <span className="text-4xl font-medium text-gray-500 mt-4">
        {t("whatDo")}
      </span>

      <TypingAnimation
        words={t("typeWords")}
        className="text-center text-6xl font-semibold text-gray-500 mt-4"
        typingSpeed={100}
        deletingSpeed={50}
        delayBetween={2000}
        finalWordDelay={5000}
      />

      <Particles className="absolute inset-0 z-0" quantity={300} ease={50} color={color} refresh />
    </div>
  );
}
