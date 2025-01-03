"use client";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import PromoCard from "../components/PromoCard";
import AgeSelector from "../components/AgeSelector";
import Button from "../components/Button";
import ScheduleSelector from "../components/ScheduleSelector";
export default function Robotica() {
  const edades = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const [menuHorario, setMenuHorario] = useState(false);
  const [menuEdad, setMenuEdad] = useState(false);
  const [edad, setEdad] = useState(0);
  const [horario, setHorario] = useState("");

  return (
    <>
      <Header />
      <div className="mx-5">
        <Banner />
        <div className="w-full p-3 bg-[#353535] rounded-lg">
          <PromoCard />
          <Button
            onClick={() => setMenuEdad(true)}
            label={edad === 0 ? "¿Cuál es tu edad?" : `Perfecto ${edad} años!!`}
          />
          {menuEdad && (
            <AgeSelector
              edades={edades}
              setEdad={setEdad}
              closeMenu={() => setMenuEdad(false)}
            />
          )}
          <button
            onClick={() => setMenuHorario(true)}
            className="bg-cyan-200 w-full mt-2 p-2 rounded-md font-bold text-black border-r-4 border-r-cyan-400 border-b-4 border-b-cyan-400"
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
        <Button label="Agenda clase muestra gratis" className="bg-white" />
        <div className="w-6 h-6 sm:bg-black bg-gray-400 rounded-full"></div>
      </div>
    </>
  );
}
