import React from 'react';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import Chatbot from './Chatbot.tsx';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Layout;