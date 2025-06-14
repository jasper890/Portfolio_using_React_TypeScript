import React from 'react';
import { IconCloud } from "../components/magicui/icon-cloud";
import { SmoothCursor } from "../components/ui/smooth-cursor";
import { AnimatedCircularProgressBar } from "../components/magicui/animated-circular-progress-bar";

 
const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "tailwindcss",
  "mysql",
    "csharp",
    "cisco",
    "wordpress",
    "figma",
    "typescript",
      "git",
  "github",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
    "vercel",
    "audacity",
    "googlegemini",
    "php",
    "phpmyadmin",
  "codesandbox"
];
 
const Home: React.FC = () => { 
const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}` 
  );
    return (
       <section id="about" className="py-20 bg-white text-black dark:bg-black dark:text-white">
        <div className="relative flex w-full h-[700px] max-w-screen-xl  ml-[300px] justify-end overflow-hidden ">
                    <AnimatedCircularProgressBar
                    max={100}
                    min={0}
                    value={75}
                    gaugePrimaryColor="green    "
                    gaugeSecondaryColor="gray"
                />
                <IconCloud images={images} />

            </div>
   
            <SmoothCursor />
       </section>
    );  
};

export default Home;