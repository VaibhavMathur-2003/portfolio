import React, { Suspense } from "react";
import { RxGithubLogo } from "react-icons/rx";

import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Profile = () => {
  return (
    <div
      id="about-me"
      className="flex items-center justify-center min-h-screen bg-black text-white overflow-hidden"
    >
      <div className="text-center z-20 ">
      <h1 className="text-5xl font-mono md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-down">
      Hello; <br/> I&apos;m
          <span className="text-transparent font-sans bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600">
            &nbsp;Vaibhav.
          </span>
        </h1>

        <p className="text-2xl font-serif tracking-wide md:text-3xl max-w-xl mb-8">
          I&apos;m a software developer, specializing in{" "}
          <span className="italic">Scalable Web Development</span>{" "}
          and{" "}
          <span className="italic">
            Machine Learning in Finance
          </span>
          .
        </p>
       
        <div className="mt-8 space-x-4">
            <a href="https://drive.google.com/drive/folders/1sucW3IVji84K4OPK9nlTlGznj13_lrNH?usp=drive_link" target="_blank" className="relative inline-block text-lg group" aria-label="resume">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-2 py-1 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Resume</span>
              </span>
              
            </a>
            <Link prefetch={false} href={"/projects"} className="relative inline-block text-lg group" aria-label="resume">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-2 py-1 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Projects</span>
              </span>
              
            </Link>
        </div>
        
        <div className=" mt-5 h-auto flex  items-center justify-between">
          <a href="mailto:mathurvaibhav010@gmail.com" aria-label="mail">
            <p className="flex flex-row items-center my-[20px] cursor-pointer">
              <SiGmail />
              <span className="text-[20px] ml-[6px]">Gmail</span>
            </p>
          </a>
          <a href="https://github.com/VaibhavMathur-2003" aria-label="github">
            <p className="flex flex-row items-center my-[20px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[20px] ml-[6px]">Github</span>
            </p>
          </a>
          <a href="https://www.linkedin.com/in/vaibhav-mathur-a63940231/" aria-label="linkedin">
            <p className="flex flex-row items-center my-[20px] cursor-pointer">
              <FaLinkedin />
              <span className="text-[20px] ml-[6px]">Linkedin</span>
            </p>
          </a>
        </div>
      </div>
      <div className="w-full h-screen absolute">
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          <Suspense fallback={<div>Loading...</div>}>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            preload="auto"
            playsInline
            loop
            muted
            autoPlay
            src="/profile.webm"
          />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Profile;
