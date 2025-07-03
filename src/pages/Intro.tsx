import TrueFocus from "../components/magicui/reactbit/TrueFocus";
import BlurText from "../components/magicui/reactbit/BlurText";
import { useState, useEffect } from "react";

const Intro = () => {
     const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // Tailwind's 'sm' breakpoint
        };

        handleResize(); // Run on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <section className="h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full blur-[160px] bg-cyan-500 opacity-70 z-0 animate-float-glow" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full blur-[160px] bg-cyan-500 opacity-70 z-0 animate-float-glow" />
            <div className="flex flex-col items-center justify-center min-h-screen">
                <BlurText
                    text=" Building quiet, purposeful digital experiences."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-5xl mb-8 font-black tracking-tight text-[1.0rem] sm:text-[1.4rem] md:text-[2.5rem] lg:text-[3.8rem]"
                />
                <TrueFocus
                    sentence="Developer Problem-Solver Collaborator"
                    manualMode={isMobile ? false : true}
                    blurAmount={8}
                    borderColor="cyan"
                    animationDuration={1}
                    pauseBetweenAnimations={1}
                />
            </div>
        </section>
    );
};

export default Intro;
