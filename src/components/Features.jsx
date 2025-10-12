import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";


import { motion } from 'framer-motion';

const Features = () => {
  return (
    <>
      <div id="features" className=" py-[2%]  mt-8 flex flex-col w-[100%] h-[200vh] lg:h-[95vh] md:h-[110vh]">
  <div className="flex my-1 w-full h-[5%] md:my-4 justify-center  items-center md:w-[100%] md:h-[18%]">
    <h1 className="md:text-4xl text-2xl font-extrabold text-white">What I DO</h1>
  </div>
  <div className="flex justify-center lg:gap-4   gap-2 md:gap-2.5 flex-wrap  items-center w-full h-[95%] md:w-[100%] md:h-[80%]">
    <div className="flex justify-center  overflow-hidden  mt-2 items-center w-[80%] h-[33%] lg:w-[30%] lg:h-[100%] md:w-[40%] md:h-[90%]">

      <motion.div  initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeIn' }}
      viewport={{ once: true, amount: 0.2 }} id="card" className=" w-[80%] h-[90%]  md:h-[90%]  md:w-[80%] animate-pulse shadow-[2px_2px_5px_rgba(0,0,0,0.3),_-2px_-2px_15px_rgba(255,255,255,0.3)] rounded-2xl flex flex-col justify-center  transition duration-500 group hover:bg-blue-500  ">
<div className="w-[100%] h-[20%]  flex items-center  "> <div className='md:ml-7 ml-10 font-bold text-2xl md:text-5xl group-hover:text-white text-blue-500  group-hover:animate-spin'><FaReact /></div></div>
<div className="w-[100%] h-[15%]   flex justify-center ">
  <h1 className="md:text-2xl text-lg group-hover:text-white  transition duration-500 text-blue-400 font-bold">
MERN Stack Development</h1>
</div>
<div className="w-[100%] h-[52%]  flex justify-center ">
  <p className="w-[80%] md:text-lg text-sm  text-white">Specialized in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Creating responsive, scalable, and modern web solutions with clean architecture and best practices for optimal performance and user experience.</p>
</div>
      </motion.div>
              
    </div>
    <div className="flex justify-center  overflow-hidden items-center w-[80%] h-[33%] lg:w-[30%] lg:h-[100%] md:w-[40%] md:h-[90%]">
         <motion.div  initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeIn' }}
      viewport={{ once: true, amount: 0.2 }} id="card" className=" w-[80%] h-[90%]  md:h-[90%]  md:w-[80%] animate-pulse shadow-[2px_2px_5px_rgba(0,0,0,0.3),_-2px_-2px_15px_rgba(255,255,255,0.3)] rounded-2xl flex flex-col justify-center  transition duration-500 group hover:bg-blue-500  ">
<div className="w-[100%] h-[20%]  flex items-center  "> <div className='md:ml-7 ml-10 font-bold text-2xl md:text-5xl group-hover:text-white text-blue-500 group-hover:animate-bounce '><FaMobile /></div></div>
<div className="w-[100%] h-[15%] flex justify-center ">
  <h1 className="md:text-2xl text-lg w-[70%]  group-hover:text-white  transition duration-500 text-blue-400 font-bold">Responsive Web Development</h1>
</div>
<div className="w-[100%] h-[52%]  mt-4 flex justify-center ">
  <p className="w-[80%] md:text-lg text-sm  text-white">Building mobile-first, responsive websites that provide
     optimal viewing experience across all devices. Implementing modern CSS frameworks
      like Tailwind CSS to ensure consistent and adaptive layouts that enhance usability
       and engagement on any screen size.</p>
</div>
      </motion.div>
       
    </div>
    <div className="flex justify-center  overflow-hidden items-center w-[80%] h-[33%] lg:w-[30%] lg:h-[100%] md:w-[40%] md:h-[90%]">
         <motion.div  initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeIn' }}
      viewport={{ once: true, amount: 0.2 }} id="card" class=" w-[80%] h-[90%] md:h-[90%]  md:w-[80%] animate-pulse shadow-[2px_2px_5px_rgba(0,0,0,0.3),_-2px_-2px_15px_rgba(255,255,255,0.3)] rounded-2xl flex flex-col justify-center  transition duration-500 group hover:bg-blue-500 ">
<div className="w-[100%] h-[20%]  flex items-center  "> <div className='md:ml-7 ml-10 font-bold text-2xl md:text-5xl group-hover:text-white text-blue-500 group-hover:animate-bounce'><FaFlutter /></div></div>
<div class="w-[100%] h-[15%] flex justify-center ">
  <h1 class="md:text-2xl text-lg group-hover:text-white   transition duration-500 text-blue-500 font-bold">Flutter Developer</h1>
</div>
<div class="w-[100%] h-[52%]  flex justify-center ">
  <p class="w-[80%] md:text-lg text-sm text-white">Proficient in developing interactive Cross-platform mobile 
    applications with Dart (Flutter) . Creating efficient and maintainable solutions 
     with User-friendly UIs.</p>
</div>
      </motion.div>
       
    </div>
  </div>
</div>

    </>
  )
}

export default Features
