import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 gap-4 md:grid-cols-2 items-start px-8 md:px-24 mt-12 h-[400px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2 items-center h-[80px]">
          <Image
            src="/logo.svg"
            alt="DeFi singularity logo"
            width={80}
            height={80}
          />
          <p className="text-2xl font-bold">DeFi Singularity</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Resources</h2>
          <Link
            className="text-muted-foreground w-fit"
            target="_blank"
            href="https://polkadot.com/"
          >
            Polkadot
          </Link>
          <Link
            className="text-muted-foreground w-fit"
            target="_blank"
            href="https://bifrost.io/"
          >
            Bifrost
          </Link>
          <Link
            className="text-muted-foreground w-fit"
            target="_blank"
            href="https://hyperbridge.network/"
          >
            Hyperbridge
          </Link>
          <Link
            className="text-muted-foreground w-fit"
            target="_blank"
            href="https://docs.google.com/document/d/17MvO1gjD_K-t35TInuRir2PfW25dacG9dp4JcqOZbsE/edit?usp=sharing"
          >
            Program Rules
          </Link>
          <Link
            className="text-muted-foreground w-fit"
            target="_blank"
            href="https://polkadot.subsquare.io/referenda/1439"
          >
            OpenGov
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Links</h2>
          <Link
            className="text-muted-foreground w-fit"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-muted-foreground w-fit"
            href="/interstellar-odyssey"
          >
            Interstellar Odyssey
          </Link>
        </div>
      </div>
    </footer>
  );
}
