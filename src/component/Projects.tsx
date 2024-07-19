import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  const projectsData = [
    {
      title: "Aplikasi Detection Artefak Semedo Tegal",
      description: "Mengembangkan proyek inovatif menggunakan ReactJS, Flask, dan AI untuk deteksi dan klasifikasi artefak, dengan versi mobile yang dibangun menggunakan Flutter.",
      imageUrl: "/image.png",
      linkUrl: "https://semedo012.vercel.app/",
    },
    {
      title: "Website Acara Kampus",
      description: "Mengembangkan website acara kampus menggunakan ReactJS dan Firebase.",
      imageUrl: "/dektopInvofest.png",
      linkUrl: "https://invofest2023.vercel.app/",
    },
    {
      title: "Website Desa Selapura",
      description: "Mengembangkan website desa menggunakan PHP native.",
      imageUrl: "/selapura.26f0cdcd.png",
      linkUrl: "",
    },
    // Tambahkan proyek lainnya sesuai kebutuhan
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px] mb-8">
        PROYEK
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-12 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        JELAJAHI SEKARANG
      </p>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image src={project.imageUrl} alt={project.title} width={300} height={200} className="w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.linkUrl ? (
                  <Link href={project.linkUrl} legacyBehavior>
                    <a className="inline-block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors duration-300">
                      Lihat Proyek
                    </a>
                  </Link>
                ) : (
                  <p className="text-gray-500">Link tidak tersedia</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
