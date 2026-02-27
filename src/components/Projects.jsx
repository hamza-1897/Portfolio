import React from 'react';
import { FaGithubSquare } from "react-icons/fa";
import tfs from '../assets/tfs2.jpeg';
import abt from '../assets/abt.png';


const Projects = () => {
  const projectData = [
    {
      title: "Cement Distribution Website",
      description: "Official website for ABU BAKAR TRADERS.A leading Cement Distributors in Mandi Bahauddin.",
      tech: ["HTML", "Tailwind CSS"],
      github: "https://github.com/hamza-1897/AbuBakarTraders.git",
      image: abt
    },
    {
      title: "Teacher Feedback System",
      description: "A React Native app that allows students to provide feedback to teachers.",
      tech: ["React Native", "Express.js", "MongoDB"],
      github: "https://github.com/hamza-1897/Teacher-Feedback-System.git",
      image: tfs
    }
  ];

  return (
    <section className="bg-[#0f172a] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="group bg-[#1a2238] rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 shadow-xl">
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

             
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

              
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-blue-900/30 text-blue-400 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

               
                <div className="flex items-center gap-4 border-t border-gray-800 pt-4">
                  
                  <a href={project.github} className="flex items-center gap-1 text-sm text-white hover:text-blue-400 transition-colors">
                    <FaGithubSquare size={16} /> Code
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