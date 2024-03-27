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
    <div className="hover:-translate-y-6 hover:shadow-xl hover:shadow-white center relative overflow-hidden rounded-lg shadow-lg border border-[#8d5bf2]">
      <a href={link}>
      <img
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
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
