"use client";

// import { useState } from "react";
import { LiquidityWidget } from "@kyberswap/liquidity-widgets";
import { PoolType } from "@kyberswap/liquidity-widgets";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
// import { chainIdFromPoolParams } from "@/lib/utils";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useSendTransaction } from "wagmi";
// import { useMediaQuery } from "@/hooks/use-media-query";
// import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
import "@kyberswap/liquidity-widgets/dist/style.css";

export default function ZapComponent({ pageChainId, poolAddress }: { pageChainId: number, poolAddress: string }) {
  // useMediaQuery hook to check if the screen is desktop
  // const isDesktop = useMediaQuery("(min-width: 768px)");
  // const [open, setOpen] = useState(false);
  const { address } = useAccount();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const { openConnectModal } = useConnectModal();
  const { sendTransactionAsync } = useSendTransaction();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold flex items-center gap-2"><Zap /> Zap</h1>
      <p className="text-sm text-muted-foreground">
        Zap in is a simple way to swap and add liquidity to the pool.
      </p>
      <LiquidityWidget
        theme={{
          text: "#ffffff",
          subText: "#979797",
          icons: "#a9a9a9",
          layer1: "#1c1c1c",
          dialog: "#1c1c1c",
          layer2: "#313131",
          stroke: "#313131",
          chartRange: "#28e0b9",
          chartArea: "#047855",
          accent: "#31cb9e",
          warning: "#ff9901",
          error: "#ff537b",
          success: "#189470",
          blue: "#2c9ce4",
          fontFamily: "Inter",
          borderRadius: "20px",
          buttonRadius: "24px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
        }}
        chainId={pageChainId}
        poolType={PoolType.DEX_UNISWAP_V4}
        poolAddress={poolAddress}
        connectedAccount={{ address: address, chainId: chainId }}
        onConnectWallet={() => {
          openConnectModal?.();
        }}
        onSwitchChain={() => switchChain({ chainId: pageChainId })}
        onSubmitTx={async (txData: {
          from: string;
          to: string;
          value: string;
          data: string;
          gasLimit: string;
        }): Promise<string> => {
          if (!address) {
            openConnectModal?.();
            throw new Error("No wallet connected");
          }
          try {
            const hash = await sendTransactionAsync({
              account: txData.from as `0x${string}`,
              to: txData.to as `0x${string}`,
              data: txData.data as `0x${string}`,
              value: BigInt(txData.value),
            });
            return hash;
          } catch (e) {
            console.log(e);
            throw e;
          }
        }}
        source="bifrost"
      />
    </div>
  );

  // return (
  //   <Dialog open={open} onOpenChange={setOpen}>
  //     <DialogTrigger asChild>
  //       <Button className="w-fit hover:cursor-pointer">
  //         <Zap />
  //         Zap in
  //       </Button>
  //     </DialogTrigger>
  //     <DialogContent
  //       showCloseButton={false}
  //       className="overflow-y-auto border-0 p-0 shadow-none max-w-[90vw] max-h-[90vh] md:max-w-2xl md:max-h-full lg:max-w-4xl lg:max-h-full"
  //     >
  //       <DialogHeader className="hidden">
  //         <DialogTitle>Zap in</DialogTitle>
  //         <DialogDescription>
  //           Simple way to swap and add liquidity to the pool
  //         </DialogDescription>
  //       </DialogHeader>
  //       <div className="z-100">
  //         <LiquidityWidget
  //           theme={{
  //             text: "#ffffff",
  //             subText: "#979797",
  //             icons: "#a9a9a9",
  //             layer1: "#1c1c1c",
  //             dialog: "#1c1c1c",
  //             layer2: "#313131",
  //             stroke: "#313131",
  //             chartRange: "#28e0b9",
  //             chartArea: "#047855",
  //             accent: "#31cb9e",
  //             warning: "#ff9901",
  //             error: "#ff537b",
  //             success: "#189470",
  //             blue: "#2c9ce4",
  //             fontFamily: "Inter",
  //             borderRadius: "20px",
  //             buttonRadius: "24px",
  //             boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
  //           }}
  //           chainId={pageChainId}
  //           poolType={PoolType.DEX_UNISWAP_V4}
  //           poolAddress="0xaa73a142ee6a70b2f2e3311c9dee917f1210be2abbc4385467935ceaaadab8a0"
  //           connectedAccount={{ address: address, chainId: chainId }}
  //           onClose={() => {
  //             setOpen(false);
  //           }}
  //           onConnectWallet={() => {
  //             openConnectModal?.();
  //           }}
  //           onSwitchChain={() => switchChain({ chainId: pageChainId })}
  //           onSubmitTx={async (txData: {
  //             from: string;
  //             to: string;
  //             value: string;
  //             data: string;
  //             gasLimit: string;
  //           }): Promise<string> => {
  //             if (!address) {
  //               openConnectModal?.();
  //               throw new Error("No wallet connected");
  //             }
  //             try {
  //               const hash = await sendTransactionAsync({
  //                 account: txData.from as `0x${string}`,
  //                 to: txData.to as `0x${string}`,
  //                 data: txData.data as `0x${string}`,
  //                 value: BigInt(txData.value),
  //               });
  //               return hash;
  //             } catch (e) {
  //               console.log(e);
  //               throw e;
  //             }
  //           }}
  //           source="bifrost"
  //         />
  //       </div>
  //     </DialogContent>
  //   </Dialog>
  // );
}
