"use client";
import React from "react";

// Función para calcular las próximas fechas
function getUpcomingWeekends() {
  const now = new Date();
  const weekends = [];
  while (weekends.length < 6) {
    const day = now.getDay();
    if (day === 6 || day === 0) {
      // Es sábado o domingo
      const time = day === 6 ? "4-6pm" : "3-5pm";
      const dateStr = now.toLocaleDateString("es-MX", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });
      weekends.push(
        `${dateStr.charAt(0).toUpperCase() + dateStr.slice(1)} ${time}`
      );
    }
    now.setDate(now.getDate() + 1); // Avanzar al siguiente día
  }
  return weekends;
}

const ScheduleSelector = ({ closeMenu, setHorario, horario }) => {
  const weekends = getUpcomingWeekends();

  return (
    <div className="px-5 w-full h-full flex-col gap-3 backdrop-blur-sm bg-black/20 absolute top-0 left-0 flex justify-center items-center">
      <div className="relative w-full flex items-center mb-2 justify-center">
        <span className="z-10 font-bold text-xl">Escoje el horario</span>
        <svg
          className="absolute w-full object-contain"
          width="365"
          height="42"
          viewBox="0 0 365 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M336 0H32.5V41.5H336V0Z" fill="#6E1BAD" />
          <path d="M336 0V41.5H364.5L349 25L364.5 14L336 0Z" fill="#441369" />
          <path d="M32.5 41.5V0L0 14L15.5 25L0 41.5H32.5Z" fill="#441369" />
        </svg>
      </div>
      <div className="flex flex-col items-center gap-2">
        {weekends.map((date, index) => (
          <button
            key={index}
            onClick={() => {
              setHorario(date);
              closeMenu();
            }}
            className="bg-cyan-200 w-64 p-2 rounded-md font-bold text-black border-r-4 border-r-cyan-400 border-b-4 border-b-cyan-400"
          >
            {date}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScheduleSelector;
