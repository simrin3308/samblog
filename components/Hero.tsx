import Image from "next/image";
import React from "react";
import heroImg from "../public/Images/Image.png";

const Hero = () => {
  return (
    <header className="bg-red-400 relative">
      <div>
        <Image src={heroImg} width={1200} height={600} alt="Image" />
      </div>
      <div className="absolute left-16 -bottom-16 shadow-2xl bg-white p-10 rounded-md h-[300px] w-[600px]">
        <div className="bg-blue-500 inline-block px-3 py-1 rounded-xl text-white">
          Technology
        </div>
        <div>
          <p className="text-[36px]">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </p>

          <div className="mt-3 text-xl flex justify-between font-thin">
            <div>Jason Francisco </div>
            <div>August 20, 2022</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
