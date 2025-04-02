import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function Explore() {
  return (
    <main className="min-h-screen bg-background pb-8 p-2 md:p-8">
      <div className="flex flex-col gap-8">
        <Button asChild variant="outline" className="rounded-full w-fit">
          <Link href="/">
            <ArrowLeft />
            Back
          </Link>
        </Button>
        <h1 className="text-4xl font-bold">Explore</h1>
      </div>
    </main>
  );
}