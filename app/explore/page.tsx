"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { pools } from "@/app/explore/data";
import PoolCard from "@/components/pool-card";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { MERKL_API_URL, MERKL_API_URL2 } from "@/lib/constants";
import { Skeleton } from "@/components/ui/skeleton";


// Type definition for Merkl API response
interface MerklPoolData {
  chainId: number;
  tvl: number;
  apr: number;
  identifier: string;
  name: string;
  status: string;
  depositUrl: string;
  dailyRewards: number;
}

async function getMerklData(): Promise<MerklPoolData[]> {
  const [response, response2] = await Promise.all([
    fetch(MERKL_API_URL),
    fetch(MERKL_API_URL2)
  ]);
  const data = await response.json();
  const data2 = await response2.json();
  return [...data, ...data2];
}

// Map chain IDs to ecosystem names
// const chainIdToEcosystem: Record<number, string> = {
//   1: "Ethereum",
//   8453: "Base",
//   42161: "Arbitrum",
//   56: "BNB Chain",
// };

export default function Explore() {
  const {
    data: merklData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["merkl-data"],
    queryFn: getMerklData,
  });

  const [selectedEcosystem, setSelectedEcosystem] = useState<string>("All");

  // Merge pools with Merkl data to override APR and TVL
  const poolsWithRealTimeData = useMemo(() => {
    if (!merklData || !Array.isArray(merklData)) {
      return pools;
    }

    return pools.map((pool) => {

      // Find matching Merkl data by depositUrl
      const merklPool = merklData.find((merklItem: MerklPoolData) => {
        return merklItem.depositUrl === pool.poolUrl;
      });

      if (merklPool) {
        return {
          ...pool,
          apr: Math.round(merklPool.apr).toLocaleString(),
          tvl: merklPool.tvl,
          dailyRewards: merklPool.dailyRewards,
        };
      }

      return pool;
    });
  }, [merklData]);

  const filteredPools = poolsWithRealTimeData.filter((pool) =>
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
        {isError && (
          <div className="col-span-3 bg-red-500 text-white p-4">
            Error: {error.message}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {isPending ? (
            Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} className="w-full h-[410px]" />
            ))
          ) : (
            filteredPools.map((pool) => <PoolCard key={pool.id} pool={pool} />)
          )}
        </div>
      </div>
    </main>
  );
}
