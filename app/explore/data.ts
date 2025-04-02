export interface Pool {
  id: number;
  baseAsset: string;
  baseAssetName: string;
  baseAssetLogo: string;
  quoteAsset: string;
  quoteAssetName: string;
  quoteAssetLogo: string;
  ecosystem: string;
  ecosystemLogo: string;
  protocol: string;
  protocolLogo: string;
  description: string;
  address: string;
  tags: string[];
}

export const pools = [
  {
    id: 1,
    baseAsset: "DOT",
    baseAssetName: "Dot",
    baseAssetLogo: "/dot.svg",
    quoteAsset: "ETH",
    quoteAssetName: "Ether",
    quoteAssetLogo: "/ether.svg",
    ecosystem: "Ethereum",
    ecosystemLogo: "/eth.svg",
    protocol: "Uniswap",
    protocolLogo: "/uniswap.svg",
    description: "Top quality pool",
    address: "eip155:1/0x1234567890123456789012345678901234567890",
    tags: ["High APR", "High Liquidity"],
  }
]