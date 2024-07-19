import About from "../component/About";
import Banner from "../component/Banner";
import Experience from "../component/Experience";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Projects from "../component/Projects";
import ThreeBackground from "../component/ThreeBackground";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <main className="h-full w-full">
      <ThreeBackground />
      <div className="flex flex-col gap-20 relative z-10">
        <Navbar/>
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}