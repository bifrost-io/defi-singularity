import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Compass,
  Lightbulb,
  ListChecks,
  ExternalLink,
} from "lucide-react";
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
            <h1 className="text-7xl font-bold text-primary">
              Interstellar Odyssey
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-6 mt-6">
          <div className="flex flex-row gap-2 items-center">
            <Compass />
            <h1 className="text-2xl">Overview</h1>
          </div>
          <p className="text-lg">
            As part of{" "}
            <Image
              src="/logo.svg"
              alt="DeFi Singularity"
              width={20}
              height={20}
              className="inline mr-1"
            />
            DeFi Singularity,{" "}
            <Link
              href="https://bifrost.io/"
              className="underline underline-offset-4"
            >
              <Image
                src="/bnc.svg"
                alt="Bifrost"
                width={20}
                height={20}
                className="inline mr-1"
              />
              Bifrost
              <ExternalLink className="inline ml-1 w-4 h-4" />
            </Link>{" "}
            will also run a parallel initiative for builders that want to
            leverage the main campaign to build their next break out DeFi
            project.
          </p>
          <p className="text-lg">
            The initiative will run until the end of the{" "}
            <Image
              src="/logo.svg"
              alt="DeFi Singularity"
              width={20}
              height={20}
              className="inline mr-1"
            />
            <Link href="/" className="underline underline-offset-4">
              DeFi Singularity
            </Link>{" "}
            program.
          </p>
          <p className="text-lg">
            The initiative is open to all builders who want to build on
            Ethereum, Base, Arbitrum and BNB Chain.
          </p>
          <p className="text-lg">
            With millions of dollars in{" "}
            <Image
              src="/dot.svg"
              alt="vDOT"
              width={20}
              height={20}
              className="inline mr-1"
            />
            LP incentives, along with generous grants from{" "}
            <Link
              href="https://bifrost.io/"
              className="underline underline-offset-4"
            >
              <Image
                src="/bnc.svg"
                alt="Bifrost"
                width={20}
                height={20}
                className="inline mr-1"
              />
              Bifrost
              <ExternalLink className="inline ml-1 w-4 h-4" />
            </Link>
            , we hope to see great DeFi projects to come out of this initiative.
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <div className="flex flex-row gap-2 items-center">
            <Lightbulb />
            <h1 className="text-2xl">Ideas</h1>
          </div>
          <p className="text-lg">
            Here are some ideas that you can build. Of course, you can build
            anything you want but only ideas that are aligned with the goal DeFi
            Singularity would be eligible for grants. And the goal is increasing
            adoption of{" "}
            <Image
              src="/dot.svg"
              alt="DOT"
              width={20}
              height={20}
              className="inline mr-1"
            />
            DOT and{" "}
            <Image
              src="/vdot.svg"
              alt="vDOT"
              width={20}
              height={20}
              className="inline mr-1"
            />
            vDOT.
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <div className="flex flex-row gap-2 items-center">
            <ListChecks />
            <h1 className="text-2xl">Requirements</h1>
          </div>
          <p className="text-lg">
            As part of the DeFi Singularity program, Bifrost will also run a
            parallel initiative for builders that want to leverage the main
            campaign to build their next break out DeFi project.
          </p>
        </div>
      </div>
    </main>
  );
}
