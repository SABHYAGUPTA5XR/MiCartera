"use client";
import { useView } from "@/contexts/ViewContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { AnimatePresence, motion } from "framer-motion";


export default function Header() {
  const { sectionInView } = useView();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed max-w-[90%] xl:max-w-[1223px] w-full z-10 select-none">
        <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] mt-4 sm:mt-8 std-backdrop-blur">
          <Link href="/#home" >
          
            <Image
              src="/S-logo-final.png"
              width={40}
              height={40}
              alt="logo"
              className="select-none"
            />
          
          </Link>
          <Icon
            onClick={() =>
              setMenuOpen(!menuOpen)}
            className="cursor-pointer flex sm:hidden text-2xl"
            icon={`${menuOpen ? "gg:close" : "lucide:menu"}`}
          />

          <ul className="hidden sm:flex gap-8 lg:gap-12 text-white/25">
            <Link
              href="/#home"
              className={`${sectionInView === "home" && "text-white"} `}
            >
              Home
            </Link>
            <Link
              href="/#projects"
              className={`${sectionInView === "projects" && "text-white"} `}
            >
              Projects
            </Link>
            <Link
              href="/#skills"
              className={`${sectionInView === "skills" && "text-white"} `}
            >
              Skills
            </Link>
            <Link
              href="/#contact"
              className={`${sectionInView === "contact" && "text-white"} `}
            >
              Contact
            </Link>
            <Link
              href="/my-story"
              className={`${sectionInView === "my-story" && "text-white"} `}
            >
              My Story
            </Link>
          </ul>
          <div className="gap-5 text-xl hidden sm:flex">
            <Link target="_blank" href="https://www.linkedin.com/in/sabhyagupta4xr">
              <Icon icon="hugeicons:linkedin-01" />
            </Link>
            <Link target="_blank" href="https://github.com/SABHYAGUPTA5XR">
              <Icon icon="hugeicons:github" />
            </Link>
            <Link target="_blank" href="https://instagram.com/sabhyagupta4xr">
              <Icon icon="hugeicons:instagram" />
            </Link>
            <Link target="_blank" href="https://x.com/sabhyagupta4xr">
              <Icon icon="akar-icons:x-fill" />
            </Link>
            {/* THEME SWITCHER BUTTON */}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && <MobileMenu onMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </>
  );
}
