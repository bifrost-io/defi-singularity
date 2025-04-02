"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { pools } from "@/app/explore/data";
import PoolCard from "@/components/pool-card";
import Image from "next/image";


export default function Explore() {

  const [selectedEcosystem, setSelectedEcosystem] = useState<string>("All");

  const filteredPools = pools.filter((pool) => 
    selectedEcosystem === "All" ? true : pool.ecosystem === selectedEcosystem
  );

  return (
    <main className="min-h-screen bg-background pb-8 p-2 md:p-8">
      <div className="flex flex-col gap-8">
        <Button asChild variant="outline" className="rounded-full w-fit">
          <Link href="/">
            <ArrowLeft />
            Back
          </Link>
        </Button>
        <h1 className="text-4xl font-bold">Explore</h1>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={selectedEcosystem === "All" ? "default" : "outline"} 
            className="rounded-full w-fit"
            onClick={() => setSelectedEcosystem("All")}
          >
            All
          </Button>
          <Button 
            variant={selectedEcosystem === "Ethereum" ? "default" : "outline"} 
            className="rounded-full w-fit"
            onClick={() => setSelectedEcosystem("Ethereum")}
          >
            <Image src="/ethereum.svg" alt="Ethereum" width={20} height={20} />
            Ethereum
          </Button>
          <Button 
            variant={selectedEcosystem === "Arbitrum" ? "default" : "outline"} 
            className="rounded-full w-fit"
            onClick={() => setSelectedEcosystem("Arbitrum")}
          >
            <Image src="/arbitrum.svg" alt="Arbitrum" width={20} height={20} />
            Arbitrum
          </Button>
          <Button 
            variant={selectedEcosystem === "Base" ? "default" : "outline"} 
            className="rounded-full w-fit"
            onClick={() => setSelectedEcosystem("Base")}
          >
            <Image src="/base.svg" alt="Base" width={20} height={20} />
            Base
          </Button>
          <Button 
            variant={selectedEcosystem === "BNB Chain" ? "default" : "outline"} 
            className="rounded-full w-fit"
            onClick={() => setSelectedEcosystem("BNB Chain")}
          >
            <Image src="/bnb.svg" alt="BNB Chain" width={20} height={20} />
            BNB Chain
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredPools.map((pool) => (
            <PoolCard key={pool.id} pool={pool} />
          ))}
        </div>
      </div>
    </main>
  );
}