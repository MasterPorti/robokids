import Image from "next/image";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";
import VideoButton from "./VideoButton";

export default function SchoolButton({
  imageSrc,
  title,
  description,
  gradient,
  link,
}) {
  return (
    <div>
      <Link
        href={link}
        className={` max-w-96 h-28 w-full justify-between flex items-center  bg-gradient-to-r ${gradient} text-white font-bold py-3 rounded-lg`}
      >
        <Image
          className="mx-7"
          src={imageSrc}
          width={50}
          height={50}
          alt={title}
        />
        <div>
          <p className="text-3xl text-center">{title}</p>
          <p className="text-sm opacity-80 text-center">{description}</p>
        </div>
        <RxArrowRight className="min-w-12 ml-3" size={50} />
      </Link>
    </div>
  );
}
