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
  incentive: number;
  incentiveToken: string;
  incentiveTokenLogo: string;
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
    ecosystem: "Ethereum Mainnet",
    ecosystemLogo: "/ethereum.svg",
    protocol: "Uniswap",
    protocolLogo: "/uniswap.svg",
    incentive: 85000,
    incentiveToken: "DOT",
    incentiveTokenLogo: "/dot.svg",
    description: "Liquidity providers will be required to provide a minimum of $10,000 in liquidity for a minimum of 1 month to be eligible for rewards, with rewards distributed monthly.",
    address: "eip155:1/0x1234567890123456789012345678901234567890",
    tags: ["High APR", "High Liquidity"],
  },
  {
    id: 2,
    baseAsset: "vDOT",
    baseAssetName: "Voucher DOT",
    baseAssetLogo: "/dot.svg",
    quoteAsset: "ETH",
    quoteAssetName: "Ether",
    quoteAssetLogo: "/ether.svg",
    ecosystem: "Ethereum Mainnet",
    ecosystemLogo: "/ethereum.svg",
    protocol: "Uniswap",
    protocolLogo: "/uniswap.svg",
    incentive: 21250,
    incentiveToken: "DOT",
    incentiveTokenLogo: "/dot.svg",
    description: "Liquidity providers will be required to provide a minimum of $10,000 in liquidity for a minimum of 1 month to be eligible for rewards, with rewards distributed monthly.",
    address: "eip155:1/0x1234567890123456789012345678901234567890",
    tags: ["High APR", "High Liquidity"],
  },
  {
    id: 3,
    baseAsset: "DOT",
    baseAssetName: "Dot",
    baseAssetLogo: "/dot.svg",
    quoteAsset: "ETH",
    quoteAssetName: "Ether",
    quoteAssetLogo: "/ether.svg",
    ecosystem: "Ethereum Mainnet",
    ecosystemLogo: "/ethereum.svg",
    protocol: "Curve",
    protocolLogo: "/curve.svg",
    incentive: 85000,
    incentiveToken: "DOT",
    incentiveTokenLogo: "/dot.svg",
    description: "Liquidity providers will be required to provide a minimum of $10,000 in liquidity for a minimum of 1 month to be eligible for rewards, with rewards distributed monthly.",
    address: "eip155:1/0x1234567890123456789012345678901234567890",
    tags: ["High APR", "High Liquidity"],
  }

]