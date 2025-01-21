"use client";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import PromoCard from "../components/PromoCard";
import AgeSelector from "../components/AgeSelector";
import Button from "../components/Button";
import ScheduleSelector from "../components/ScheduleSelector";

import SucursalSelection from "../components/SucursalSelection";
export default function Robotica() {
  const edades = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const [menuHorario, setMenuHorario] = useState(false);
  const [menuEdad, setMenuEdad] = useState(false);
  const [edad, setEdad] = useState(0);
  const [horario, setHorario] = useState("");
  const [shake, setShake] = useState(false);
  const [shakeEdad, setShakeEdad] = useState(false);
  const [shakeSchedule, setShakeSchedule] = useState(false);
  const [shakeSucursal, setShakeSucursal] = useState(false);
  const [sucursal, setSucursal] = useState("Coacalco");
  const handleCheck = () => {
    // Si el horario está vacío, se activa la animación de error
    if (horario === "") {
      setShakeSchedule(true);
      setTimeout(() => setShakeSchedule(false), 500);
    }

    // Si la edad es 0, se activa la animación de error
    if (edad === 0) {
      setShakeEdad(true);
      setTimeout(() => setShakeEdad(false), 500);
    }

    // Si la edad o el horario están vacíos, se activa la animación de error general
    if (edad === 0 || horario === "") {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      // Separar los componentes del horario (ej. "Sábado, 11 de enero 4-6pm")
      const horarioParts = horario.split(" ");
      const dia = parseInt(horarioParts[1], 10); // Día del mes (11)
      const mes = horarioParts[2].substring(0, 3).toUpperCase(); // Mes abreviado (Enero -> ENE)

      // Extraer la hora de inicio
      const horaInicio = horario.slice(-5).substring(0, 2);

      // Generar el código de reserva
      const codigo = `${edad}${mes[0]}${dia}${mes[1]}${horaInicio}+"C`;
      console.log(codigo);

      window.open(
        `https://wa.me/525561758678?text=Hola%2C%20quiero%20mi%20lugar%20en%20la%20clase%20gratis%20sucursal%20${sucursal}%20y%20aprovechar%20el%20descuento%20exclusivo.%20Mi%20c%C3%B3digo%20es%20${codigo}.🙌`,
        "_blank"
      );

      // Enviar el mensaje de WhatsApp con la información
    }
  };

  return (
    <>
      <Header />
      <div className="mx-5 max-w-3xl lg:mx-auto">
        <Banner icon="corte.svg" />
        <div className="w-full p-3 bg-[#353535] rounded-lg">
          <PromoCard
            title="Crear tu primer corte laser!!"
            description="Echa un vistazo a una clase gratis"
            imagen="/corteFire.png"
          />
          <button
            onClick={() => setMenuEdad(true)}
            className={`bg-cyan-200 w-full mt-2 p-2 rounded-md font-bold text-black border-r-4 border-r-cyan-400 border-b-4 border-b-cyan-400 ${
              shakeEdad ? "animate-shake" : ""
            }`}
          >
            {edad === 0 ? "¿Cuál es tu edad?" : `Perfecto ${edad} años!!`}
          </button>
          {menuEdad && (
            <AgeSelector
              edades={edades}
              setEdad={setEdad}
              closeMenu={() => setMenuEdad(false)}
            />
          )}
          <button
            onClick={() => setMenuHorario(true)}
            className={`bg-cyan-200 w-full mt-2 p-2 rounded-md font-bold text-black border-r-4 border-r-cyan-400 border-b-4 border-b-cyan-400 ${
              shakeSchedule ? "animate-shake" : ""
            }`}
          >
            {horario === "" ? "¿Cuándo te gustaría tomar la clase?" : horario}
          </button>
          {menuHorario && (
            <ScheduleSelector
              setHorario={setHorario}
              horario={horario}
              closeMenu={() => setMenuHorario(false)}
            />
          )}
        </div>
        <p className="text-white/55 text-xs font-thin text-center mt-1">
          La clase muestra es totalmente{" "}
          <span className="text-white">gratis</span>, recibirás un{" "}
          <span className="text-white">descuento permanente</span> en la
          mensualidad y armarás tu primer circuito.
        </p>
        <SucursalSelection
          setShakeSucursal={setShakeSucursal}
          shakeSucursal={shakeSucursal}
          setSucursal={setSucursal}
          sucursal={sucursal}
        />
        <Button
          onClick={handleCheck}
          label="Agenda clase muestra gratis"
          className={`mt-3 ${shake ? "animate-shake" : ""}   ${
            edad === 0 || horario === "" ? "bg-gray-300" : "bg-[#0dc043]"
          }`}
        />
        <iframe
          className="w-full rounded-lg mt-3 aspect-video mx-auto"
          src="https://www.youtube-nocookie.com/embed/ePid0kKtNFo?autoplay=1&mute=1&controls=0&loop=1&playlist=ePid0kKtNFo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
