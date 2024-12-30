import Image from "next/image";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
export default function Robotica() {
  return (
    <>
      <Header />
      <div className="flex justify-between">
        <div></div>
        <div className="bg-[#E14141] relative z-10 text-[#121212] font-black rounded-md mb-[-10px] p-1">
          GRATIS
        </div>
      </div>
      <div className="mx-5 h-28">
        <div className="w-full relative flex bg-gradient-to-t from-[#bd193d] to-[#5d035e] h-36 rounded-lg px-3 gap-3">
          <div className=" flex-col flex items-center justify-center">
            <span>Clase muestra</span>
            <Image
              src="/robotica.svg"
              width={150}
              height={100}
              alt="Picture of the author"
            />
            <span className="font-bold text-xs text-nowrap">
              + DESCUENTO PERMANENTE
            </span>
          </div>
          <div className="flex flex-col mt-5 items-center gap-3 w-1/2">
            <button className="flex items-center rounded-md w-full px-2 justify-between bg-[#FD9507] ">
              <span className="text-wrap font-bold text-center w-full ">
                Escoje el dia
              </span>
              <svg
                width="20"
                height="11"
                viewBox="0 0 20 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.8875 2.6625C0.397348 2.17235 0.397346 1.37765 0.887498 0.8875C1.37765 0.397347 2.17235 0.397347 2.6625 0.8875L8.58578 6.81079C9.36683 7.59183 10.6332 7.59184 11.4142 6.81079L17.3375 0.887501C17.8277 0.397348 18.6223 0.397347 19.1125 0.8875C19.6027 1.37765 19.6027 2.17235 19.1125 2.6625L11.4142 10.3608C10.6332 11.1418 9.36683 11.1418 8.58579 10.3608L0.8875 2.6625Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="flex items-center rounded-md w-full px-2 justify-between bg-[#FD9507] ">
              <span className="text-wrap font-bold text-center w-full ">
                Tu edad es
              </span>
              <svg
                width="20"
                height="11"
                viewBox="0 0 20 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.8875 2.6625C0.397348 2.17235 0.397346 1.37765 0.887498 0.8875C1.37765 0.397347 2.17235 0.397347 2.6625 0.8875L8.58578 6.81079C9.36683 7.59183 10.6332 7.59184 11.4142 6.81079L17.3375 0.887501C17.8277 0.397348 18.6223 0.397347 19.1125 0.8875C19.6027 1.37765 19.6027 2.17235 19.1125 2.6625L11.4142 10.3608C10.6332 11.1418 9.36683 11.1418 8.58579 10.3608L0.8875 2.6625Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <Image
            className="absolute bottom-0 right-0"
            src="/robot.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
}
