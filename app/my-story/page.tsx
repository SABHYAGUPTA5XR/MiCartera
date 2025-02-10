// app/my-story/page.tsx
"use client";
import React, { useEffect } from "react";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedTitle from "@/app/components/ui/AnimatedTitle";

export default function MyStory() {

    const { setSectionInView } = useView();

    const { ref, inView } = useInView({
        threshold: 0.2,
        rootMargin: "-100px 0px",
    });

    useEffect(() => {
        if (inView) setSectionInView("my-story");
    }, [inView, setSectionInView]);
    return (
        <main ref={ref} className="min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
            <div className="text-lg text-gray-400">
                <AnimatedTitle
                    wordSpace={"mr-2 md:mr-[12px]"}
                    charSpace={"mr-[0.001em]"}
                    className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold"
                >
                    Hold tight — great things are on their way!
                </AnimatedTitle>
            </div>
        </main>
    );
}
