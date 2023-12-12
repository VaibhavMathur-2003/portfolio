import {
  Backend_skill,
  Frontend_skill,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'


const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-0"
      style={{ transform: "scale(0.9" }}
    >
          <div className='w-full h-auto flex flex-col items-center justify-center'>
<div
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
        </div>
        <div
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
          Love to use new technologies.
        </div>
        <div
        className='text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
            Never miss a task, deadline or idea
        </div>
    </div>


      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
     
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
