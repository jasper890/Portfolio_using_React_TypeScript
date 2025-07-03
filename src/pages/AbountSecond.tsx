
import TiltedCard from '../components/magicui/reactbit/TiltedCard.tsx'
import personalProfile from "../assets/portfoliopic.png";

const AbountSecond = () => {
  return (
      <section id="about" className="py-20 bg-transparent text-white dark:bg-black dark:text-white w-full relative">
          
          <TiltedCard
              imageSrc={personalProfile}
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Jasper Ngo"
            containerHeight="450px"
            containerWidth="450px"
            imageHeight="450px"
            imageWidth="450px"
            rotateAmplitude={28}
            scaleOnHover={1.4}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
    <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button
                    className="bg-black text-white w-[180px] px-3  py-3 rounded-full m-3 mt-100 ml-32 font-semibold tracking-wide text-sm border-4 border-white shadow-lg shadow-white/40 transition-transform duration-200 active:scale-95"
                    style={{
                        boxShadow: '0 6px 20px 0 rgba(255,255,255,0.25), 0 1.5px 0 0 #fff',
                        textShadow: '0 2px 8px rgba(255,255,255,0.7), 0 1px 0 #fff'
                    }}
                >
                    Download Resume
                </button>
            </a>
  }
/>
    </section>
  )
}

export default AbountSecond