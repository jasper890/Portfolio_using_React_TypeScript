
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../components/magicui/terminal";

const HomePage_2 = () => {
  return (
   <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[180px] pointer-events-none z-0 animate-float-glow" />
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[180px] pointer-events-none z-0 animate-float-glow" />
      {/* Terminal Content */}
 <div className="relative z-10 w-full h-full flex justify-start px-4 py-16">
  <div className="text-xl text-black w-full md:w-4/5 h-full text-left pl-25 ml-2.5">
    <Terminal  >
      <TypingAnimation>&gt; booting jasperNgo.dev --env=production</TypingAnimation>

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
  </div>
</div>

    </section>

  )
}

export default HomePage_2