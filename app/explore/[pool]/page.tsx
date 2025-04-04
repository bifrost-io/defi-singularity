import { pools } from "@/app/explore/data";
import { ArrowLeft, ListTodo } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { formatAccountingNumber } from "@/lib/utils";

export default async function PoolPage({
  params,
}: {
  params: Promise<{ pool: string }>;
}) {
  const { pool } = await params;

  const poolData = pools.find(
    (p) =>
      p.baseAsset.replace(" ", "").toLowerCase() === pool.split("-")[0] &&
      p.quoteAsset.replace(" ", "").toLowerCase() === pool.split("-")[1] &&
      p.protocol.replace(" ", "").toLowerCase() === pool.split("-")[2] &&
      p.ecosystem.replace(" ", "").toLowerCase() === pool.split("-")[3]
  );

  if (!poolData) {
    return (
      <main className="min-h-screen bg-background pb-8 p-2 md:p-8">
        <div className="flex flex-col gap-8">
          <Button asChild variant="outline" className="rounded-full w-fit">
            <Link href="/">
              <ArrowLeft />
              Back
            </Link>
          </Button>
          <h1 className="text-4xl font-bold">Pool not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pb-8 p-2 md:p-8">
      <div className="flex flex-col gap-8">
        <Button asChild variant="outline" className="rounded-full w-fit">
          <Link href="/explore">
            <ArrowLeft />
            Back
          </Link>
        </Button>
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-2">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src={poolData.baseAssetLogo}
                alt={poolData.baseAsset}
                width={24}
                height={24}
                className="w-[28px] h-[28px] md:w-[40px] md:h-[40px]"
              />
              <h1 className="text-3xl md:text-5xl font-bold">
                {poolData?.baseAsset}
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold">/</h1>
              <Image
                src={poolData.quoteAssetLogo}
                alt={poolData.quoteAsset}
                width={24}
                height={24}
                className="w-[28px] h-[28px] md:w-[40px] md:h-[40px]"
              />
              <h1 className="text-3xl md:text-5xl font-bold">
                {poolData?.quoteAsset}
              </h1>
            </div>
            <div className="flex flex-row gap-2 items-center md:items-end">
              <p className="text-lg md:text-xl text-muted-foreground">On</p>
              <Image
                src={poolData.protocolLogo}
                alt={poolData.protocol}
                width={24}
                height={24}
                className="w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
              />
              <h1 className="text-lg md:text-xl">{poolData.protocol}</h1>
              <p className="text-lg md:text-xl text-muted-foreground">of</p>
              <Image
                src={poolData.ecosystemLogo}
                alt={poolData.ecosystem}
                width={24}
                height={24}
                className="w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
              />
              <h1 className="text-lg md:text-xl">{poolData.ecosystem}</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-6">
            <div className="flex flex-col p-4 gap-4 border border-muted rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10">
              <h1 className="text-md md:text-lg text-muted-foreground">
                Total Incentives
              </h1>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-2xl">
                  {formatAccountingNumber(poolData.incentive)}
                </p>
                <Image
                  src={poolData.incentiveTokenLogo}
                  alt={poolData.incentiveToken}
                  width={24}
                  height={24}
                />
                <p className="text-2xl">{poolData.incentiveToken}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 p-4 gap-4 border border-muted rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10">
              <div className="flex flex-col gap-2">
                <h1 className="text-md md:text-lg text-muted-foreground">
                  APY
                </h1>
                <p className="text-2xl">17%</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-md md:text-lg text-muted-foreground">
                  30d Avg APY
                </h1>
                <p className="text-2xl">17%</p>
              </div>
            </div>
            <div className="flex flex-col p-4 gap-4 border border-muted rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10">
              <h1 className="text-md md:text-lg text-muted-foreground">
                Total Value Locked
              </h1>
              <p className="text-2xl">${formatAccountingNumber(1000000)}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <div className="flex flex-row gap-2 items-center">
              <ListTodo />
              <h1 className="text-2xl">Rules</h1>
            </div>
            <p className="text-lg">{poolData.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
