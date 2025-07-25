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
            <h1 className="text-xl">Get DOT on Polkadot</h1>
            <p className="text-lg text-muted-foreground">
              Before performing operations, ensure you are familiar with
              Polkadot and proficient in using a{" "}
              <a
                target="_blank"
                href="https://polkadot.com/get-started/wallets/"
                className="underline underline-offset-4 hover:cursor-pointer"
              >
                Polkadot wallet
                <ExternalLink className="w-4 h-4 ml-1 inline" />
              </a>
              . You can withdraw{" "}
              <Image
                src="/dot.svg"
                alt="DOT"
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              DOT from any exchange that supports{" "}
              <Image
                src="/dot.svg"
                alt="DOT"
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              DOT withdrawals to your Polkadot address.
            </p>
            <Button asChild className="w-fit self-end">
              <Link
                target="_blank"
                href="https://polkadot.js.org/apps/#/accounts"
              >
                Check DOT Balance
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
              vDOT using the{" "}
              <Image
                src="/bifrost.svg"
                alt="Bifrost"
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              Bifrost Dapp. First, navigate to the{" "}
              <Image
                src="/vdot.svg"
                alt="vDOT"
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              vDOT minting interface, click the{" "}
              <span className="font-bold">Transfer</span> button next to the
              minting input field, and follow the UI to bridge{" "}
              <Image
                src="/dot.svg"
                alt="DOT"
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              DOT from the Polkadot network to the{" "}
              <Image
                src="/bifrost.svg"
                alt="Bifrost"
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              Bifrost network. Once{" "}
              <Image
                src="/dot.svg"
                alt="DOT"
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              DOT is received on Bifrost, enter the desired{" "}
              <Image
                src="/dot.svg"
                alt="DOT"
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              DOT amount and click <span className="font-bold">Mint</span> to
              mint{" "}
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
              <Link target="_blank" href="https://app.bifrost.io/vstaking/vDOT">
                Go to Bifrost Dapp
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
            <h1 className="text-xl">Bridging vDOT to {poolData?.ecosystem}</h1>
            <p className="text-lg text-muted-foreground">
              Use the crosschain functionality on the{" "}
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
              />{" "}
              vDOT amount, and sign the transaction to complete the bridging
              process.{" "}
            </p>
            <Button asChild className="w-fit self-end">
              <Link
                target="_blank"
                href="https://app.bifrost.io/crosschain?network=polkadot"
              >
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
          <div className="border-l-2 border-muted h-full w-0 ml-5" />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col p-4 gap-4 border border-muted rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10">
            <h1 className="text-xl">
              Add {poolData?.baseAsset} / {poolData?.quoteAsset} liquidity
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
              {poolData?.ecosystem} network, add liquidity to the{" "}
              <Image
                src={poolData?.protocolLogo || ""}
                alt={poolData?.protocol || ""}
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              {poolData?.protocol} V4{" "}
              <Image
                src={poolData?.baseAssetLogo || ""}
                alt={poolData?.baseAsset || ""}
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              {poolData?.baseAsset} /{" "}
              <Image
                src={poolData?.quoteAssetLogo || ""}
                alt={poolData?.quoteAsset || ""}
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              {poolData?.quoteAsset} 0.3% pool. You can choose an appropriate
              liquidity range and token amounts based on your risk tolerance and
              preferences. Please note that only active liquidity within the
              current price range is eligible to participate in farming.
              Unilateral liquidity that is temporarily inactive will likely not
              receive any incentives during the event period.
            </p>
            <Button asChild className="w-fit self-end">
              <Link target="_blank" href={poolData?.poolUrl || ""}>
                Add liquidity
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
            5
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col p-4 gap-4 border border-muted rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10">
            <h1 className="text-xl">Claiming Campaign Incentives</h1>
            <p className="text-lg text-muted-foreground">
            As long as your address holds LP tokens for the{" "}
              <Image
                src={poolData?.protocolLogo || ""}
                alt={poolData?.protocol || ""}
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              {poolData?.protocol} V4{" "}
              <Image
                src={poolData?.baseAssetLogo || ""}
                alt={poolData?.baseAsset || ""}
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              {poolData?.baseAsset} /{" "}
              <Image
                src={poolData?.quoteAssetLogo || ""}
                alt={poolData?.quoteAsset || ""}
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              {poolData?.quoteAsset} 0.3% pool on {poolData?.ecosystem}, you
              will automatically participate in{" "}
              <Image
                src={poolData?.subProtocolLogo || ""}
                alt={poolData?.subProtocol || ""}
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              Merkl&apos;s incentive campaign, with no additional actions
              required.{" "}
              <Image
                src="/merkl.svg"
                alt="Merkl"
                width={20}
                height={20}
                className="inline mb-2"
              />{" "}
              Merkl periodically takes snapshots to allocate and distribute
              incentives. You can view your earned incentive details on
              Merkl&apos;s Dashboard and claim released rewards through on-chain
              transactions.
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
