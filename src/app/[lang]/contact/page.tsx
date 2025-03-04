"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="text-center text-2xl mt-10">
      <h1>{t("contact")}</h1>
    </div>
  );
}
