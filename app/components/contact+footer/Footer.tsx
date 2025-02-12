"use client";

import { useView } from "@/contexts/ViewContext";
import React from "react";
import ThemeSwitcher from "../ThemeSwitcher"; // Import our new theme switcher component

const curYear = new Date().getFullYear();

export default function Footer() {
  const { setSectionInView } = useView();

  return (
    <section
      id="footer"
      className="my-6 sm:my-8 text-sm sm:text-base lg:text-lg flex flex-col md:flex-row items-center justify-between px-4"
    >
      <div>
        <ThemeSwitcher />
      </div>
      <p className="mb-2 md:mb-0 text-center">
        <span className="text-xl sm:text-2xl">&copy;</span> {curYear} . SABHYA GUPTA . ALL RIGHTS RESERVED
      </p>
    </section>
  );
}
