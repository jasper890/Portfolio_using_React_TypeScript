import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../components/magicui/terminal";
import { useInView } from "react-intersection-observer";

const HomePage_2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative bg-black text-black min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-16 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full blur-[160px] pointer-events-none z-0 animate-float-glow bg-purple-700 opacity-70" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full blur-[160px] pointer-events-none z-0 animate-float-glow bg-indigo-600 opacity-70" />

      {/* Terminal Content */}
      <div
        ref={ref}
        className="relative z-10 w-full max-w-5xl text-left"
      >
        {inView && (
          <Terminal>
            <TypingAnimation>
              &gt; booting jasperNgo.dev --env=production
            </TypingAnimation>

            <AnimatedSpan delay={1200} className="text-green-400 animate-pulse">
              <span>✔ Identity loaded: "Jasper Ryan Ngo - Quiet Builder"</span>
            </AnimatedSpan>

            <AnimatedSpan delay={1700} className="text-green-400 animate-fade-in">
              <span>✔ Found tech stack: React, TypeScript, Tailwind, ShadCN UI</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2200} className="text-green-400 animate-fade-in">
              <span>✔ UI Framework detected: Minimal & Clean mode</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2700} className="text-green-400 animate-fade-in">
              <span>✔ Connected to: AI, Chatbot, and Workflow Systems</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3200} className="text-green-400 animate-fade-in">
              <span>✔ Importing real projects and personal branding</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3700} className="text-green-400 animate-fade-in">
              <span>✔ Linked: GitHub, Resume, Contact</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4200} className="text-red-400 animate-fade-in">
              <span>
                ⚠️ Best viewed on desktop. Check out my GitHub:&nbsp;
                <a
                  href="https://github.com/jasper890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-400 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  @jasper890
                </a>
              </span>
            </AnimatedSpan>

            <AnimatedSpan delay={4700} className="text-blue-400 animate-fade-in">
              <span>ℹ Current status: Always learning. Always building.</span>
            </AnimatedSpan>

            <TypingAnimation delay={6200} className="text-muted-foreground">
              Success! Welcome to my digital space 🧠✨
            </TypingAnimation>

            <TypingAnimation delay={7200} className="text-muted-foreground">
              Scroll down to explore who I am and what I make.
            </TypingAnimation>
          </Terminal>
        )}
      </div>
    </section>
  );
};

export default HomePage_2;