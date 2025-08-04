"use client";

import {
  PoolType as ZapInDex,
  LiquidityWidget as ZapInWidget,
} from "@kyberswap/liquidity-widgets";
import "@kyberswap/liquidity-widgets/dist/style.css";

export default function ZapComponent() {
  const widgetProps = {
    chainId: 1,
    poolAddress:
      "0x72331fcb696b0151904c03584b66dc8365bc63f8a144d89a773384e3a579ca73",
    poolType: ZapInDex.DEX_UNISWAP_V4,
    connectedAccount: {
      chainId: 1,
    },
    source: "zap-widget-demo",
    onClose: () => {},
    onConnectWallet: () => {},
    onSwitchChain: () => {},
    onSubmitTx: async () => {
      console.log(123);

      return "123";
    },
  };

  return (
    <div className="w-full flex justify-center py-4">
      <div className="w-1/2">
        <h1>Zap Component</h1>
        <ZapInWidget {...widgetProps} />
      </div>
    </div>
  );
}
