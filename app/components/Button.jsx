export default function Button({ label, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-cyan-200 w-full mt-2 p-2 rounded-md font-bold text-black border-r-4 border-r-cyan-400 border-b-4 border-b-cyan-400 ${className}`}
    >
      {label}
    </button>
  );
}
