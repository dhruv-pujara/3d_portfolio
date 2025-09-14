import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
// ❗ FIX: import the named export from the hoc barrel/index
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  // Support both image URLs and React components
  const isReactElement = typeof icon === "object" && icon?.$$typeof;
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="w-[190px] sm:w-[220px] lg:w-[250px]"
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="
          bg-gradient-to-r from-[#915EFF] to-[#BF61FF]
          p-[2px] rounded-[22px] overflow-hidden shadow-card
        "
      >
        <div
          className="
            bg-[#151030] rounded-[16px]
            py-5 px-8 min-h-[300px]
            flex flex-col items-center justify-evenly
          "
        >
          {isReactElement ? (
            <div className="text-5xl text-white/90">{icon}</div>
          ) : (
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain"
              onError={(e) => { e.currentTarget.style.opacity = 0; }}
            />
          )}
          <h3 className="text-white text-[18px] font-bold text-center mt-3">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="relative left-[20px] sm:left-[28px] pr-4">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-5xl leading-[30px]"
      >
     At the University of Calgary, I’ve had the chance to work on academic and personal projects that strengthened my skills in Python, Java, JavaScript, React, and SQL. Beyond coding, my involvement in student organizations has helped me grow as a collaborator and communicator, teaching me how to work effectively in a team and take on leadership roles. I’m eager to keep building on these experiences and use my skills to create practical, innovative solutions that make a real impact.
      </motion.p>

      <div className="h-12" aria-hidden />

      <div className="flex flex-wrap gap-8 sm:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
