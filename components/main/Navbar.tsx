"use client"
import React, { useState } from "react";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
      
      <div className="w-full flex flex-row items-center justify-between m-auto px-4 py-2 md:px-10 md:py-4">
      <button className="ml-4 text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        <a href="#about-me" className="flex flex-row items-center" aria-label="aboutMe">
          <span className="font-bold text-gray-300">Portfolio</span>
        </a>

        <div className="hidden w-1/2 md:flex items-center justify-between w-auto border border-[#b9a3fa] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200">
          <Link href="/" className="mx-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-200 via-blue-100 to-indigo-200 hover:font-semibold" aria-label="aboutMe">
            About me
          </Link>
          <Link href="/skills" className="mx-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-200 via-blue-100 to-indigo-200 hover:font-semibold" aria-label="Skills">
            Skills
          </Link>
          <Link href="/projects" className="mx-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-200 via-blue-100 to-indigo-200 hover:font-semibold" aria-label="Projects">
            Projects
          </Link>
        </div>

        <div className="flex items-center">
          <div className="flex flex-row gap-4 text-white text-xl">
            <a href="https://www.linkedin.com/in/vaibhav-mathur-a63940231/" aria-label="Linkedin">
              <FaLinkedin />
            </a>
            <a href="mailto:mathurvaibhav010@gmail.com" aria-label="Mail">
              <SiGmail />
            </a>
          </div>
          
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#03001417] backdrop-blur-md">
          <Link href="/" className="block py-2 px-4 text-gray-200 hover:bg-[#0300145e]" aria-label="aboutMe">
            About me
          </Link>
          <Link href="/skills" className="block py-2 px-4 text-gray-200 hover:bg-[#0300145e]" aria-label="Skills">
            Skills
          </Link>
          <Link href="/projects" className="block py-2 px-4 text-gray-200 hover:bg-[#0300145e]" aria-label="Projects">
            Projects
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;