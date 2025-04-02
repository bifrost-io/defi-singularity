import { Pool } from "@/app/explore/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PoolCard({ pool }: { pool: Pool }) {
  return (
    <div className="flex flex-col gap-2 border border-muted rounded-lg h-[200px] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-row justify-between border-b border-muted p-4 bg-secondary">
        <h1 className="text-xl font-bold">{pool.baseAsset} / {pool.quoteAsset}</h1>
        <h1 className="text-xl font-bold text-muted-foreground">17%</h1>
      </div>
      <div className="flex-grow flex items-end justify-end p-4">
        <Button className="rounded-full w-fit">
          <Link href={`/pool/${pool.id}`}>
            Deposit
          </Link>
        </Button>
      </div>
    </div>
  );
}