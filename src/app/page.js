import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero-section/HeroSection";
import TechStackScrollable from "./components/tech-stacks/TechStackScrollable.jsx";
import TechStack from "./components/tech-stacks/TechStack";
import ProjectsSection from "./components/projects/ProjectsSection";
import WhatIBring from "./components/what-i-bring/WhatIBring";
import AboutMeSection from "./components/about-me/AboutMe";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-16 relative pt-30 bg-[#f5f5f5] overflow-x-hidden">
      {/* <Navbar /> */}
      <HeroSection />
      <TechStackScrollable/>
      <ProjectsSection/>
      <TechStack/>
      <WhatIBring/>
      <AboutMeSection/>
      <Footer/>
    </div>
  );
}