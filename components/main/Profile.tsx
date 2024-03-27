"use client";
import React from "react";
import ProjectCard from "./ProjectCard";


const Profile = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-1/4">
      
      <div className="mt-0 sm:w-5/12 sm:h-1/4 w-3/4 h:1/4 flex items-start justify-center brightness-150">
      {/* <div className="w-full h-1/2 absolute">
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
    </div> */}


      
      <ProjectCard
          
          src="/profilepc.webp"
          title="Hi! I am Vaibhav Mathur"
          description="I'm a driven full-stack developer studying Computer Science & Engineering at IIT Goa. Proficient in web technologies, I'm also passionate about Machine Learning and Neural Networks. Committed to merging software development skills with AI for innovative solutions. With diversified expertise ranging from developing dynamic websites to a solid grasp of transformer architectures, I bring a comprehensive understanding of diverse technologies to my pursuits in Computer Science & Engineering."
          link=""
        />
      </div>
    </div>
  );
};

export default Profile;
