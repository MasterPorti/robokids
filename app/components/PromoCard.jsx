import Image from "next/image";

export default function PromoCard({ title, description, imagen }) {
  return (
    <div className="flex items-center justify-center">
      <span className="flex flex-col font-bold text-white">
        <span className="text-lg">{title}</span>
        <span>{description}</span>
      </span>
      <Image src={imagen} width={100} height={100} alt="robotica" />
    </div>
  );
}
