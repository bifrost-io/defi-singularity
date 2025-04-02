import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 min-h-screen bg-background px-2 md:px-8 pb-8">
      {/* Hero Section with just the image and text */}
      <div className="h-screen relative flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative">
            <Image
              src="/hero.svg"
              alt="Cosmic Singularity"
              width={600}
              height={600}
              priority
              className="w-screen h-screen object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight text-secondary">DeFi Singularity</h1>
          <Button variant="secondary" asChild size="lg" className="p-4 rounded-full mt-4">
            <Link href="/explore">
              <ArrowRight />
              Explore
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl font-bold text-primary max-w-sm text-center">Enter a new era of crosschain DeFi</h1>
        <p className="max-w-xs text-lg text-center text-muted-foreground">Trustless and Verifiable interoperability powered by Polkadot</p>
        <Image
          src="/hyperbridge.png"
          alt="DOT"
          width={700}
          height={700}
        />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl font-bold text-primary max-w-sm text-center">765,000 DOT incentive</h1>
        <p className="max-w-xs text-lg text-center text-muted-foreground">Paid out in vDOT, to liquidity providers on eligible pools</p>
        <Image
          src="/dot.svg"
          alt="DOT"
          width={600}
          height={600}
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-muted-foreground">On the event horizon...</p>
        <h1 className="text-4xl font-bold text-primary">Singularity</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2 border border-muted rounded-lg p-4">
            <h2 className="text-lg font-bold">Unified</h2>
            <p className="text-muted-foreground">5 ecosystems, 6 protocols</p>
          </div>
          <div className="flex flex-col gap-2 border border-muted rounded-lg p-4">
            <h2 className="text-lg font-bold">Liquidity mining</h2>
            <p className="text-muted-foreground">Provide liquidity and earn rewards</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col gap-2 border border-muted rounded-lg p-4">
              <h2 className="text-lg font-bold">Yield bearing rewards</h2>
              <p className="text-muted-foreground">Rewards are boosted by being an LST</p>
            </div>
            <div className="flex flex-col gap-2 border border-muted rounded-lg p-4">
              <h2 className="text-lg font-bold">Verifiable security</h2>
              <p className="text-muted-foreground">Premium blue chip asset backed by Polkadot</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
