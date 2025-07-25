import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Loading() {
  return (
    <main className="min-h-screen bg-background pb-8 p-2 md:p-8">
      <div className="flex flex-col gap-8">
        <Button asChild variant="outline" className="rounded-full w-fit">
          <Link href="/explore">
            <ArrowLeft />
            Back
          </Link>
        </Button>
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-2">
            <Skeleton className="w-full h-12" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-6">
            {
              Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="w-full h-[70px]" />
              ))
            }
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <Skeleton className="w-[100px] h-12" />
            <Skeleton className="w-full h-[240px]" />
          </div>
        </div>
      </div>
    </main>
  );
}
