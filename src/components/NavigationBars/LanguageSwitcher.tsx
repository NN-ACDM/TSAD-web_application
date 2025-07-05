"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useMemo } from "react";

const getLanguageFromCookie = (): "th" | "en" => {
  const match = document.cookie.match(/language=(th|en)/);
  return match?.[1] === "en" ? "en" : "th";
};

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState<"th" | "en">("th");
  const pathUrl = usePathname();

  useEffect(() => {
    setLanguage(getLanguageFromCookie());
  }, []);

  const baseLanguage = useMemo(() => {
    return language === "en" ? "en" : "th";
  }, [pathUrl, language]);

  const handleLanguageChange = (lang: "th" | "en") => {
    document.cookie = `language=${lang}; path=/`;
    setLanguage(lang);
    window.location.reload();
  };

  return (
    <div>
      <label htmlFor="language-select" className="mr-2">
        {language === "th" ? "ภาษา:" : "Language:"}
      </label>
      <select
        id="language-select"
        value={baseLanguage}
        onChange={(e) => handleLanguageChange(e.target.value as "th" | "en")}
        className="border rounded px-2 py-1"
      >
        <option value="en">English</option>
        <option value="th">ไทย</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
