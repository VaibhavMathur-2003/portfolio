import React, { Suspense } from "react";
import { RxGithubLogo } from "react-icons/rx";

import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Profile = () => {
  return (
    <div
      id="about-me"
      className="flex items-center justify-center min-h-screen bg-black text-white"
    >
      <div className="text-center z-20 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold opacity-100 brightness-150">
          Hi, I&apos;m 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600">
          &nbsp;Vaibhav
          </span>
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
          I&apos;m a Developer & SaaS Enthusiast.
        </h2>
        <p className="text-white text-xl mt-4 max-w-xl mx-auto">
          I&apos;m a B.Tech undergrad in Computer Science who loves diving into the
          world of technology! With industry-level experience in full stack web
          development, I enjoy creating sleek, efficient web applications from
          scratch. But that&apos;s not all—I also have a passion for data science and
          machine learning specially in the field of finance.🚀✨
        </p>
        <div className="mt-8 space-x-4">
            <a href="https://drive.google.com/file/d/1U2et6QWx0MtH67rHL9u4Wkf1n9ovq4kE/view?usp=drive_link" className="relative inline-block text-lg group" aria-label="resume">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-2 py-1 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">My Resume</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
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
