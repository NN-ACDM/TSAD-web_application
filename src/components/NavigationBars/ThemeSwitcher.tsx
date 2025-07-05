"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useMemo } from "react";

const getThemeFromCookie = (): "dark" | "light" => {
  const match = document.cookie.match(/theme=(dark|light)/);
  return match?.[1] === "dark" ? "dark" : "light";
};

const ThemeToggler = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const pathUrl = usePathname();

  useEffect(() => {
    setTheme(getThemeFromCookie());
  }, []);

  const baseColor = useMemo(() => {
    return theme === "dark" ? "bg-white" : "bg-black";
  }, [pathUrl, theme]);

  const barClass =
    "relative my-1.5 block h-0.5 w-[30px] transition-all duration-300";

  return (
    <button
      onClick={() => setNavbarOpen(!navbarOpen)}
      id="navbarToggler"
      aria-label="Mobile Menu"
      className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
    >
      <span>
        <svg
          viewBox="0 0 16 16"
          className="hidden h-[22px] w-[22px] fill-current"
        >
          <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
        </svg>
      </span>
    </button>
  );
};

export default ThemeToggler;
