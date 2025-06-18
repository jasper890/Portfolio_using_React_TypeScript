import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
            <div className="text-lg font-semibold">My Portfolio</div>
            <img src="" alt="" />
            <ul className="flex space-x-4">
                <li><a href="#about" className="hover:text-blue-500">About</a></li>
                <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
        </nav>
    );

}

export default Navbar;