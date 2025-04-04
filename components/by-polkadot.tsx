"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
const words = [
  "Verified",
  "Computed",
  "Connected",
  "Executed",
  "Powered",
  "Secured",
  "Finalized",
]

export default function ByPolkadot() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div
        className="flex flex-row gap-4 md:gap-8 items-center justify-center text-xl md:text-4xl font-bold"
      >
        <div className="relative overflow-hidden w-[200px] md:w-[300px] h-[60px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[currentIndex]}
              className="absolute right-0 top-0 bottom-0 flex items-center justify-end w-full"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{
                y: { type: "spring", stiffness: 500, damping: 30, duration: 0.3 },
                opacity: { duration: 0.2 },
              }}
            >
              {words[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="flex items-center">By</div>
        <div className="flex items-center">
          <Image src="/polkadot-full.svg" alt="Polkadot" width={200} height={200} />
        </div>
      </div>
    </div>
  )
}

