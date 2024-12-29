import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SchoolButton from "./components/SchoolButton";
import Link from "next/link";
import VideoButton from "./components/VideoButton";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex lg:flex-row lg:items-center flex-col">
        <HeroSection />
        <div className="lg:w-1/2 w-full ">
          <div className="flex justify-center items-center mt-3">
            <p className="font-bold text-xl lg:text-2xl">
              ¿Qué quieres aprender?
            </p>
          </div>
          <div className=" flex md:hidden justify-center items-center mx-5 gap-4 mt-5">
            <VideoButton title="#Robotica" color="#26BB9E" video="robotica" />
            <VideoButton title="#Corte Laser" color="#DB5679" video="corte" />
            <VideoButton
              title="#3DImpresion"
              color="#3988CD"
              video="impresion"
            />
          </div>
          <div className="flex flex-wrap gap-8 my-5 items-center justify-center w-full px-5">
            <SchoolButton
              imageSrc="/RoboticaSchool.svg"
              title="Robótica"
              description="Aprende a crear y programar tus robots"
              gradient="from-[#26BB9E80] to-[#11554880]"
              link={"/robotica"}
            />

            <SchoolButton
              imageSrc="/LaserSchool.svg"
              title="Corte Láser"
              description="Corta y graba con precisión milimétrica."
              gradient="from-[#DB567980] to-[#F12A5F80]"
              link={"/corte-laser"}
            />

            <SchoolButton
              imageSrc="/3dSchool.svg"
              title="Impresión 3D"
              description="Convierte tus diseños en objetos capa por capa"
              gradient="from-[#3988CD80] to-[#295A8580]"
              link={"/corte-laser"}
            />
          </div>
        </div>
      </div>
      <div className="hidden gap-4 lg:flex justify-center items-center mt-3 mb-7">
        <VideoButton title="#Robotica" color="#26BB9E" video="robotica" />
        <VideoButton title="#Corte Laser" color="#DB5679" video="corte" />
        <VideoButton title="#3DImpresion" color="#3988CD" video="impresion" />
      </div>
    </>
  );
}
