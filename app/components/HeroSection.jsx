import Image from "next/image";
import VideoButton from "./VideoButton";

export default function HeroSection() {
  return (
    <div className="mx-5 lg:w-1/2">
      <div className="flex items-center text-3xl font-black text-white xs:text-4xl sm:text-5xl ">
        <p className=" sm:leading-[3.5rem] lg:leading-[3.5rem]">
          Cursos de <span className="text-green1">robótica </span>
          potencia tu <span className="text-yellow1">creatividad</span>,
          mezclando <span className="">tecnología</span>,{" "}
          <span className="text-red1">programación</span> y{" "}
          <span className="text-cian1">robótica</span>.
        </p>
        <div className="hidden min-w-56 md:flex lg:hidden">
          <VideoButton />
        </div>
      </div>
      <button className="bg-yellow1 flex gap-1 justify-center items-center  font-black px-2 py-1 text-black rounded-md mt-3">
        <Image
          className="w-20"
          src="/robokids-black.svg"
          width={150}
          height={100}
          alt="Robokids"
        />
        <span>en tu escuela </span>
      </button>
      <div className="hidden  md:flex justify-center  mt-5 font-inter font-semibold text-gray-400 xs:text-lg lg:text-xl xl:max-w-xl">
        <p className="text-center">
          Si te emociona imaginar tus sueños, ¡imagina lograrlos!
        </p>
      </div>
    </div>
  );
}
