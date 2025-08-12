"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Zap } from "lucide-react";
import { Pool } from "@/app/explore/data";
import Image from "next/image";

export default function SimpleGuideStepper({ poolData }: { poolData: Pool }) {

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col">
          <div className="rounded-full p-4 flex items-center justify-center h-10 w-10 border border-muted">
            1
          </div>
          <div className="border-l-2 border-muted h-full w-0 ml-5" />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col p-4 gap-4 border border-muted rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10">
            <h1 className="text-xl">Add {poolData?.baseAsset} / {poolData?.quoteAsset} liquidity</h1>
            <p className="text-lg text-muted-foreground">
              On the{" "}
              <Image
                src={poolData?.ecosystemLogo || ""}
                alt={poolData?.ecosystem || ""}
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              {poolData?.ecosystem} network, add liquidity to the{" "}
              <Image
                src={poolData?.protocolLogo || ""}
                alt={poolData?.protocol || ""}
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}{poolData?.protocol} V4 {" "}
              <Image
                src={poolData?.baseAssetLogo || ""}
                alt={poolData?.baseAsset || ""}
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}{poolData?.baseAsset}{" "}
              / {" "}
              <Image
                src={poolData?.quoteAssetLogo || ""}
                alt={poolData?.quoteAsset || ""}
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}{poolData?.quoteAsset}{" "}
              0.3% pool by using the Zap feature or manually via Uniswap interface. You can choose an appropriate liquidity range and token amounts based on your risk tolerance and preferences. Please note that only active liquidity within the current price range is eligible to participate in farming. Unilateral liquidity that is temporarily inactive will likely not receive any incentives during the event period.
            </p>
            <div className="flex flex-row gap-2 self-end">
              <Button variant="outline" asChild className="w-fit self-end">
                <Link target="_blank" href={poolData?.poolUrl || ""}>
                  Add manually
                  <ExternalLink />
                </Link>
              </Button>
              {/* <Button asChild className="w-fit self-end">
                <Link href={`/explore/${poolData.id}`}>
                  <Zap />
                  Zap in
                </Link>
              </Button> */}
            </div>
          </div>
          <div className="h-[20px]" />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col">
          <div className="rounded-full p-4 flex items-center justify-center h-10 w-10 border border-muted">
            2
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col p-4 gap-4 border border-muted rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10">
            <h1 className="text-xl">Claiming Campaign Incentives</h1>
            <p className="text-lg text-muted-foreground">
            As long as your address holds LP tokens for the {" "}
            <Image
              src={poolData?.protocolLogo || ""}
              alt={poolData?.protocol || ""}
              width={20}
              height={20}
              className="inline mb-2"
            />{" "}
            {poolData?.protocol} V4 {" "}
            <Image
              src={poolData?.baseAssetLogo || ""}
              alt={poolData?.baseAsset || ""}
              width={20}
              height={20}
              className="inline mb-2"
            />{" "}{poolData?.baseAsset}{" "}
            / {" "}
            <Image
              src={poolData?.quoteAssetLogo || ""}
              alt={poolData?.quoteAsset || ""}
              width={20}
              height={20}
              className="inline mb-2"
            />{" "}{poolData?.quoteAsset} 0.3% pool on {poolData?.ecosystem}, you will automatically participate in{" "}
            <Image
              src={poolData?.subProtocolLogo || ""}
              alt={poolData?.subProtocol || ""}
              width={20}
              height={20}
              className="inline mb-2"
            />{" "}
            Merkl&apos;s incentive campaign, with no additional actions required.{" "}
            <Image
              src="/merkl.svg"
              alt="Merkl"
              width={20}
              height={20}
              className="inline mb-2"
            />{" "}Merkl periodically takes snapshots to allocate and distribute incentives. You can view your earned incentive details on Merkl&apos;s Dashboard and claim released rewards through on-chain transactions.
            </p>
            <Button asChild className="w-fit self-end">
              <Link target="_blank" href="https://app.merkl.xyz/users/">
                Go claim rewards
                <ExternalLink />
              </Link>
            </Button>
          </div>
          <div className="h-[20px]" />
        </div>
      </div>
    </div>
  );
}
