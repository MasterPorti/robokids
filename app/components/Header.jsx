"use client";
import { useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(true);
  };

  return (
    <div className="text-3xl flex justify-between font-Inter my-6 mx-5">
      <Image
        src="/LogoWhite.svg"
        width={150}
        height={100}
        alt="Picture of the author"
      />
      <div className="hidden md:flex gap-8 text-base font-semibold">
        <button className="opacity-80 hover:opacity-100">Cursos</button>
        <button className="opacity-80 hover:opacity-100">Sucursales</button>
        <button className="opacity-80 hover:opacity-100">ShowRoom</button>
        <button className="opacity-80 hover:opacity-100">Whatsapp</button>
      </div>
      <button className="md:hidden" onClick={handleMenuToggle}>
        <RxHamburgerMenu />
      </button>
    </div>
  );
}
