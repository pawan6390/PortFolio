import React from 'react'

import pic from "../../public/photo.avif"

import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { TiSocialYoutube } from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";

import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
    <div name="Home"
     className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
       <div className='flex flex-col md:flex-row'>
       <div className='md:w-1/2 mt-12px md:mt-24 space-y-2 order-2 md:order-1'>
       <span className='text-xl'>Welcome In My Feed</span>
      <div className='flex space-x-1 text-2xl md:text-4xl'>
      <h1>Hello I am a</h1>
      {/* <span className='text-red-600 font-bold'>Developer</span> */}

      <ReactTyped
          className='text-red-600 font-bold'
          strings={["Frontend", "MERN Stack", "Developer", "Programmer", "AND", "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />

      </div>
      <br />
       <p className='text-sm md:text-md text-justify'>"While using MERN stack developer i am creating seamless web applications, weaving together MongoDB, Express.js, React, and Node.js to build dynamic, scalable, and responsive solutions. With expertise in both front-end and back-end, transform ideas into reality, crafting innovative user experiences that drive modern digital transformation."</p>
       <br />
       {/* social media icons */}
       <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
       <div className='space-y-2'>
        <h1 className='font-bold'>Available on</h1>
       <ul className='flex space-x-5'>
       <li>
        <a href="https://www.facebook.com/"
        target="_blank">
        <IoLogoFacebook  className='text-2xl cursor-pointer'/>
        </a>
        </li>

       <li>
        <a href="https://www.linkedin.com/"
        target="_blank">
         <FaLinkedin  className='text-2xl cursor-pointer' />
         </a>
         </li>


        <li>
        <a href="https://www.Youtube.com/"
        target="_blank">
            <TiSocialYoutube className='text-2xl cursor-pointer' />
            </a>
            </li>

       <li>
         <a href="https://www.Telegram.com/"
        target="_blank">
         <FaTelegramPlane className='text-2xl cursor-pointer' />
         </a>
         </li>
       </ul>
       </div>

       <div className='space-y-2'>
       <h1 className='font-bold'>Currently Working on</h1>
       <div className='flex space-x-5'>
       <BiLogoMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2px'/>
       <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2px' />
       <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2px' />
       <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2px' />
       </div>
       </div>
       </div>
       </div>
       <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
       <img src={pic} className='rounded-full md:w-[450px] h-[450]' 
       alt="" />
       </div>
       </div>
    </div>
    <hr />
    </>
  );
}

export default Home;
