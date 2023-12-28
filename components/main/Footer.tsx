import React from "react";
import {
  RxGithubLogo,
} from "react-icons/rx";

import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg pt-40">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Connect With Me</div>
                    <a href="mailto:mathurvaibhav@gmail.com">
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <SiGmail />
                            <span className="text-[15px] ml-[6px]">Gmail</span>
                            
                    </p>
                    </a>
                    <a href="https://github.com/VaibhavMathur-2003">

                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                        
                    </p>
                        </a>
                        <a href="https://www.linkedin.com/in/vaibhav-mathur-a63940231/">
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaLinkedin />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>   
                         
                    </p>
                        </a>                        
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer