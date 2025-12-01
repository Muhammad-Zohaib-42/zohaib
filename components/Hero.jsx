"use client"

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import {motion} from "motion/react"

export default function Hero() {
  return (
    <section id="home" className="h-auto md:h-[90.3vh]">
      <div className="fixed inset-0 z-0" style={{ backgroundImage: `linear-gradient(to right, #262626 1px, transparent 1px),linear-gradient(to bottom, #262626 1px, transparent 1px)`, backgroundSize: "20px 20px"}}></div>
      <motion.div
      initial={{
        scale: 0.98,
      opacity: 0,
      filter: "blur(10px)"
    }}
    animate={{
      scale: 1,
      opacity: 1,
      filter: "blur(0px)"
    }}
    transition={{
      type: "spring",
      stiffness: 70,
      damping: 15,
    }}
      className="max-width relative z-10 flex flex-col md:flex-row gap-3 md:gap-0 h-auto md:h-full">
        <HeroLeft />
        <HeroRight />
      </motion.div>
    </section>
  );
}
