import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { to: '/', name: 'Home', color: 'text-violet-400', underline: 'bg-violet-400' },
  { to: '/about', name: 'About', color: 'text-cyan-400', underline: 'bg-cyan-400' },
  { to: '/projects', name: 'Projects', color: 'text-amber-300', underline: 'bg-amber-300' },
  { to: '/contact', name: 'Contact', color: 'text-lime-300', underline: 'bg-lime-300' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);
  const closeMenu = () => setIsMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full text-white py-5 px-6 z-50 transition-all duration-500 flex justify-between items-center ${
          isScrolled
            ? 'bg-white/8 backdrop-blur-2xl shadow-2xl shadow-black/40'
            : 'bg-transparent'
        }`}
      >
        <div
          className="text-white leading-none text-3xl md:text-[3.2rem]"
          style={{ letterSpacing: '-0.02em' }}
        >
          <NavLink to="/" onClick={closeMenu}>
            <span className="inline-block font-black italic " style={{ fontFamily: '"Open Sans", sans-serif' }}>JRN</span>
            <span className="inline-block mx-1 font-thin" style={{ fontFamily: 'Roboto, sans-serif' }}>|</span>
            <span className="inline-block font-thin italic" style={{ fontFamily: 'Roboto, sans-serif' }}>DEV</span>
          </NavLink>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl z-50 relative"
        >
          {isMobileOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map(({ to, name, color, underline }) => (
            <li key={to}>
              <NavLink to={to}>
                {({ isActive }) => (
                  <span
                    className={`text-3xl md:text-lg font-semibold group relative transition-all duration-300 ${
                      isActive ? color : `hover:${color}`
                    }`}
                  >
                    {name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                        isActive ? `w-full ${underline}` : `w-0 ${underline} group-hover:w-full`
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 text-white transition-all duration-500 ease-in-out transform ${
          isMobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col justify-center items-center gap-10 h-full w-full px-4">
          {navItems.map(({ to, name, color, underline }, index) => (
            <NavLink key={to} to={to} onClick={closeMenu}>
              {({ isActive }) => (
                <span
                  className={`text-3xl font-semibold group relative transform transition-all duration-500 ${
                    isMobileOpen
                      ? `opacity-100 translate-y-0 delay-${index * 100}`
                      : 'opacity-0 translate-y-5'
                  } ${isActive ? color : `hover:${color}`}`}
                >
                  {name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                      isActive ? `w-full ${underline}` : `w-0 ${underline} group-hover:w-full`
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
