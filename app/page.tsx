import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-foreground pb-8">
      {/* Hero Section with just the image and text */}
      <div className="h-screen relative flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/hero.svg"
              alt="Cosmic Singularity"
              width={1920}
              height={1080}
              priority
              className="w-screen h-screen object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-foreground to-transparent" />
          </div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight text-primary">DeFi Singularity</h1>
          <Button size="lg" className="p-4 rounded-full mt-4">
            <ArrowRight />
            Explore
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl font-bold text-secondary max-w-sm text-center">Enter a new era of crosschain DeFi</h1>
        <p className="max-w-xs text-lg text-center text-muted-foreground">Trustless and Verifiable interoperability powered by Polkadot</p>
        <Image
          src="/hyperbridge.png"
          alt="DOT"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl font-bold text-secondary max-w-sm text-center">765,000 DOT incentive</h1>
        <p className="max-w-xs text-lg text-center text-muted-foreground">Paid out in vDOT, to liquidity providers on eligible pools</p>
      </div>
    </main>
  );
}
