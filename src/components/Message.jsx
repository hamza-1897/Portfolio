import React from 'react'
import { IoIosSend } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";



const Message = () => {
  return (
    
     <section id="contact" class="py-20 px-6 md:px-8 bg-gray-800">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-center text-white mb-4">Contact Me</h2>
            <p class="text-center text-gray-400 max-w-2xl mx-auto mb-12">
                I'm currently open to new opportunities. Feel free to reach out to me with any question .
            </p>
            
            <div class="flex flex-col justify-center items-center  gap-12  mx-auto">
                
               
                
                <div class="w-full md:w-1/2 flex flex-col items-center justify-center">
                    <div class="space-y-6 bg-gray-900 p-8 rounded-xl shadow-lg">
                        
                        <div class="flex items-center space-x-4">
                            <i class=" text-2xl text-blue-500"><MdEmail /></i>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-300">Email Address</h4>
                                <a href="mailto:Mohammadamin78630@gmail.com" class="text-blue-400 hover:underline">hanjaa1897@gmail.com</a>
                            </div>
                        </div>
                        
                        

                        <div class="flex items-center space-x-4">
                            <i class="fa-solid fa-house text-2xl text-blue-500"><FaLocationDot /></i>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-300">Address</h4>
                                <a href="tel:+921234567890" class="text-blue-400 hover:underline">Mandi Bahauddin, Punjab, Pakistan</a>
                            </div>
                        </div>

                        <div class="pt-4">
                            <h4 class="text-lg font-semibold text-gray-300 mb-4">Follow Me</h4>
                            <div class="flex space-x-6">
                                         <a className='text-white text-2xl hover:text-red-500 ' target='_blank' href="https://www.instagram.com/hamzaaa.1897"><FaInstagram /></a>
                                                             <a className='text-white text-2xl hover:text-blue-500 ' target='_blank'  href="https://www.linkedin.com/in/muhammad-hamza-410a95326?utm_source"><FaLinkedin /></a>
                                                             <a className='text-white text-2xl hover:text-black ' target='_blank' href="https://github.com/hnjaa1897"><FaGithubSquare /> </a>
                                               
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
        </div>
    </section>



  )
}

export default Message
