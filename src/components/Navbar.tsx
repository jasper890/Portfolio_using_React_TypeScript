import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            console.log('Scroll position:', scrollPosition, 'isScrolled:', scrollPosition > 10);
            
            if (scrollPosition > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    console.log('Current state - isScrolled:', isScrolled);

    return (
        <nav className={`fixed top-0 w-full text-white py-5 px-6 flex justify-between items-center z-50 transition-all duration-500 ${
            isScrolled 
                ? 'bg-[#161313] shadow-[0_4px_20px_rgba(255,255,255,0.1)]' 
                : 'bg-transparent'
        }`}>

            <div className="text-white leading-none " style={{ fontSize: '3.2rem', letterSpacing: '-0.02em' }}>
                <span 
                    className="inline-block font-black tracking-tight italic"
                    style={{ 
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 800,
                        fontStyle: 'italic',
                        color: 'white'
                    }}
                >
                    JRN
                </span>
                <span 
                    className="inline-block mx-1 font-thin"
                    style={{ 
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 100,
                        color: 'white'
                    }}
                >
                    |
                </span>
                <span 
                    className="inline-block font-thin tracking-wide italic"
                    style={{ 
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 100,
                        fontStyle: 'italic',
                        color: 'white'
                    }}
                >
                    DEV
                </span>
            </div>
           <ul className="flex space-x-4">
  <li>
    <a 
      href="#about" 
      className="text-lg text-white hover:text-cyan-400 text-glow-cyan transition-all duration-300"
    >
      About
    </a>
  </li>
  <li>
    <a 
      href="#projects" 
      className="text-lg text-white hover:text-amber-300 text-glow-amber transition-all duration-300"
    >
      Projects
    </a>
  </li>
  <li>
    <a 
      href="#contact" 
      className="text-lg text-white hover:text-lime-300 text-glow-lime transition-all duration-300"
    >
      Contact
    </a>
  </li>
</ul>

        </nav>
    );

}

export default Navbar;