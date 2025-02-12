"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function FooterThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  // Use a media query to detect small screens (e.g., max-width 768px)
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const themes = [
    { name: "Royale", value: "theme-default" },
    { name: "Cyberpunk", value: "theme-cyberpunk" },
    { name: "Forest", value: "theme-forest" },
    { name: "Mountain", value: "theme-mountain" },
    { name: "Ocean", value: "theme-ocean" },
    { name: "Sunset", value: "theme-sunset" },
    { name: "Desert", value: "theme-desert" },
  ];

  return (
    <div className="relative flex items-center">
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

      <AnimatePresence>
        {isOpen && (
          <>
            {isSmallScreen ? (
              // Modal (bottom sheet) for small screens
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-50"
              >
                <div className="bg-[#475557] w-full p-4 rounded-t-lg">
                  {themes.map((t) => (
                    <button
                      key={t.value}
                      className={`w-full px-3 py-2 rounded-md transition ${
                        theme === t.value
                          ? "bg-[#333] text-white"
                          : "hover:bg-[#444] text-white"
                      }`}
                      onClick={() => {
                        setTheme(t.value);
                        setIsOpen(false);
                      }}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              // Horizontal dropdown for larger screens (appears to the left)
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex gap-2 ml-2"
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
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
