import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="flex hover:-translate-y-6 min-[770px]:w-[30%] hover:shadow-xl mb-5 hover:shadow-white center relative overflow-hidden rounded-lg shadow-lg border border-[#8d5bf2]">
      <a href={link} className="flex flex-col justify-between">
      <img
        src={src}
        alt={title}
        className="w-full"
      />

      <div className="relative p-4 text-center">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      </a>
    </div>
  );
};

export default ProjectCard;
