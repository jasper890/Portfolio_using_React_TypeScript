
import FirstPageAbout from "./firstPageAbout.tsx";
import Particles from "../components/magicui/reactbit/Particles.tsx";
import AbountSecond from "./AbountSecond.tsx";
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
      <FirstPageAbout />
     
    </div>
  )
}

export default About