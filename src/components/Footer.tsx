import React from 'react';


const Footer: React.FC = () => { 
    return (
      
      <footer className="bg-[#161313] text-white py-4">
        <div></div>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} JRN|DEV. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;