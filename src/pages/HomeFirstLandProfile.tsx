import personalProfile from "../assets/jasperImageForPort.png";

const HomeFirstLandProfile = () => {
  return (
      <section className="bg-black text-white">
 <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[180px] pointer-events-none z-0 animate-float-glow" />
      {/* Terminal Content */}
      <div className="relative z-10 p-8 text-xl text-center max-w-2xl"></div>
      {/* Grid Section */}
      <div className="grid grid-cols-4 h-screen">
        {/* Image Section */}
        <div className="col-span-2">
          <img
            src={personalProfile}
            alt="Jasper's profile"
            className="w-full h-full object-cover -mt-30 "
          />
        </div>

        {/* Text Section */}
        <div className="col-span-2 flex items-center justify-center p-8">
        <p className="text-xl text-center font-serif opacity-0 animate-fade-in">
  Dedicated full-stack developer specializing in building robust and user-centric web applications with clean, maintainable code.
</p>

        </div>
      </div>

     
     
    </section>
  )
}

export default HomeFirstLandProfile