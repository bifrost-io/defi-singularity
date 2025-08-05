"use client";

import { LiquidityWidget } from "@kyberswap/liquidity-widgets";
import { PoolType } from "@kyberswap/liquidity-widgets";
import '@kyberswap/liquidity-widgets/dist/style.css'
import { useAccount, useChainId } from "wagmi";
import { chainIdFromPoolParams } from "@/lib/utils";

export default function ZapComponent({ pageChainId }: { pageChainId: string }) {
  const { address } = useAccount();
  const chainId = useChainId();

  return (
    <div className="w-full">
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
        chainId={chainIdFromPoolParams(pageChainId) || "1"}
        poolType={PoolType.DEX_UNISWAP_V4}
        poolAddress="0xaa73a142ee6a70b2f2e3311c9dee917f1210be2abbc4385467935ceaaadab8a0"
        connectedAccount={{ address: address, chainId: chainId }}
        onClose={() => console.log("Close")}
        onConnectWallet={() => console.log("Connect wallet")}
        onSwitchChain={() => console.log("Switch chain")}
        onSubmitTx={async () => {
          console.log("Submit transaction");
          return "0x123"; // Mock transaction hash
        }}
        source="bifrost"
      />
    </div>
  );
}
