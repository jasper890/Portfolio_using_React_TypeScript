
import personalProfile from "../assets/portfoliopic.png";
import { BoxReveal } from "../components/magicui/box-reveal";

const HomeFirstLandProfile = () => {
  return (
    <section className="relative bg-black text-white min-h-screen md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full blur-[160px] bg-cyan-500 opacity-70 z-0 animate-float-glow" />

      <div className="relative z-10 container mx-auto  max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:min-h-screen">
          {/* Image Section - Mobile: Top, Desktop: Left */}
          <div className="flex justify-center items-center order-1 md:order-1">
            <img
              src={personalProfile}
              alt="Jasper's profile"
              className="w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-[10000px] 2xl:max-w-[10000px] shadow-2xl rounded-lg"
            />
          </div>

          {/* Text Section - Mobile: Bottom, Desktop: Right */}
          <div className="flex flex-col justify-start md:justify-center items-start space-y-6 order-2 md:order-2 text-center md:text-left mt-8 md:mt-0">
            <BoxReveal boxColor={"#14b8a6"} duration={0.5}>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Hi, I'm Jasper<span className="text-[#22d3ee]">.</span>
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#14b8a6"} duration={0.5}>
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300">
                A Quiet Builder Passionate About Coding
              </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#22d3ee"} duration={0.5}>
              <div className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                <p>
  I build clean, efficient web apps using React, TypeScript, and Tailwind CSS.<br className="hidden sm:block" />
  Always learning and focused on smooth, minimalist user experiences.<br className="hidden sm:block" />
  Experienced in AI chatbots, workflows, and intuitive UIs.<br className="hidden sm:block" />
  I quietly refine my craft and build with intention and clarity.
</p>

              </div>
            </BoxReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFirstLandProfile;