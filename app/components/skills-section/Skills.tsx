import React, { useEffect } from "react";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function Skills() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("skills");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="skills">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I debug life one line at a time
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          For me, coding is more than solving problems— it&apos;s a way to understand the world. Every bug teaches me patience and reminds me that mistakes are simply opportunities to learn. I discovered early that fixing errors is a step toward a smoother path.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          I began my coding journey in 2017 with my first Java program in school, and over the years I’ve evolved into a passionate developer fluent in multiple programming languages and web technologies. My growth has been like composing a melody—each project and collaboration adding a new note that deepens my craft and enriches my understanding. Embracing every challenge as an opportunity to innovate, I blend technical expertise with creativity to transform ideas into impactful digital experiences.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
          Looking ahead, I remain excited about the endless possibilities that each new challenge brings.  With every line I fix and every lesson I embrace, I’m not just writing code—I’m scripting my own story of perseverance, creativity, and relentless curiosity.
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Programming Languages
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Python, JavaScript(ES7+), C, C++, R
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Web Technologies
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              HTML5, CSS, TailwindCSS, ReactJS, NextJS, MongoDB, MySQL, Git, GitHub
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              AI Technologies
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              TensorFlow, PyTorch, OpenCV, NumPy, Pandas, Scikit-Learn, DeepSeek, OPENAI API
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Deployment & Design
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Vercel, Netlify, Render, Figma, Canva, Adobe Firefly 
            </AnimatedBody>
          </div>
          
        </div>
      </div>
    </section>
  );
}
