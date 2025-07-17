import React, { useEffect, useState } from 'react';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import Chatbot from './Chatbot.tsx';
import { SmoothCursor } from "../components/ui/smooth-cursor";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Chatbot />
      <Footer />
      {!isMobile && <SmoothCursor />}
    </div>
  );
};

export default Layout;
