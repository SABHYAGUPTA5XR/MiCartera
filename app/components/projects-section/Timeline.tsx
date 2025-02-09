"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/ecellvitvellore_logo.jpg",
    jobTitle: "Tech Executive",
    company: "Entrepreneurship Cell, VIT Vellore",
    jobType: "CLub",
    duration: "July 2024 - Present",
    stuffIDid: [
      "Currently involved in E-SUMMIT '25, working on the next generation of event tech solutions to enhance the digital experience for participants.",
      "Worked as part of the tech team on the FUTUREPRENEURS 10.0 website, contributing to a robust and user-friendly platform that delivered a seamless experience for attendees and sponsors, leading to 2000+ registrations and 50 final teams.",
      "Expanded my expertise in Git version control, frontend development, and event-based web technologies under the mentorship of the Technical Head",
      "Gained hands-on experience in full-stack web development, working with frontend frameworks, APIs, routing, databases, and deployment to build scalable event platforms.",
    ],
  },
  {
    companyImg: "/vitlogowhite.png",
    jobTitle: "B.Tech CSE Student",
    company: "VIT Vellore",
    jobType: "Student",
    duration: "August 2023 - Present",
    stuffIDid: [
      "Maintaining a 9.6 CGPA, demonstrating consistency and excellence in academic coursework.",
      "Developing a strong foundation in Computer Science with a focus on AI, software development, and research.",
      "Gaining hands-on experience in full-stack development, algorithms, and machine learning.",
      "Working on real-world projects, including an AI-powered chess commentary system and MS LAMP 2, a mass spectrometry-based lipid analysis platform.",
      "Actively participating in the Entrepreneurship Cell as a Tech Executive, contributing to major event websites.",
      "Exploring various technologies such as Next.js, Flask, TensorFlow, and cloud deployment."
    ]
    ,
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title>experience & education</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
