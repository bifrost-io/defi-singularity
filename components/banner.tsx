import { ExternalLink } from "lucide-react";

export default function Banner() {
  return (
    <div className="flex flex-row bg-black text-white items-center justify-center p-2">
      <p>We just launched vETH with great incentives! <a className="inline-flex items-center underline underline-offset-4" href="https://omni.ls">Check it out <ExternalLink className="w-4 h-4 ml-1" /></a></p>
    </div>
  );
}