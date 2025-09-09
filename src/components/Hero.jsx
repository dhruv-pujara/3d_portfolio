import { motion } from "framer-motion";
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto"
    style={{backgroundImage:"url('./src/assets/black.jpg')", backgroundSize:"cover", backgroundPosition:"center"}}>
      <div className = {`${styles.paddingX} absolute inset-x-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className = {`${styles.heroHeadText}
             text-white`}> Hi, I'm <span className = "text-[#915eff]">Dhruv</span></h1>
             <p className = {`${styles.heroSubText} mt-2 text-white-100`}>
              I am an aspiring Computer Science student with a drive to learn, create, and innovate through code.
             </p>
        </div>

       
      </div>
       <ComputersCanvas />

       <div className="absolute xs:bottom-4 bottom-16 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[24px] h-[48px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 bg-black/10">
            <motion.div 
            animate={{
              y : [0, 24, 0]
            }}
            transition={{
              duration : 1.5,
              repeat : Infinity,
              repeatType : 'loop'
            }}
            className="w-3 h-3 rounded-full bg-white"
            />
          </div>
        </a>
       </div>
    </section>
  )
}

export default Hero