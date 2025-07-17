import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);

  const closeMenu = () => setIsMobileOpen(false);

  const linkClass = (color: string) =>
    ({ isActive }: { isActive: boolean }) =>
      `text-3xl md:text-lg text-white transition-all duration-300 relative group font-semibold ${
        isActive ? `text-${color}` : `hover:text-${color}`
      }`;

  const underlineClass = (isActive: boolean, color: string) =>
    `absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
      isActive ? `w-full bg-${color}` : `w-0 bg-${color} group-hover:w-full`
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 w-full text-white py-5 px-6 z-50 transition-all duration-500 flex justify-between items-center ${
          isScrolled
            ? 'bg-white/8 backdrop-blur-2xl shadow-2xl shadow-black/40'
            : 'bg-transparent'
        }`}
      >
        {/* Logo stays exactly as designed */}
       <div
  className="text-white leading-none text-3xl md:text-[3.2rem]"
  style={{ letterSpacing: '-0.02em' }}
>
  <NavLink to="/" onClick={() => setIsMobileOpen(false)}>
    <span
      className="inline-block font-black tracking-tight italic"
      style={{
        fontFamily: '"Open Sans", sans-serif',
        fontWeight: 800,
        fontStyle: 'italic',
        color: 'white',
      }}
    >
      JRN
    </span>
    <span
      className="inline-block mx-1 font-thin"
      style={{
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 100,
        color: 'white',
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
        color: 'white',
      }}
    >
      DEV
    </span>
  </NavLink>
</div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl z-50 relative"
        >
          {isMobileOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {[
            { to: '/', name: 'Home', color: 'violet-400' },
            { to: '/about', name: 'About', color: 'cyan-400' },
            { to: '/projects', name: 'Projects', color: 'amber-300' },
            { to: '/contact', name: 'Contact', color: 'lime-300' },
          ].map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={linkClass(item.color)}>
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span className={underlineClass(isActive, item.color)} />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-10 transform transition-all duration-500 z-40 ${
          isMobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        {[
          { to: '/', name: 'Home', color: 'violet-400' },
          { to: '/about', name: 'About', color: 'cyan-400' },
          { to: '/projects', name: 'Projects', color: 'amber-300' },
          { to: '/contact', name: 'Contact', color: 'lime-300' },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={linkClass(item.color)}
            onClick={closeMenu}
          >
            {({ isActive }) => (
              <>
                {item.name}
                <span className={underlineClass(isActive, item.color)} />
              </>
            )}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Navbar;
