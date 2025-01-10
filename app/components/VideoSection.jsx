import Link from "next/link";
import VideoButton from "./VideoButton";

export default function VideoSection() {
  return (
    <>
      <Link href="/robotica">
        <VideoButton title="#Robotica" color="#26BB9E" video="robotica" />
      </Link>
      <Link href="/corte">
        <VideoButton title="#CorteLaser" color="#DB5679" video="corte" />
      </Link>
      <Link href="/3d">
        <VideoButton title="#Impresion" color="#3988CD" video="impresion" />
      </Link>
    </>
  );
}
