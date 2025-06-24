'use client';
import { usePathname } from "next/navigation";
import { useState, useEffect, useMemo } from "react";

const getThemeFromCookie = (): "dark" | "light" => {
  const match = document.cookie.match(/theme=(dark|light)/);
  return match?.[1] === "dark" ? "dark" : "light";
};

const NavBarToggler = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathUrl = usePathname();

  useEffect(() => {
    setTheme(getThemeFromCookie());
  }, []);

  const baseColor = useMemo(() => {
      return theme === "dark" ? "bg-white" : "bg-black";
  }, [pathUrl, sticky, theme]);

  const barClass = "relative my-1.5 block h-0.5 w-[30px] transition-all duration-300";

  return (
    <button
      onClick={() => setNavbarOpen(!navbarOpen)}
      id="navbarToggler"
      aria-label="Mobile Menu"
      className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
    >
      <span
        className={`${barClass} ${navbarOpen ? "top-[7px] rotate-45" : ""} ${baseColor}`}
      />
      <span
        className={`${barClass} ${navbarOpen ? "opacity-0" : ""} ${baseColor}`}
      />
      <span
        className={`${barClass} ${navbarOpen ? "top-[-8px] -rotate-45" : ""} ${baseColor}`}
      />
    </button>
  );
};

export default NavBarToggler;
