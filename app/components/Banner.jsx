import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-thin">Clase muestra</h1>
      <Image
        className="object-center object-cover"
        src="/robotica.svg"
        width={300}
        height={300}
        alt="robotica"
      />
      <span className="font-bold text-[1.4rem] underline-offset-2 tracking-wider">
        Descuento permanente
      </span>
    </div>
  );
}
