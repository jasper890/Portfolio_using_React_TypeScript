import React from 'react'
import { IconCloud } from "../components/magicui/icon-cloud";




 
const slugs = [
  "xampp",
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "vercel/white",
  "git",
  "n8n",
  "github/white",
  "vercel/white",
  "figma",
  "tailwindcss",
  "mysql",
  "php",
  "xampp",
    "docker",
    "cisco",
    "wordpress",
    "figma",
    "typescript",
      "git",
  "github/white",
  "javascript",
  "wix",
  "react",
  "html5",
  "css3",
    "vercel/white",
    "audacity",
    "googlegemini",
    "php",
    "phpmyadmin",
  "codesandbox/white",
  "n8n",
  "vite",
  'wix',
  "vite",
  "docker",
  "tailwindcss",
];
 
const firstPageAbout: React.FC = () => { 
const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}` 
  );
    return (
 <section id="about" className="py-20 bg-transparent text-white dark:bg-black dark:text-white w-full relative">
        <div className="absolute top-[30%] right-48 w-[200px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full blur-[200px] pointer-events-none z-0 animate-pulse bg-white opacity-70" />
        <div className="absolute top-[25%] right-48 w-[150px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full blur-[200px] pointer-events-none z-0 animate-bounce bg-blue-600 opacity-60" />
        <div className="absolute top-[35%] right-48 w-[100px] h-[150px] sm:w-[150px] sm:h-[200px] rounded-full blur-[200px] pointer-events-none z-0 animate-ping bg-violet-500 opacity-50" />

        <div className="relative flex w-full h-[200px] sm:h-[700px] max-w-screen-xl mr-5 ml-auto justify-end overflow-hidden">
            <IconCloud images={images} />
        </div>
        
</section>
    );  
};

export default firstPageAbout