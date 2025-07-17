import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

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
                ? 'bg-white/8 backdrop-blur-2xl shadow-2xl shadow-black/40 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/15 before:via-white/5 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/10 after:to-transparent after:pointer-events-none' 
                : 'bg-transparent'
        }`}>

        <div className="text-white leading-none " style={{ fontSize: '3.2rem', letterSpacing: '-0.02em' }}>
             <NavLink to="/">
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
          </NavLink>
            </div>
   <ul className="flex space-x-4">
  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `text-lg text-white transition-all duration-300 relative group ${
          isActive ? 'text-violet-400' : 'hover:text-violet-400'
        }`
      }
    >
      {({ isActive }) => (
        <>
          Home
          <span
            className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
              isActive
                ? 'w-full bg-violet-400'
                : 'w-0 bg-violet-400 group-hover:w-full'
            }`}
          />
        </>
      )}
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        `text-lg text-white transition-all duration-300 relative group ${
          isActive ? 'text-cyan-400' : 'hover:text-cyan-400'
        }`
      }
    >
      {({ isActive }) => (
        <>
          About
          <span
            className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
              isActive
                ? 'w-full bg-cyan-400'
                : 'w-0 bg-cyan-400 group-hover:w-full'
            }`}
          />
        </>
      )}
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/projects"
      className={({ isActive }) =>
        `text-lg text-white transition-all duration-300 relative group ${
          isActive ? 'text-amber-300' : 'hover:text-amber-300'
        }`
      }
    >
      {({ isActive }) => (
        <>
          Projects
          <span
            className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
              isActive
                ? 'w-full bg-amber-300'
                : 'w-0 bg-amber-300 group-hover:w-full'
            }`}
          />
        </>
      )}
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `text-lg text-white transition-all duration-300 relative group ${
          isActive ? 'text-lime-300' : 'hover:text-lime-300'
        }`
      }
    >
      {({ isActive }) => (
        <>
          Contact
          <span
            className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
              isActive
                ? 'w-full bg-lime-300'
                : 'w-0 bg-lime-300 group-hover:w-full'
            }`}
          />
        </>
      )}
    </NavLink>
  </li>
</ul>


        </nav>
    );

}

export default Navbar;
