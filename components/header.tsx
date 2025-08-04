import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row gap-4 justify-between items-center p-2 md:px-8 md:py-4">
      <Link href="/" className="flex flex-row gap-2 items-center h-[40px]">
        <Image
          src="/logo.svg"
          alt="DeFi singularity logo"
          width={40}
          height={40}
        />
        <p className="text-2xl font-bold">DeFi Singularity</p>
      </Link>
      <ConnectButton />
    </header>
  );
}
