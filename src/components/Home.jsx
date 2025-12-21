import React from 'react'
import mypic from '../assets/mypic.png';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <>
      <div  className="w-[100%] flex-col-reverse md:flex-row  flex mt-5 md:h-[80vh]">
<div id="home-R" className=" flex  overflow-hidden justify-center md:mt-3 mt-10 items-center w-full h-[70%] md:h-full md:w-[60%]">
<motion.div initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeIn' }}
      viewport={{ once: true, amount: 0.2 }} id="content" className="flex flex-col md:items-start justify-center items-center w-full  md:w-[90%] lg:w-[80%] ">
  <div><h4 className="text-blue-400 text-xl md:text-lg lg:text-2xl">Hello Everyone.</h4></div>
  <div><h1 className="text-white text-3xl md:text-3xl lg:text-6xl font-bold">I'M MUHAMMAD HAMZA</h1></div>
  <div className="mt-4 w-[60%] md:w-full md:text-lg lg:text-xl text-white"><h2>
    A passionate developer specializing in MERN Stack, Mobile Application Development, and exploring the realms of AI & Machine Learning.
    Currently pursuing BS Informational Technology at  University of Punjab , Lahore.
  </h2></div>
  <div id="buttons" className="flex my-8 gap-6" >
    <button className="cursor-pointer bg-blue-400 hover:bg-blue-500 rounded flex justify-center items-center gap-1 text-white md:px-3 py-1 px-2 md:py-1 "> <p className='lg:text-2xl md:text-lg font-bold'>  <  CiMail /></p><a href="#contact">Hire me</a></button>
    <button className="cursor-pointer border rounded border-blue-400 hover:bg-blue-400 text-blue-400 hover:text-white md:px-3 md:py-1 py-1 px-2">Download CV</button>
  </div>
  <div className="flex mt-3 flex-col gap-3">
    <h2 className='text-blue-500 font-serif text-lg'>Find Me</h2>
    <ul className="flex gap-5">
      <a className='text-white text-2xl hover:text-red-500 ' target='_blank' href="https://www.instagram.com/hamzaaa.1897"><FaInstagram /></a>
      <a className='text-white text-2xl hover:text-blue-500 ' target='_blank'  href="https://www.linkedin.com/in/muhammad-hamza-410a95326?utm_source"><FaLinkedin /></a>
      <a className='text-white text-2xl hover:text-black ' target='_blank' href="https://github.com/hnjaa1897"><FaGithubSquare /> </a>
    </ul>
  </div>
</motion.div>
</div>
<div id="home-L" className="flex overflow-hidden justify-center mt-8 md:mt-2  h-[30%] w-ful md:h-full md:w-[50%] items-center">

  <motion.div initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeIn' }}
      viewport={{ once: true, amount: 0.2 }} className="lg:w-[50%] md:w-[70%] w-[75%]  shadow-2xl  shadow-black rounded ">
    <img src={mypic} className="h-[100%]  rounded w-[100%]"/>
  </motion.div>
</div>

</div>
    </>
  )
}

export default Home
