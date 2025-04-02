import Image from "next/image";

export default function Header() {
  return (
    <header className="grid grid-cols-1 md:grid-cols-2">
      <Image
        src="/logo.svg"
        alt="DeFi singularity logo"
        width={100}
        height={100}
      />
      <div>
        Resources
      </div>
    </header>
  );
}
