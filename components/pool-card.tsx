import { Pool } from "@/app/explore/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { formatAccountingNumber, formatTimeline } from "@/lib/utils";

export default function PoolCard({ pool }: { pool: Pool }) {
  return (
    <div className="flex flex-col gap-4 border border-muted rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10">
      <div className="flex flex-wrap gap-2 justify-between border-b border-muted p-4 bg-secondary">
        <div className="flex flex-row gap-1 items-center">
          <Image
            src={pool.baseAssetLogo}
            alt={pool.baseAsset}
            width={24}
            height={24}
          />
          <h1 className="text-xl font-bold">{pool.baseAsset}</h1>
          <h1 className="text-xl font-bold">/</h1>
          <Image
            src={pool.quoteAssetLogo}
            alt={pool.quoteAsset}
            width={24}
            height={24}
          />
          <h1 className="text-xl font-bold">{pool.quoteAsset}</h1>
          <p className="ml-1 border border-muted-foreground bg-muted-foreground/20 rounded-md py-1 px-2 text-sm text-muted-foreground self-end">
            {pool.fee}
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-2xl text-muted-foreground">APR</p>
          <h1 className="text-2xl font-bold text-green-400">{pool.apr}%</h1>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-4">
        <p className="text-sm text-muted-foreground">Deployed on</p>
        <div className="flex flex-col md:flex-wrap lg:flex-row gap-2">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src={pool.protocolLogo}
              alt={pool.protocol}
              width={20}
              height={20}
            />
            <h1 className="text-sm">{pool.protocol}</h1>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <p className="text-muted-foreground">on</p>
            <Image
              src={pool.ecosystemLogo}
              alt={pool.ecosystem}
              width={20}
              height={20}
            />
            <h1 className="text-sm">{pool.ecosystem}</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-4">
        <p className="text-sm text-muted-foreground">Total incentive</p>
        <div className="flex flex-row gap-2 items-center">
          <h1 className="text-xl font-bold">
            ${formatAccountingNumber(pool.dailyRewards)}
          </h1>
          <Image
            src={pool.incentiveTokenLogo}
            alt={pool.incentiveToken}
            width={20}
            height={20}
          />
          <h1 className="text-md">{pool.incentiveToken}</h1>
          <p className="border border-muted-foreground bg-muted-foreground/20 rounded-md p-1 px-2 text-sm text-muted-foreground">
            {formatTimeline(pool.startTimestamp, pool.endTimestamp)}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-4">
        <p className="text-sm text-muted-foreground">TVL</p>
        <div className="flex flex-row gap-2 items-center">
          <h1 className="text-lg font-bold">
            ${formatAccountingNumber(pool.tvl)}
          </h1>
        </div>
      </div>
      <div className="flex-grow flex items-end justify-end px-4 pb-6">
        <Button asChild className="rounded-md w-fit">
          <Link
            href={`/explore/${pool.baseAsset
              .replace(" ", "")
              .toLowerCase()}-${pool.quoteAsset
              .replace(" ", "")
              .toLowerCase()}-${pool.protocol
              .replace(" ", "")
              .toLowerCase()}-${pool.ecosystem.replace(" ", "").toLowerCase()}`}
          >
            View
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
