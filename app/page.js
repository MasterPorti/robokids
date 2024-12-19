import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <div className="flex-grow mx-6 bg-slate-600"></div>
    </div>
  );
}
