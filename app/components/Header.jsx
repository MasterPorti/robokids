"use client";
import { useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-3xl flex justify-between font-Inter my-6 mx-5">
      <Image
        src="/LogoWhite.svg"
        width={150}
        height={100}
        alt="Picture of the author"
      />
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 rounded-md bg-[#0dc043] px-2 py-1">
          <Image
            src="/whatsapp.svg"
            width={20}
            height={20}
            alt="whatsapp Icon"
          />
          <span className="text-black text-xs font-black hidden min-[385px]:block">
            Whatsapp
          </span>
        </button>

        <div className="hidden md:flex gap-8 text-base font-semibold">
          <button className="opacity-80 hover:opacity-100">Cursos</button>
          <button className="opacity-80 hover:opacity-100">Sucursales</button>
          <button className="opacity-80 hover:opacity-100">ShowRoom</button>
        </div>
        <button
          className={`${
            isMenuOpen ? "bg-slate-400 opacity-40" : "opacity-100"
          } md:hidden p-2 rounded-full`}
          onClick={handleMenuToggle}
        >
          <RxHamburgerMenu color="white" />
        </button>

        {isMenuOpen && (
          <div className="w-40 border-[2px] border-gray-500 rounded-md bg-black absolute top-[70px] right-5 z-10 ">
            <div className="flex my-3 rounded-md text-lg font-bold items-start px-4 flex-col gap-3">
              <button className="opacity-80 hover:opacity-100">Cursos</button>
              <button className="opacity-80 hover:opacity-100">
                Sucursales
              </button>
              <button className="opacity-80 hover:opacity-100">ShowRoom</button>
            </div>
          </div>
        )}
        {isMenuOpen && (
          <div
            className="w-screen h-full  opacity-10 absolute top-5 right-5"
            onClick={handleMenuToggle}
          ></div>
        )}
      </div>
    </div>
  );
}
