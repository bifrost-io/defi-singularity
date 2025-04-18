import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function InterstellarOdyssey() {
  return (
    <main className="min-h-screen bg-background pb-8 p-2 md:p-8">
      <div className="flex flex-col gap-8">
        <Button asChild variant="outline" className="rounded-full w-fit">
          <Link href="/">
            <ArrowLeft />
            Back
          </Link>
        </Button>
        <div className="relative">
          <Image
            src="/interstellar-odyssey.png"
            alt="Interstellar Odyssey"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
            <h1 className="text-7xl font-bold text-primary">Interstellar Odyssey</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
