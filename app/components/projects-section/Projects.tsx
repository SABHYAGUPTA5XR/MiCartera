import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Projects() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "MS LAMP 2",
      about:
        "MS LAMP 2 is an advanced mass spectrometry-based lipid analysis platform, enhancing the capabilities of its predecessor by improving database search efficiency and lipid identification accuracy. The platform is being expanded to include a broader range of lipids and other molecular classes, making it a more comprehensive tool for researchers. Designed for both online and offline use, it ensures accessibility and flexibility in lipidomics research.",
      stack: ["R","Python", "MySQL", "React", "Docker"],
      img: "/mslamp2.png",
    },
    {
      title: "Weather App 2.0",
      gitLink: "https://github.com/SABHYAGUPTA5XR/WeatherApp-Flask",
      liveLink: "https://the-sci-fi-weather-app.onrender.com/",
      about:
        "A futuristic weather application with a stunning sci-fi background, twinkling stars, and dynamic shooting stars animations. Built using Flask, HTML, CSS, and JavaScript.",
      stack: ["Flask", "Python", "OpenWeather API", "HTML5/CSS", "Render"],
      img: "/weatherappFlask2.png",
    },
    {
      title: "Stone Paper Scissors",
      gitLink: "https://github.com/SABHYAGUPTA5XR/Stone-Paper-Scissors-NextJS",
      liveLink: "https://stone-paper-scissors-next-js.vercel.app/",
      about:
      "This is a simple Stone Paper Scissors game built using Next.js (React) and styled with Tailwind CSS. The game allows players to compete against the computer, which makes its choices using Math.random(). It also includes sound effects and device vibrations for a more immersive experience.",
      stack: ["Next.js","JavaScript", "Tailwind CSS", "React Hooks","Vibration API", "Vercel"],
      img: "/sps.png",
    },
    {
      title: "Tic Tac Toe",
      gitLink: "https://github.com/SABHYAGUPTA5XR/Tic-Tac-Toe-NextJS",
      liveLink: "https://tic-tac-toe-next-js-three.vercel.app/",
      about:
      "A simple and fun Tic Tac Toe game built using Next.js, React, and Tailwind CSS. Play against a friend and enjoy the classic game with a modern web framework! It got sound and vibrations too!🔊",
      stack: ["Next.js", "Tailwind CSS", "React Hooks","Vibration API", "Vercel"],
      img: "/ttt.png",
    },
    {
      title: "Weather App",
      gitLink: "https://github.com/SABHYAGUPTA5XR/WeatherApp-NextJS",
      liveLink: "https://weather-app-next-js-tan.vercel.app/",
      about:
        "A modern weather app built with Next.js, providing real-time weather updates. Users can search for locations, view detailed forecasts, and experience a sleek, responsive UI.",
      stack: ["Next.js", "Tailwind CSS", "OpenWeather API", "Vercel"],
      img: "/wNext.png",
    },
  ];
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("projects");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="projects"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
