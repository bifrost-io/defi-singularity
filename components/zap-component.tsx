"use client";

import { LiquidityWidget } from "@kyberswap/liquidity-widgets";
import { PoolType } from "@kyberswap/liquidity-widgets";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useSendTransaction } from "wagmi";
import { Zap } from "lucide-react";
import "@kyberswap/liquidity-widgets/dist/style.css";

export default function ZapComponent({ pageChainId, poolAddress }: { pageChainId: number, poolAddress: string }) {
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
        poolType={pageChainId === 56 ? PoolType.DEX_PANCAKESWAPV3 : PoolType.DEX_UNISWAP_V4}
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
}
