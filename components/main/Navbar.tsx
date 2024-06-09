import Image from "next/image";
import React from "react";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/profilepc.webp"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin brightness-200 rounded-full"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Portfolio
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 max-md:hidden">
          <div className="flex items-center justify-between w-full h-auto border border-[#b9a3fa] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-200 via-blue-100 to-indigo-200 hover:font-semibold hover:text-lg">
              About me
            </a>
            <a href="#skills" className="cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-200 via-blue-100 to-indigo-200 hover:font-semibold hover:text-lg">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-200 via-blue-100 to-indigo-200 hover:font-semibold hover:text-lg">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-8 text-white text-xl">
          <a href="https://www.linkedin.com/in/vaibhav-mathur-a63940231/">
          <FaLinkedin />
          </a>
          <a href="mailto:mathurvaibhav@gmail.com">
          <SiGmail/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
