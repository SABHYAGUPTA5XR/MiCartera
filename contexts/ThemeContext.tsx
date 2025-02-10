"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>("theme-default");

  // On mount, you could load a saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    } else {
      document.body.classList.add(theme);
    }
  }, []);

  useEffect(() => {
    // List all theme classes that might be applied
    const themeClasses = [
      "theme-default",
      "theme-cyberpunk",
      "theme-forest",
      "theme-mountain",
      "theme-ocean",
      "theme-sunset",
      "theme-desert",
    ];
  
    // Remove only the theme classes, leaving other body classes intact
    themeClasses.forEach((t) => document.body.classList.remove(t));
  
    // Add the selected theme class
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
