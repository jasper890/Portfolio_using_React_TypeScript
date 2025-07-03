import { Github, Facebook, Linkedin } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className=" bottom-0 left-0 right-0 z-10 relative overflow-hidden overflow-x-hidden">
      {/* Background with edge lighting effects */}
      <div className="absolute inset-0 bg-black">
        {/* Left edge light */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-400/30 via-cyan-300/20 to-transparent blur-xl"></div>
        {/* Right edge light */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-purple-400/30 via-pink-300/20 to-transparent blur-xl"></div>
        {/* Additional ambient glow */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/10 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/10 to-transparent"></div>
      </div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-2xl border-t border-white/5"></div>
      
      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/2 via-transparent to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 text-white py-3 md:py-2">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="flex flex-col items-center space-y-3 md:flex-row md:justify-between md:space-y-0">
            
            {/* Logo with glass effect */}
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-white/2 rounded-lg blur-sm"></div>
              <div className="relative text-white leading-none text-lg sm:text-xl md:text-2xl lg:text-3xl px-2 py-1" style={{ letterSpacing: '-0.02em' }}>
                  <Link to="/">
                <span 
                  className="inline-block font-black tracking-tight italic drop-shadow-lg"
                  style={{ 
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 800,
                    fontStyle: 'italic',
                    color: 'white',
                    textShadow: '0 0 20px rgba(255,255,255,0.3)'
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
                    textShadow: '0 0 10px rgba(255,255,255,0.5)'
                  }}
                >
                  |
                </span>
                <span 
                  className="inline-block font-thin tracking-wide italic drop-shadow-lg"
                  style={{ 
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 100,
                    fontStyle: 'italic',
                    color: 'white',
                    textShadow: '0 0 20px rgba(255,255,255,0.3)'
                  }}
                >
                  DEV
                  </span>
                </Link>
              </div>
            </div>

            {/* Social Media Icons with glass effect */}
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/jasper890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 p-2 rounded-full border border-white/5 bg-white/2 backdrop-blur-sm hover:bg-white/5 hover:border-white/10"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Github className="relative z-10 w-5 h-5 md:w-6 md:h-6 drop-shadow-lg" />
              </a>
              <a 
                href="https://www.facebook.com/JasperRyan2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20"
                aria-label="Facebook"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Facebook className="relative z-10 w-5 h-5 md:w-6 md:h-6 drop-shadow-lg" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jasper-ryan-ngo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Linkedin className="relative z-10 w-5 h-5 md:w-6 md:h-6 drop-shadow-lg" />
              </a>
            </div>
          </div>

          {/* Divider with glass effect */}
          <div className="relative my-2 md:my-1">
            <div className="border-t border-white/10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent h-px"></div>
          </div>

          {/* Copyright with glass background */}
          <div className="text-center relative">
            <div className="absolute inset-0 bg-white/1 rounded-lg blur-sm"></div>
            <p className="relative text-gray-300 text-xs md:text-sm py-1 drop-shadow-sm">
              &copy; {new Date().getFullYear()} JRN|DEV. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}