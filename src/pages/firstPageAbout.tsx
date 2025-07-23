import React from 'react';
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
  "audacity/white",
  "googlegemini",
  "php",
  "phpmyadmin",
  "codesandbox/white",
  "n8n",
  "vite",
  "wix",
  "vite",
  "docker",
  "tailwindcss",
];

const firstPageAbout: React.FC = () => {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

  return (
    <section id="about" className="py-20 bg-transparent text-white dark:bg-black dark:text-white w-full relative">
      <div className="relative flex flex-col sm:flex-row w-full h-auto sm:h-[700px] max-w-screen-xl mx-auto justify-start overflow-hidden">
        
  <div className="w-full sm:w-1/2 h-[250px] sm:h-full flex items-center justify-center">
  <div className="transform scale-110 sm:scale-[1.7]">
    <IconCloud images={images} />
  </div>
</div>



        <div className="items-start justify-center flex flex-col w-full sm:w-1/2 z-10 text-left px-4 mt-6 sm:mt-0 ">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Tech Stack</h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-xl">
            This globe shows all the technologies I’ve earned and learned along the way. For building frontend apps, I work with{" "}
            <span className="font-semibold text-white">React</span>,{" "}
            <span className="font-semibold text-white">JavaScript</span>,{" "}
            <span className="font-semibold text-white">TypeScript</span>,{" "}
            <span className="font-semibold text-white">HTML5</span>,{" "}
            <span className="font-semibold text-white">CSS3</span>, and{" "}
            <span className="font-semibold text-white">Tailwind CSS</span>. I deploy and manage code with{" "}
            <span className="font-semibold text-white">Vercel</span>,{" "}
            <span className="font-semibold text-white">Git</span>, and{" "}
            <span className="font-semibold text-white">GitHub</span>.
          </p>

          <br />

          <p className="text-sm sm:text-base text-gray-300 max-w-xl">
            On the backend and automation side, I’ve gained experience with{" "}
            <span className="font-semibold text-white">PHP</span>,{" "}
            <span className="font-semibold text-white">MySQL</span>,{" "}
            <span className="font-semibold text-white">phpMyAdmin</span>,{" "}
            <span className="font-semibold text-white">XAMPP</span>, and{" "}
            <span className="font-semibold text-white">Docker</span>, and I automate workflows using{" "}
            <span className="font-semibold text-white">n8n</span>.
          </p>

          <br />

          <p className="text-sm sm:text-base text-gray-300 max-w-xl">
            For design, content creation, and other tools, I use{" "}
            <span className="font-semibold text-white">Figma</span>,{" "}
            <span className="font-semibold text-white">Audacity</span>,{" "}
            <span className="font-semibold text-white">WordPress</span>,{" "}
            <span className="font-semibold text-white">Wix</span>, and{" "}
            <span className="font-semibold text-white">Codesandbox</span>. I also explore AI tools like{" "}
            <span className="font-semibold text-white">Google Gemini</span> to keep growing and innovating.
          </p>
        </div>
      </div>
    </section>
  );
};

export default firstPageAbout;
