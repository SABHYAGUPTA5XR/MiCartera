"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function FooterThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { name: "Default", value: "theme-default" },
    { name: "Cyberpunk", value: "theme-cyberpunk" },
    { name: "Forest", value: "theme-forest" },
    { name: "Mountain", value: "theme-mountain" },
    { name: "Ocean", value: "theme-ocean" },
    { name: "Sunset", value: "theme-sunset" },
    { name: "Desert", value: "theme-desert" },
  ];

  return (
    <div className="relative flex items-center">
      {/* Animated dropdown that slides out to the left */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex gap-2 mr-2"
          >
            {themes.map((t) => (
              <button
                key={t.value}
                className={`px-3 py-2 rounded-md transition ${
                  theme === t.value
                    ? "bg-white text-black"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
                onClick={() => {
                  setTheme(t.value);
                  setIsOpen(false);
                }}
              >
                {t.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme label and icon button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-white p-2 rounded-full transition hover:scale-110"
      >
        <Image
          src="/themeIcon.svg"
          alt="Theme"
          width={28}
          height={28}
          className="invert"
        />
      </button>
    </div>
  );
}
