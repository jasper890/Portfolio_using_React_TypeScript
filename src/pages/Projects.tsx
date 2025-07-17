import React, { useState } from 'react';
import {  Github } from 'lucide-react';
import PowerApps from '../assets/POWERAPPS_ATTENDANCE.png'
import MonitoringSystem from '../assets/monitoringsystem.png'
import Renalink from '../assets/Renalink_Nephrology-1.png'
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'PowerApps Attendance System',
    description: 'A system built with PowerApps for tracking attendance and managing student records.',
    image: PowerApps,
    tags: ['PowerApps', 'PowerFx'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Student Monitoring System',
    description: 'A simple tool to track student info, status, and total units. Includes add, edit, delete, search, and section organization features. ',
    image: MonitoringSystem,
    tags: ['Java', 'GUI'],
    liveUrl: '#',
    githubUrl: '#',
  },
 
  {
    id: 3,
    title: 'Renalink Nephrology Center Website',
    description: 'An analytics dashboard for tracking financial data with interactive charts and reports.',
    image: Renalink,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP','MYSQL','Git','ChatBot'],
    liveUrl: '#',
    githubUrl: '#',
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
      <section id="projects" className="py-20 bg-transparent text-white overflow-x-hidden">
 <div className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full blur-[160px] pointer-events-none z-0 animate-float-glow bg-purple-700 opacity-70" />
      <div className="absolute top-0 right-20    w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full blur-[160px] pointer-events-none z-0 animate-float-glow bg-indigo-600 opacity-70" />
 <div className="absolute bottom-0 right-1/2 w-[250px] h-[150px] sm:w-[200px] sm:h-[250px] rounded-full blur-[160px] pointer-events-none z-0 animate-float-glow bg-indigo-600 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems
            and showcase different technical skills.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button 
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === tag ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={`${project.id}-${tag}`} 
                      className="px-3 py-1 bg-gray-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                  >
                   
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;