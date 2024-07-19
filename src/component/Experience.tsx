import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/WebHR.svg"}
              height={30}
              width={30}
              alt={"experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Website /</span> Fullstack
              Developers
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">january 2024</p>
        </div>
        <p className="text-gray-300 md:pt-0 pt-3 ml-10">
          Aplikasi detection Artefak Semedo Tegal
        </p>
        <p className="text-gray-300 pt-5">
          Saya baru-baru ini mengembangkan Aplikasi Deteksi Artefak Semedo
          Tegal, sebuah proyek inovatif yang menggabungkan teknologi mutakhir
          untuk melestarikan dan menganalisis artefak sejarah. Aplikasi ini
          memanfaatkan kekuatan ReactJS untuk front-end yang responsif dan
          interaktif, sementara Flask menyediakan infrastruktur back-end yang
          kuat. Inti dari aplikasi ini menggunakan algoritma Kecerdasan Buatan
          untuk deteksi dan klasifikasi artefak yang akurat. Integrasi ini
          memastikan bahwa aplikasi dapat secara efektif mengidentifikasi dan
          membuat katalog artefak, sehingga meningkatkan akurasi dan efisiensi
          upaya pelestarian sejarah.
          <br /> <br />
          Selain aplikasi web, saya mengimplementasikan versi seluler
          menggunakan Flutter, memastikan kompatibilitas lintas platform dan
          memungkinkan pengguna mengakses aplikasi di berbagai perangkat.
          Adaptasi seluler ini memperluas jangkauan dan kegunaan aplikasi,
          sehingga dapat diakses oleh khalayak yang lebih luas. Proyek ini tidak
          hanya menunjukkan kepandaian teknis saya dalam berbagai kerangka kerja
          dan bahasa, namun juga menunjukkan kemampuan saya menerapkan teknologi
          dengan cara yang bermakna dalam upaya pelestarian budaya. Dengan
          menggabungkan teknologi modern dengan tujuan mulia, saya bertujuan
          untuk berkontribusi terhadap pelestarian warisan budaya melalui solusi
          inovatif dan praktis.
        </p>
        <div className="flex-col flex sm:flex-row ">
          {["ReactJS", "Flask", "AI", "Flutter"].map((skill, index) => (
            <div
              key={index}
              className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
