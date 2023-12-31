"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";


const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      
      <div className="mt-0 sm:w-5/12 sm:h-1/3 w-3/4 h:3/4 flex items-start justify-center brightness-200">
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


      
      <ProjectCard
          
          src="/profilepc.png"
          title="Hi! I am Vaibhav Mathur"
          description="I'm a driven full-stack developer studying Computer Science & Engineering at IIT Goa. Proficient in web technologies, I'm also passionate about Machine Learning and Neural Networks. Committed to merging software development skills with AI for innovative solutions. With diversified expertise ranging from developing dynamic websites to a solid grasp of transformer architectures, I bring a comprehensive understanding of diverse technologies to my pursuits in Computer Science & Engineering."
          link=""
        />
      </div>
    </div>
  );
};

export default Encryption;
