import React from 'react'
import { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

const Nav_bar = () => {


const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);


  return (
    <>
      <div id='home' className="w-[100%] flex justify-between items-center h-[10vh] overflow-hidden bg-[#242625] shadow-sm shadow-white">
<div id="nav-logo" className="h-full w-[30%]  flex items-center justify-center  ">
  <div className="h-full flex items-center justify-center ">
    <h1 className="text-white font-mono ml-4 md:ml-0.5 text-lg md:text-xl">PORTFOLIO</h1>
  </div>
</div>
{/*navigation for medium and larg */}
      <div id="nav-menu" className="md:flex  hidden justify-end w-[65%] h-full  items-center">

  <ul className="flex md:gap-4 md:mr-15 w-[60%] mr-10 font-sansarif text-lg text-white justify-around ">
    <a className="hover:text-blue-400 " href="#home">Home</a>
    <a className="hover:text-blue-400 "  href="#features">Features</a>
    <a className="hover:text-blue-400 "  href="#skills">Skills</a>
    <a className="hover:text-blue-400 "  href="#">Projects</a>
    <a className="hover:text-blue-400 "  href="#contact">Contact</a>
  </ul>

        </div>
{/*navogation for mbl */}


<div className="md:hidden  h-ful w-[20%] ">
  
 <button className="md:hidden text-white ml-4 text-2xl" onClick={toggleMenu}>
          {isOpen ? <RxCross2 /> : <FaBars />}
        </button>
          
        </div>
             {isOpen && (
        <div className="bg-[#2a2c2b] md:hidden z-50 absolute top-16 w-full h-10vh  shadow-md ">

  <ul className="flex flex-col justify-center text-white items-center ">
    <a className="hover:text-blue-400 py-1 text-center w-full " onClick={toggleMenu} href="#home">Home</a>
    <a className="hover:text-blue-400 py-1 border-slate-600  border-y text-center w-full" onClick={toggleMenu} href="#features">Features</a>
    <a className="hover:text-blue-400 py-1 text-center w-full" onClick={toggleMenu} href="#skills">Skills</a>
    <a className="hover:text-blue-400 py-1 border-y border-slate-600 text-center w-full" onClick={toggleMenu} href="#">Projects</a>
    <a className="hover:text-blue-400 py-1 text-center w-full" onClick={toggleMenu} href="#contact">Contact</a>
  </ul>
        </div>
      )}
</div>

    </>
  )
}
export default Nav_bar