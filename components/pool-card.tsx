import { Pool } from "@/app/explore/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sprout } from 'lucide-react';
import Image from "next/image";


export default function PoolCard({ pool }: { pool: Pool }) {
  return (
    <div className="flex flex-col gap-2 border border-muted rounded-lg h-[200px] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10">
      <div className="flex flex-row justify-between border-b border-muted p-4 bg-secondary">
        <div className="flex flex-row gap-2 items-center">
          <Image src={pool.baseAssetLogo} alt={pool.baseAsset} width={20} height={20} />
          <h1 className="text-xl font-bold">
            {pool.baseAsset}
          </h1>
          <h1 className="text-xl font-bold">
            /
          </h1>
          <Image src={pool.quoteAssetLogo} alt={pool.quoteAsset} width={20} height={20} />
          <h1 className="text-xl font-bold">
            {pool.quoteAsset} 
          </h1>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Sprout className="w-5 h-5" />
          <h1 className="text-xl font-bold">17%</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <p className="text-sm text-muted-foreground">Description</p>
        <h1 className="text-lg text-muted-foreground">
          {pool.description}
        </h1>
      </div>
      <div className="flex-grow flex items-end justify-end px-4 pb-6">
        <Button className="rounded-md w-fit">
          <Link href={`/pool/${pool.id}`}>Deposit</Link>
        </Button>
      </div>
    </div>
  );
}
