import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          Sebagai seorang pengembang full-stack yang penuh semangat, saya
          memiliki pengalaman dalam mengembangkan aplikasi web yang responsif
          dan inovatif. Di sisi frontend, saya biasanya menggunakan ReactJS
          untuk menciptakan antarmuka yang menarik dan interaktif, sementara di
          sisi backend, saya memanfaatkan Express.js untuk membangun API yang
          efisien dan handal. Saya selalu berusaha untuk memadukan logika dan
          kreativitas dalam setiap proyek yang saya kerjakan, dan terus mencari
          tantangan baru untuk meningkatkan keterampilan saya dalam pengembangan
          perangkat lunak.
        </p>
      </div>
    </section>
  );
};

export default About;
