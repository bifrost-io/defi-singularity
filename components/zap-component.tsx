"use client";

import { LiquidityWidget } from "@kyberswap/liquidity-widgets";
import { PoolType } from "@kyberswap/liquidity-widgets";

export default function ZapComponent() {

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
          fontFamily: "Work Sans",
          borderRadius: "20px",
          buttonRadius: "24px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
        }}
        chainId={1}
        poolType={PoolType.DEX_UNISWAPV3}
        poolAddress="0x36696169c63e42cd08ce11f5deebbcebae652050"
        connectedAccount={{ address: undefined, chainId: 1 }}
        onClose={() => console.log("Close")}
        onConnectWallet={() => console.log("Connect wallet")}
        onSwitchChain={() => console.log("Switch chain")}
        onSubmitTx={async () => {
          console.log("Submit transaction");
          return "0x123"; // Mock transaction hash
        }}
        source="zap-widget-demo"
      />
    </div>
  );
}
