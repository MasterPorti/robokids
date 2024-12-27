export default function VideoButton() {
  return (
    <div className="w-full max-w-52 aspect-[9/16] rounded-lg overflow-hidden">
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
