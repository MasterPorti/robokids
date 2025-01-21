import React from "react";

function SucursalSelection({
  setShakeSucursal,
  shakeSucursal,
  setSucursal,
  sucursal,
}) {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-3">
        <p className="text-xl">Sucursal</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
        </svg>
      </div>
      <div className="flex justify-center items-center gap-1 mt-2">
        <div
          className={`cursor-pointer text-center h-10 flex justify-center items-center text-white font-bold px-3 rounded-lg border-2 w-52 border-white ${
            shakeSucursal ? "" : ""
          }`}
          onClick={() => setShakeSucursal(true)}
        >
          <span>Plaza {sucursal}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#FFFFFF"
          >
            <path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z" />
          </svg>
        </div>

        <div
          className={` cursor-pointer absolute bg-[#121212] mt-20 text-center flex w-52  flex-col justify-center items-center text-white font-bold px-3 rounded-lg border-2 border-white ${
            !shakeSucursal ? "hidden" : ""
          }`}
          onClick={() => setShakeSucursal(false)}
        >
          <div
            className="h-10 flex gap-3 justify-center items-center "
            onClick={() => setSucursal("Coacalco")}
          >
            <span className="">Plaza Coacalco</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
          </div>
          <div
            className="h-10 flex gap-3 justify-center items-center"
            onClick={() => setSucursal("Cofradia")}
          >
            <span>Cofradia</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
          </div>
          <div
            className="h-10 flex gap-3 justify-center items-center"
            onClick={() => setSucursal("Periferico")}
          >
            <span>Plaza Periferico</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default SucursalSelection;
