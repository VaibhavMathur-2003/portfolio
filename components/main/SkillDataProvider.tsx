import React from "react";
import Image from "next/image";

interface Props {
  src: string;
}

const SkillDataProvider = ({ src }: Props) => {
  return (
    <div style={{ width: "80px", height: "80px", position: "relative" }}>
      <Image
        src={src}
        alt="skill image"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default SkillDataProvider;
