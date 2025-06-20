import personalProfile from "../assets/jasperImageForPort.png";
import { BoxReveal } from "../components/magicui/box-reveal";

const HomeFirstLandProfile = () => {
  return (
      <section className="bg-black text-white">
 <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[180px] pointer-events-none z-0 animate-float-glow" />
      {/* Terminal Content */}
      <div className="relative z-10 p-8 text-xl text-center max-w-2xl"></div>
      {/* Grid Section */}
      <div className="grid grid-cols-4 h-screen">
        {/* Image Section */}
              <div className="col-span-2 ">
                  <div className="ml-10 pl-20 w-full h-full relative">
                      <img
            src={personalProfile}
            alt="Jasper's profile"
            className="w-full h-full object-cover -mt-30 "
          />
                  </div>
          
        </div>

        {/* Text Section */}
              <div className="col-span-2 flex flex-col items-start justify-center p-8 space-y-6 bg-black ">
                  <div className="ml-10 pl-20">
                      
                     <BoxReveal boxColor={"#14b8a6"} duration={0.5}>
    <p className="text-[3.5rem] font-semibold text-white">
      Hi, I’m Jasper<span className="text-[#22d3ee]">.</span>
    </p>
  </BoxReveal>

  <BoxReveal boxColor={"#14b8a6"} duration={0.5}>
    <h2 className="text-[1.2rem] text-gray-300">
      A Quiet Builder Passionate About Coding
    </h2>
  </BoxReveal>

  <BoxReveal boxColor={"#22d3ee"} duration={0.5}>
    <div className="text-gray-400 text-base max-w-lg leading-relaxed">
      <p>
        I craft clean, efficient web applications using React, TypeScript, and Tailwind CSS. <br />
        Constantly learning new technologies and improving my skills. <br />
        Focused on creating smooth user experiences with clean code. <br />
        Let’s build something great together.
      </p>
    </div>
  </BoxReveal> 
                  </div>
  
</div>


      </div>

     
     
    </section>
  )
}

export default HomeFirstLandProfile