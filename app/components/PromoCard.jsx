import Image from "next/image";

export default function PromoCard() {
  return (
    <div className="flex items-center justify-center">
      <span className="flex flex-col font-bold text-white">
        <span className="text-lg">Crear tu primer circuito!!</span>
        <span>Echa un vistazo a una clase gratis.</span>
      </span>
      <Image src="/roboticaFire.png" width={100} height={100} alt="robotica" />
    </div>
  );
}
