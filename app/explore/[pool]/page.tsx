import { pools } from "@/app/explore/data";
import { ArrowLeft, ListTodo, Info, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { formatAccountingNumber, formatTimeLeft } from "@/lib/utils";
import SimpleGuideStepper from "@/components/simple-guide-stepper";
import AdvancedGuideStepper from "@/components/advanced-guide-stepper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export async function generateStaticParams() {
  return pools.map((pool) => ({
    pool:
      pool.baseAsset.replace(" ", "").toLowerCase() +
      "-" +
      pool.quoteAsset.replace(" ", "").toLowerCase() +
      "-" +
      pool.protocol.replace(" ", "").toLowerCase() +
      "-" +
      pool.ecosystem.replace(" ", "").toLowerCase(),
  }));
}

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
          <div className="flex flex-col lg:flex-row gap-6 md:gap-2">
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
              <p className="border border-muted-foreground bg-muted-foreground/20 rounded-md p-1 px-2 text-sm text-muted-foreground self-end">
                {poolData.fee}
              </p>
            </div>
            <div className="grid grid-cols-1 md:flex md:flex-wrap gap-2 ml-2">
              <div className="flex flex-row gap-2 items-center md:items-end">
                <p className="text-lg md:text-xl text-muted-foreground">
                  Deployed on
                </p>
                <Image
                  src={poolData.protocolLogo}
                  alt={poolData.protocol}
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]"
                />
                <h1 className="text-lg md:text-xl">{poolData.protocol}</h1>
              </div>
              <div className="flex flex-row gap-2 items-center md:items-end">
                <p className="text-lg md:text-xl text-muted-foreground">on</p>
                <Image
                  src={poolData.ecosystemLogo}
                  alt={poolData.ecosystem}
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]"
                />
                <h1 className="text-lg md:text-xl">{poolData.ecosystem}</h1>
              </div>
              <div className="flex flex-row gap-2 items-center md:items-end">
                <p className="text-lg md:text-xl text-muted-foreground">via</p>
                <Image
                  src={poolData.subProtocolLogo}
                  alt={poolData.subProtocol}
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]"
                />
                <h1 className="text-lg md:text-xl">{poolData.subProtocol}</h1>
              </div>
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
                <p className="border border-muted-foreground bg-muted-foreground/20 rounded-md p-1 px-2 text-sm text-muted-foreground">
                  {formatTimeLeft(poolData.endTimestamp)} left
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 p-4 gap-4 border border-muted rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10">
              <div className="flex flex-col gap-2">
                <h1 className="text-md md:text-lg text-muted-foreground">
                  APR
                </h1>
                <p className="text-2xl">17%</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-md md:text-lg text-muted-foreground">
                  30d Avg APR
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
            <div className="flex flex-col gap-2">
              <p>
                During the event period, users who provide liquidity (LP) to the{" "}
                {poolData.baseAsset}/{poolData.quoteAsset} {poolData.protocol}{" "}
                V4 0.3% pool on {poolData.ecosystem} and hold their LP tokens
                will automatically participate in the incentive program. Rewards
                will be distributed via {poolData.subProtocol}. Based on{" "}
                {poolData.subProtocol}’s reward pool configuration:
              </p>
            </div>
            <ul className="list-disc list-inside">
              <li>
                35% of the rewards will be allocated to the{" "}
                {poolData.quoteAsset} portion of the LP.
              </li>
              <li>
                45% of the rewards will be allocated to the {poolData.baseAsset}{" "}
                portion of the LP.
              </li>
              <li>20% of the rewards will be allocated to active LPs.</li>
            </ul>
            <p className="flex flex-row gap-2 items-center border border-yellow-500 bg-yellow-500/10 rounded-lg p-4 w-fit mt-4">
              <TriangleAlert className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-yellow-500">
                Liquidity positions that do not include the current price range
                are not eligible for incentives.
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <Tabs defaultValue="simple" className="w-full">
              <div className="flex flex-row gap-2 items-center">
                <Info />
                <h1 className="text-2xl">Guides</h1>
                <TabsList className="flex flex-row gap-2 items-center ml-2">
                  <TabsTrigger value="simple">Simple</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="simple">
                <SimpleGuideStepper poolData={poolData} />
              </TabsContent>
              <TabsContent value="advanced">
                <AdvancedGuideStepper poolData={poolData} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
