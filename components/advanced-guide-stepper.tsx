import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Pool } from "@/app/explore/data";
import Image from "next/image";

export default function AdvancedGuideStepper({ poolData }: { poolData: Pool }) {

  return (
    <div className="flex flex-col w-full md:w-3/4">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col">
          <div className="rounded-full p-4 flex items-center justify-center h-10 w-10 border border-muted">
            1
          </div>
          <div className="border-l-2 border-muted h-full w-0 ml-5" />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col p-4 gap-4 border border-muted rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10">
            <h1 className="text-xl">
              Get {poolData?.baseAsset} and {poolData?.quoteAsset}
            </h1>
            <p className="text-lg text-muted-foreground">
              On the{" "}
              <Image
                src={poolData?.ecosystemLogo || ""}
                alt={poolData?.ecosystem || ""}
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              {poolData?.ecosystem} network, use DEXs to directly swap an
              appropriate amount of{" "}
              <Image
                src={poolData?.baseAssetLogo || ""}
                alt={poolData?.baseAsset || ""}
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              {poolData?.baseAsset} and{" "}
              <Image
                src={poolData?.quoteAssetLogo || ""}
                alt={poolData?.quoteAsset || ""}
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              {poolData?.quoteAsset} to prepare assets for subsequent
              operations.
            </p>
            <Button asChild className="w-fit self-end">
              <Link target="_blank" href={poolData?.poolUrl || ""}>
                Go to Uniswap
                <ExternalLink />
              </Link>
            </Button>
            {/* {poolData?.baseAsset === "DOT" ? (
              <ul className="flex flex-col gap-4 list-disc list-inside text-muted-foreground">
                <li>
                  Buying from a centralized exchange like Binance, OKX, Bybit or
                  Coinbase
                </li>
                <li>
                  Swapping from a decentralized exchange like{" "}
                  <Link
                    className="underline underline-offset-4"
                    target="_blank"
                    href={poolData?.poolUrl || ""}
                  >
                    {poolData?.protocol}
                    <ExternalLink className="w-4 h-4 ml-1 inline" />
                  </Link>{" "}
                  or{" "}
                  <Link
                    className="underline underline-offset-4"
                    target="_blank"
                    href="https://app.hydration.net/"
                  >
                    <Image
                      src="/hydration.svg"
                      alt="Hydration"
                      width={20}
                      height={20}
                      className="inline mb-2"
                    />{" "}
                    Hydration
                    <ExternalLink className="w-4 h-4 ml-1 inline" />
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="flex flex-col gap-4 list-disc list-inside text-muted-foreground">
                <li>
                  Minting directly on{" "}
                  <Link
                    className="underline underline-offset-4"
                    target="_blank"
                    href="https://app.bifrost.io/"
                  >
                    Bifrost
                    <ExternalLink className="w-4 h-4 ml-1 inline" />
                  </Link>
                </li>
                <li>
                  Swapping from a decentralized exchange like{" "}
                  <Link
                    className="underline underline-offset-4"
                    target="_blank"
                    href={poolData?.poolUrl || ""}
                  >
                    {poolData?.protocol}
                    <ExternalLink className="w-4 h-4 ml-1 inline" />
                  </Link>{" "}
                  or{" "}
                  <Link
                    className="underline underline-offset-4"
                    target="_blank"
                    href="https://app.hydration.net/"
                  >
                    <Image
                      src="/hydration.svg"
                      alt="Hydration"
                      width={20}
                      height={20}
                      className="inline mb-2"
                    />{" "}
                    Hydration
                    <ExternalLink className="w-4 h-4 ml-1 inline" />
                  </Link>
                </li>
              </ul>
            )} */}
          </div>
          <div className="h-[20px]" />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col">
          <div className="rounded-full p-4 flex items-center justify-center h-10 w-10 border border-muted">
            2
          </div>
          <div className="border-l-2 border-muted h-full w-0 ml-5" />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col p-4 gap-4 border border-muted rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10">
            <h1 className="text-xl">Mint {poolData?.baseAsset} on Bifrost</h1>
            <p className="text-lg text-muted-foreground">
              You can mint{" "}
              <Image
                src="/vdot.svg"
                alt="vDOT"
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              vDOT using the Bifrost Dapp. First, navigate to the vDOT minting interface, click the <span className="font-bold">Transfer</span> button next to the minting input field, and follow the UI to bridge DOT{" "}
              <Image
                src="/dot.svg"
                alt="DOT"
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              from the Polkadot network to the Bifrost network. Once DOT is
              received on Bifrost, enter the desired{" "}
              <Image
                src="/dot.svg"
                alt="DOT"
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              DOT amount and click{" "}
              <span className="font-bold">Mint</span> to mint{" "}
              <Image
                src="/vdot.svg"
                alt="vDOT"
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              vDOT.
            </p>
            <Button asChild className="w-fit self-end">
              <Link target="_blank" href="https://app.bifrost.io/">
                Go to Bifrost
                <ExternalLink />
              </Link>
            </Button>
          </div>
          <div className="h-[20px]" />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col">
          <div className="rounded-full p-4 flex items-center justify-center h-10 w-10 border border-muted">
            3
          </div>
          <div className="border-l-2 border-muted h-full w-0 ml-5" />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col p-4 gap-4 border border-muted rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10">
            <h1 className="text-xl">Bridging</h1>
            <p className="text-lg text-muted-foreground">
            Use the cross-chain functionality on the{" "}
            <Image
              src="/bifrost.svg"
              alt="Bifrost"
              width={20}
              height={20}
              className="inline mb-2"
            />{" "}
            Bifrost Dapp to bridge{" "}
            <Image
              src="/vdot.svg"
              alt="vDOT"
              width={20}
              height={20}
              className="inline mb-2"
            />{" "}
            vDOT to the {poolData?.ecosystem} network. In the crosschain page,
            switch the target network to {poolData?.ecosystem}, select{" "}
            <Image
              src="/vdot.svg"
              alt="vDOT"
              width={20}
              height={20}
              className="inline mb-2"
            />{" "}
            vDOT as the asset to bridge, enter the desired{" "}
            <Image
              src="/vdot.svg"
              alt="vDOT"
              width={20}
              height={20}
              className="inline mb-2"
            />{" "}vDOT amount, and sign the transaction to complete the bridging process.{" "}
            </p>
            <Button asChild className="w-fit self-end">
              <Link target="_blank" href="https://app.bifrost.io/crosschain?network=polkadot">
                Go to Bridge
                <ExternalLink />
              </Link>
            </Button>
          </div>
          <div className="h-[20px]" />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col">
          <div className="rounded-full p-4 flex items-center justify-center h-10 w-10 border border-muted">
            4
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col p-4 gap-4 border border-muted rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10">
            <h1 className="text-xl">Provide liquidity</h1>
            <h1 className="text-lg text-muted-foreground">
              Go to the pool on{" "}
              <Image
                src={poolData?.subProtocolLogo || ""}
                alt={poolData?.subProtocol || ""}
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              {poolData?.subProtocol} (a{" "}
              <Image
                src={poolData?.protocolLogo || ""}
                alt={poolData?.protocol || ""}
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              {poolData?.protocol} hook) to provide liquidity with your tokens
            </h1>
            <Button asChild className="w-fit self-end">
              <Link target="_blank" href={poolData?.poolUrl || ""}>
                Go to pool
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
