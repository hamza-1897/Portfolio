import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      
        <div className='flex w-full h-[22vh] md:flex-row py-2 flex-col md:h-[12vh] border border-t justify-around items-center'>
            <div id='links' className='md:h-full h-[30%]  flex justify-center   items-center w-full md:w-[30%]'>

                    <div className='flex justify-center  gap-8 items-center'>

                         <a className='text-white text-2xl hover:text-red-500 ' target='_blank' href="https://www.instagram.com/hamzaaa.1897"><FaInstagram /></a>
                              <a className='text-white text-2xl hover:text-blue-500 ' target='_blank'  href="https://www.linkedin.com/in/muhammad-hamza-410a95326?utm_source"><FaLinkedin /></a>
                              <a className='text-white text-2xl hover:text-black ' target='_blank' href="https://github.com/hnjaa1897"><FaGithubSquare /> </a>
                    </div>

            </div>
            <div id='to_top' className='md:h-full md:w-[30%] h-[30%] w-full justify-center items-center flex'>
                    <a href='#home' className='bg-blue-500 text-md rounded-2xl px-2 shadow-md hover:shadow-sm hover:bg-blue-600 cursor-pointer hover:shadow-blue-500 py-1 text-white '>Back to Top </a>
            </div>
            <div id='copy' className='md:h-full h-[30%] w-full flex justify-center   items-center md:w-[30%]'>
                <h1 className='flex justify-center items-center text-slate-300'>© 2025 Made with <span className='mx-2 text-red-500'><FaHeart /></span> by Muhamad Hamza </h1>
            </div>
        </div>

    </>
  )
}

export default Footer
