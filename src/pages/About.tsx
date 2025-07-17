
  import FirstPageAbout from "./firstPageAbout.tsx";
  import Particles from "../components/magicui/reactbit/Particles.tsx";
  import AbountSecond from "./AbountSecond.tsx";
import ScrollFloat from "../components/magicui/reactbit/ScrollFloat.tsx";

  const About = () => {
    return (
    <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Particles */}
        <div className="absolute inset-0 -z-10 pointer-events-none" >
          <Particles
            particleColors={["#3B82F6", "#2563EB", "#1D4ED8"]}
            particleCount={400}
            particleSpread={11}
            speed={0.1}
            particleBaseSize={200}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

      
        <AbountSecond />
<ScrollFloat
  animationDuration={1}
  ease="back.inOut(2)"
  scrollStart="center bottom+=10%"
  scrollEnd="bottom bottom-=10%"
  stagger={0.03}
  containerClassName="flex items-center justify-center h-screen w-full"
  textClassName="text-center font-bold leading-none text-white text-[100px] sm:text-[100px] md:text-[150px] lg:text-[210px]"
>
 Tech Gear
</ScrollFloat>
        <FirstPageAbout />
    
      </div>
    )
  }

  export default About