"use client";

import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  return <Image src={src} width={width} height={height} alt="skill image" />;
};

export default SkillDataProvider;
