"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-[100px] z-[20]">
      <div className="flex flex-col justify-center items-center text-justify mr-32">
        <div className="flex flex-col gap-6 cursor-pointer animate-bounce tracking-tighter text-5xl font-semibold text-white max-w-[600px] w-auto h-auto text-center">
          Mohamad Khadik
        </div>
        <div className="flex justify-center mt-10">
          <p className="text-2xl font-medium tracking-tighter text-gray-300 max-w-[600px] text-center">
            web development &{" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Mobile development
            </span>
          </p>
        </div>
        <p className="text-md text-gray-200 my-5 max-w-[600px] text-justify">
          Passionate Software Engineer with a focus on ReactJs development,
          dedicated to creating elegant and user-friendly mobile applications.
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:mohamadkhadik7@gmail.com")}
            className="z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent"
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          priority
          src="/89627918.jpg"
          height={250}
          width={250}
          alt="Mohamad Khadik"
          className="rounded-full" // Menambahkan kelas untuk membuat gambar lingkaran
        />
      </div>
    </div>
  );
};

export default Banner;
