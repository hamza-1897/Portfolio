import React from 'react'
import { motion } from 'framer-motion';
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FaServer } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaFlutter } from 'react-icons/fa6';


const Skills = () => {
  return (
  
    <section id="skills" class="py-20 px-6 md:px-8 bg-gray-800">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-center text-white mb-4">My Skills</h2>
            <p class="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            </p>
            
            <div class="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-8 text-center max-w-5xl mx-auto">
                
                <div class="bg-gray-900 p-6 flex group flex-col justify-center items-center rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                                          <i class=" text-blue-500 group-hover:animate-spin text-5xl mb-4"><FaReact /></i>
                 
                    <h3 class="text-xl text-white font-semibold">React</h3>

                </div>
                
                <div class="bg-gray-900 p-6 flex flex-col justify-center items-center rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <i class=" text-blue-500 text-5xl mb-4"><FaNode /></i>
                    <h3 class="text-xl text-white font-semibold">Node.js</h3>
                </div>
                
                <div class="bg-gray-900 p-6 flex flex-col justify-center items-center rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <i class=" text-green-600 text-5xl mb-4"><BiLogoMongodb /></i>
                    <h3 class="text-xl text-white font-semibold">MongoDB</h3>
                </div>
                
                <div class="bg-gray-900 p-6 flex flex-col justify-center items-center rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <i class=" text-blue-500 text-5xl mb-4"><FaServer /></i>
                    <h3 class="text-xl text-white font-semibold">Express.js</h3>
                </div>
                
                <div class="bg-gray-900 p-6 flex flex-col justify-center items-center rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                                        <i class=" text-blue-700 text-4xl mb-4"><FaFlutter /></i>

                    <h3 class="text-xl text-white font-semibold">Flutter</h3>

                </div>
                
                <div class="bg-gray-900 p-6 flex flex-col justify-center items-center rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <i class=" text-blue-500 text-5xl mb-4"><IoLogoCss3 /></i>
                    <h3 class="text-xl text-white font-semibold">CSS3</h3>
                </div>
                
                <div class="bg-gray-900 p-6 flex flex-col justify-center items-center rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <i class=" text-yellow-400  text-5xl mb-4"><IoLogoJavascript /></i>
                    <h3 class="text-xl text-white font-semibold">JavaScript</h3>
                </div>

                <div class="bg-gray-900 p-6 flex flex-col justify-center items-center rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <i class=" text-white text-5xl mb-4"><FaGithubSquare /></i>
                    <h3 class="text-xl text-white font-semibold">Git</h3>
                </div>
                
                <div class="bg-gray-900 p-6 flex flex-col justify-center items-center rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <i class=" text-blue-500  text-5xl mb-4"><RiTailwindCssFill /></i>
                    <h3 class="text-xl text-white font-semibold">Tailwind CSS</h3>
                </div>
                
                <div class="bg-gray-900 flex flex-col justify-center items-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <i class=" text-orange-400 text-5xl mb-4"><SiPostman /></i>
                    <h3 class="text-xl text-white font-semibold">Postman</h3>
                </div>

            </div>
        </div>
    </section>

  );
}

export default Skills