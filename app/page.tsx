import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import ByPolkadot from "@/components/by-polkadot";


export default function Home() {
  return (
    <main className="flex flex-col gap-24 min-h-screen bg-background pb-16">
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
          </div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-secondary">
            DeFi Singularity
          </h1>
          <Button
            variant="secondary"
            asChild
            size="lg"
            className="p-4 rounded-full mt-4"
          >
            <Link href="/explore">
              <ArrowRight />
              Explore
            </Link>
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center px-2 md:px-8">
        <h1 className="text-4xl font-bold text-primary max-w-sm text-center">
          Enter a new era of crosschain DeFi
        </h1>
        <p className="max-w-xs text-lg text-center text-muted-foreground">
          Trustless and Verifiable interoperability powered by Polkadot
        </p>
        <Image src="/hyperbridge.png" alt="DOT" width={700} height={700} />
      </div>
      <div className="flex flex-col gap-4 items-center justify-cente px-2 md:px-8">
        <h1 className="text-4xl font-bold text-primary max-w-sm text-center">
          765,000 DOT incentive
        </h1>
        <p className="max-w-xs text-lg text-center text-muted-foreground">
          Paid out in vDOT, to liquidity providers on eligible pools
        </p>
        <Image src="/incentive.svg" alt="DOT" width={600} height={600} />
      </div>
      <div className="flex flex-col gap-4 px-4 md:px-8">
        <p className="text-muted-foreground">On the event horizon...</p>
        <h1 className="text-4xl font-bold text-primary">Singularity</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2 border border-muted rounded-lg p-4">
            <h2 className="text-lg font-bold">Unified</h2>
            <p className="text-muted-foreground">5 ecosystems, 6 protocols</p>
            <div className="flex flex-row gap-2 items-center justify-center my-4">
              <Image
                src="/unified.svg"
                alt="Unified"
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 border border-muted rounded-lg p-4">
            <h2 className="text-lg font-bold">Liquidity mining</h2>
            <p className="text-muted-foreground">
              Provide liquidity and earn rewards
            </p>
            <div className="flex flex-row gap-2 items-center justify-center my-4">
              <Image
                src="/liquidity.svg"
                alt="Liquidity"
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-row gap-8 border border-muted rounded-lg p-4 w-full">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold">Yield bearing rewards</h2>
                <p className="text-muted-foreground text-sm">
                Rewards are issued as{" "}<Link href="https://bifrost.io" className="text-primary font-semibold inline-flex items-center">Bifrost LST <ExternalLink className="w-4 h-4 ml-1" /></Link>
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center my-4">
                <Image
                  src="/bnc.svg"
                  alt="Bifrost logo"
                  width={70}
                  height={70}
                />
              </div>
            </div>
            <div className="flex flex-row gap-8 border border-muted rounded-lg p-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold">Verifiable security</h2>
                <p className="text-muted-foreground text-sm">
                  Assets are bridged by{" "}
                  <Link href="https://hyperbridge.network" className="text-primary font-semibold inline-flex items-center">
                    Hyperbridge <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center my-4">
                <Image
                  src="/hyperbridge.svg"
                  alt="Hyperbridge"
                  width={75}
                  height={75}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center px-2 md:px-8 h-[280px]">
        {/* <h1 className="text-lg md:text-4xl font-bold text-primary">
          Powered by 
        </h1>
        <div className="flex flex-row items-center justify-center h-[100px]">
          <Image src="/polkadot-full.svg" alt="Polkadot" width={200} height={200} />
        </div> */}
        <ByPolkadot />
      </div>
    </main>
  );
}
