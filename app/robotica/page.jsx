import Image from "next/image";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
export default function Robotica() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <div className="flex justify-center items-center mt-3 ">
        <p className="font-bold text-xl">¿Qué quieres aprender?</p>
      </div>
      <div className="flex flex-wrap gap-8 mt-5 items-center justify-center w-full mx-auto">
        HOLA
      </div>
    </div>
  );
}
