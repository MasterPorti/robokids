export default function AgeSelector({ edades, setEdad, closeMenu }) {
  return (
    <div className="px-5 w-full h-full flex-col gap-3 backdrop-blur-sm bg-black/20 absolute top-0 left-0 flex justify-center items-center">
      <div className="relative w-full flex items-center justify-center">
        <span className="z-10 font-bold text-xl">Presiona tu edad</span>
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
      <div className="flex flex-wrap justify-center max-w-96">
        {edades.map((e) => (
          <button
            key={e}
            onClick={() => {
              setEdad(e);
              closeMenu();
            }}
            className="bg-cyan-200 w-20 h-10 m-1 p-2 rounded-md font-bold text-black border-r-4 border-r-cyan-400 border-b-4 border-b-cyan-400"
          >
            {e}
          </button>
        ))}
        <button
          onClick={() => {
            closeMenu();
          }}
          className="bg-cyan-200 w-20 h-10 m-1 p-2 rounded-md font-bold text-black border-r-4 border-r-cyan-400 border-b-4 border-b-cyan-400"
        >
          Atras
        </button>
      </div>
    </div>
  );
}
