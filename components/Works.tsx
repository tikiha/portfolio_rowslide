import React from "react";
import Image from "next/image";

const Works = ({ title, src, paragraph, button, ps, classNmae = "" }) => {
  return (
    <div className="flex-shrink-0 h-full w-1/3 relative">
      <Image
        src={src}
        alt={`${title} Pic`}
        fill
        priority
        className="-z-20 h-full object-cover"
      />
      <div className="bg-dark/20 h-full absolute w-full -z-10" />
      <div className="h-full flex flex-col items-center justify-center text-light p-5 px-12">
        <h1 className="text-4xl font-semibold mb-10">{title}</h1>
        <p className="mb-10 leading-loose">{paragraph}</p>
        <button className="mb-10 bg-light p-3 rounded-xl text-dark">
          {button}
        </button>
        <p className="bottom-5 absolute mx-10 leading-loose">{`(${ps})`}</p>
      </div>
    </div>
  );
};

export default Works;
