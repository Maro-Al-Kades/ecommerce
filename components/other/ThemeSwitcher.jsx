"use client";

import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Switch
        defaultSelected={theme === "dark"}
        size="lg"
        color="primary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <FaMoon className={className} />
          ) : (
            <FaSun className={className} />
          )
        }
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </>
  );
};
