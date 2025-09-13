import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto overflow-hidden"
      style={{
        backgroundImage: "url('./src/assets/black.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* CANVAS behind content, still visible */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ComputersCanvas />
      </div>

      {/* CONTENT: shift the whole block to the right with `left-*` */}
      <div
        className={`${styles.paddingX} absolute top-[120px] left-6 sm:left-12 right-0
                    max-w-7xl mx-auto flex flex-row items-start gap-6 z-10`}
      >
        {/* dot + line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] to-transparent rounded-full opacity-90" />
        </div>

        {/* text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Dhruv</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am an aspiring Computer Science student with a drive to learn, create, and
            innovate through code.
          </p>
        </div>
      </div>

      {/* scroll indicator */}
    <div className="absolute xs:bottom-4 bottom-16 w-full flex justify-center items-center z-20">
      <a href="#about" aria-label="Scroll to About section">
        <div
          className="
            relative w-[26px] h-[52px]
            rounded-3xl border-2
            border-[#915EFF]/70
            bg-black/30
            backdrop-blur-sm
            flex justify-center items-start
            p-2
            overflow-hidden
            shadow-[0_0_24px_-6px_rgba(145,94,255,0.8)]
          "
        >
          <motion.div
            animate={{ y: [0, 22, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            className="w-2.5 h-2.5 rounded-full bg-[#915EFF]"
            style={{ willChange: "transform" }}
          />
        </div>
      </a>
    </div>
    </section>
  );
};

export default Hero;
