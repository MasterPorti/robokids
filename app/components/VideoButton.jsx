export default function VideoButton({
  title = "#Robótica",
  color = "#DB5679",
}) {
  return (
    <div className="relative w-full max-w-52 aspect-[9/16] rounded-lg overflow-hidden">
      <div
        className={`bg-gradient-to-b from-transparent from-10% via-transparent via-60% to-[${color}] to-99% absolute top-0 left-0 w-full h-full`}
      >
        <p className="absolute bottom-0 shadow-2xl font-black p-1 w-full z-10">
          <span className="text-xl">{title}</span>
        </p>
      </div>
      <video
        className="w-full h-full object-cover"
        src="/mini-1.mp4"
        autoPlay
        muted
        loop
      />
    </div>
  );
}
