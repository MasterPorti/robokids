"use client";
import { useState } from "react";

export default function VideoButton({ title, color, video }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const colorClass =
    {
      "#26BB9E": "to-green1",
      "#DB5679": "to-cian1",
      "#3988CD": "to-red1",
    }[color] || "to-red1";

  const videoClass =
    {
      robotica: "/videos/robotica-mini.mp4",
      corte: "/videos/corte-mini.mp4",
      impresion: "/videos/3dprinting.mp4",
    }[video] || "/videos/robotica-mini.mp4";

  const thumbnailClass =
    {
      robotica: "/videos/robotica.jpg",
      corte: "/videos/corte.jpg",
      impresion: "/videos/impresion.jpg",
    }[video] || "/videos/robotica.jpg";

  return (
    <div className="relative w-full max-w-52 aspect-[9/16] rounded-lg overflow-hidden">
      {/* Thumbnail */}
      {!isLoaded && (
        <img
          src={thumbnailClass}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {/* Gradient Overlay */}
      <div
        className={`bg-gradient-to-b from-transparent from-10% via-transparent via-60% ${colorClass} absolute top-0 left-0 w-full h-full`}
      >
        <p className="absolute bottom-0 shadow-2xl font-black p-1 w-full z-10">
          <span className="text-sm text-nowrap">{title}</span>
        </p>
      </div>

      {/* Video */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)} // Oculta el thumbnail cuando el video está cargado
      >
        <source src={videoClass} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
