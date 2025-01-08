"use client";
import { useState, useEffect, useRef } from "react";

export default function VideoButton({ title, color, video }) {
  const [isVisible, setIsVisible] = useState(false); // Controla si el video está visible
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Controla si el video está cargado
  const videoRef = useRef(null);

  // Clases de color según el color recibido
  const colorClass =
    {
      "#26BB9E": "to-green1",
      "#DB5679": "to-cian1",
      "#3988CD": "to-red1",
    }[color] || "to-red1";

  // Ruta del video según la propiedad `video`
  const videoPath =
    {
      robotica: "/videos/robotica-mini.mp4",
      corte: "/videos/corte-mini.mp4",
      impresion: "/videos/3dprinting.mp4",
    }[video] || "/videos/robotica-mini.mp4";

  // Ruta de la miniatura
  const thumbnailPath = `/videos/${video}.jpg`;

  // IntersectionObserver para detectar si el elemento es visible en la pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Solo activa la visibilidad si está en la pantalla
        } else {
          setIsVisible(false); // Desactiva cuando no está visible
        }
      },
      { threshold: 0.5 } // Opcional: Se activa al estar al menos 50% visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full max-w-52 aspect-[9/16] rounded-lg overflow-hidden"
      ref={videoRef}
    >
      <div
        className={`bg-gradient-to-b from-transparent from-10% via-transparent via-60% ${colorClass} absolute top-0 left-0 w-full h-full`}
      >
        <p className="absolute bottom-0 shadow-2xl font-black p-1 w-full z-10">
          <span className="text-sm text-nowrap">{title}</span>
        </p>
      </div>

      {/* Mostrar miniatura o video dependiendo de si es visible y si está cargado */}
      {isVisible && isVideoLoaded ? (
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          preload="metadata"
          onCanPlay={() => setIsVideoLoaded(true)} // Marca el video como cargado cuando está listo para reproducirse
          onError={() => console.error("Error loading video:", videoPath)}
        >
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          className="w-full h-full object-cover"
          src={thumbnailPath}
          alt={`${title} thumbnail`}
        />
      )}
    </div>
  );
}
