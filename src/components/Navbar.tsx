"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useParams } from "next/navigation";

const Navbar = () => {
  const { locale, t } = useLanguage();
  const params = useParams();
  const currentLang = params.lang || "en";
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-800 text-white z-50">
      <ul className="flex space-x-6">
        <li><Link href={`/${currentLang}`}>{t("welcome")}</Link></li>
        <li><Link href={`/${currentLang}/experience`}>{t("experience")}</Link></li>
        <li><Link href={`/${currentLang}/projects`}>{t("projects")}</Link></li>
        <li><Link href={`/${currentLang}/accomplishments`}>{t("accomplishments")}</Link></li>
        <li><Link href={`/${currentLang}/contact`}>{t("contact")}</Link></li>
      </ul>

      <div className="relative" ref={dropdownRef}>
        <button
          className="px-4 py-2 bg-gray-700 rounded flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {currentLang === "en" ? "🇬🇧 English" : "🇫🇷 Français"}
          <span className="ml-2">▼</span>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-50">
            <ul>
              <li>
                <Link
                  href="/en"
                  className={`block px-4 py-2 hover:bg-gray-200 ${currentLang === "en" ? "font-bold" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  🇬🇧 English
                </Link>
              </li>
              <li>
                <Link
                  href="/fr"
                  className={`block px-4 py-2 hover:bg-gray-200 ${currentLang === "fr" ? "font-bold" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  🇫🇷 Français
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
