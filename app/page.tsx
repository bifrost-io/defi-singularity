import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0d1d]">
      {/* Hero Section with just the image and text */}
      <div className="h-screen relative flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Image
            src="/hero.svg"
          alt="Cosmic Singularity"
          width={1920}
          height={1080}
          priority
          className="w-screen h-screen object-cover"
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight text-primary">DeFi Singularity</h1>
        <Button size="lg" className="p-4 rounded-full mt-4">
          <ArrowDown className="w-6 h-6" />
          Explore
        </Button>
      </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-primary">Incentives</h1>
      </div>
    </main>
  );
}
