"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="text-center text-2xl mt-10">
      <h1>{t("projects")}</h1>
    </div>
  );
}
