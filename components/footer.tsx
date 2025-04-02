import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 gap-4 md:grid-cols-2 items-start px-24 pb-12">
      <div className="flex flex-row gap-2 items-center">
        <Image
          src="/logo.svg"
          alt="DeFi singularity logo"
          width={100}
          height={100}
        />
        <p className="text-2xl font-bold">DeFi Singularity</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Resources</h2>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Links</h2>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
    </footer>
  );
}