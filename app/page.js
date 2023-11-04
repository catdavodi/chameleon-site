import Image from 'next/image'
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import { TypeAnimation } from 'react-type-animation';
import AboutSection from "app/components/AboutSection.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#091536]">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
      <HeroSection />
      <AboutSection />
      </div>
    </main>
  )
}
