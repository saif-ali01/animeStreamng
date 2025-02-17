import React from 'react'
import "../../globals.css";
import { SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from "react-icons/sl";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='  w-full mt-60 h-6 flex flex-col justify-center items-center text-white'>
      <h1 className=' textShadow1 lg:text-5xl font-bold tracking-widest' > ANIME TWISTORS</h1>
      <p className='w-3/5 text-gray-400  text-xs leading-7 opacity-85 mt-7 tracking-widest uppercase'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum obcaecati autem architecto sint aut sequi, provident consectetur non facilis maxime ullam atque iste pariatur.</p> 
      <div className="w-60 mt-9 pb-10 flex justify-between text-4xl text-white">
          <SlSocialYoutube className='hover:text-red-500'/>
          <SlSocialInstagram className='hover:text-pink-800'/>
          <SlSocialLinkedin className='hover:text-blue-800'/>
        </div>     
        <div className="flex justify-between pb-4 text-gray-500 uppercase items-center text-lg">
          <div className="flex items-center">Copyright  <FaRegCopyright  className='ml-2 mr-2'/>  2024/</div>
          <div className="flex items-center">Developed by <span className='hover:text-blue-800 ml-2'>Saif_Ali </span> <SlSocialLinkedin className='hover:text-blue-800 ml-2 mb-3 text-3xl'/></div>
        </div>
    </div>
  )
}

export default Footer