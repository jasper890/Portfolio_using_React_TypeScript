
import TiltedCard from '../components/magicui/reactbit/TiltedCard.tsx'
import personalProfile from "../assets/portfoliopic.png";
import { HyperText } from '../components/magicui/hyper-text.tsx';
import { InteractiveHoverButton } from '../components/magicui/interactive-hover-button.tsx';
const AbountSecond = () => {
  return (
      <section id="about" className="py-20 bg-transparent text-white dark:bg-black dark:text-white w-full relative">
          
   <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-12">
  {/* TEXT SECTION */}
  <div className="max-w-xl text-left">
   <HyperText>About me</HyperText>
  <p className="text-gray-300 mb-4">
  I’m Jasper Ryan J. Ngo — a BSIT student and currently a Digital and Artificial Intelligence Intern at Devonshire Wessex, a UK-based company (June 2025 – Present). I work on building, integrating, and training AI chatbots to provide responses tailored to website needs and improve user interaction.
</p>

<p className="text-gray-300 mb-4">
  I specialize in Java, JavaScript, HTML, CSS, React, and TypeScript. I also automate workflows using tools like <strong>n8n</strong> to make systems faster and smarter.
</p>



  </div>

  {/* IMAGE / CARD SECTION */}
  <TiltedCard
    imageSrc={personalProfile}
    altText="Jasper Ngo - Profile"
    captionText="Jasper Ngo"
    containerHeight="450px"
    containerWidth="550px"
    imageHeight="450px"
    imageWidth="450px"
    rotateAmplitude={20}
    scaleOnHover={1.3}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
       <InteractiveHoverButton className='text-black   m-3 mt-102    ml-30   border-4 border-white shadow-lg shadow-white/40 transition-transform duration-200 active:scale-95'>Download Resume</InteractiveHoverButton>
      </a>
    }
  />
</div>
    </section>
  )
}

export default AbountSecond