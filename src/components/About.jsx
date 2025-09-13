// About.jsx
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    options={{ max: 45, scale: 1, speed: 450 }}
    className="w-[220px] sm:w-[230px] lg:w-[250px]"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="
        bg-gradient-to-r from-[#915EFF] to-[#BF61FF]
        p-[2px]                   /* border thickness */
        rounded-[22px]            /* OUTER radius */
        overflow-hidden           /* clip inner to outer radius */
        shadow-card
      "
    >
      <div
        className="
          bg-[#151030]
          rounded-[16px]          /* INNER radius smaller than outer */
          py-5 px-8 min-h-[300px]
          flex flex-col items-center justify-evenly
        "
      >
        <img src={icon} alt={title} className="w-14 h-14 object-contain" />
        <h3 className="text-white text-[18px] font-bold text-center mt-3">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="relative left-[20px] sm:left-[28px] pr-4">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
      >
        I am an aspiring Computer Science student at the University of Calgary with a passion for
        software development, problem-solving, and emerging technologies. Through my academic
        projects and leadership in student organizations, I’ve gained hands-on experience with tools
        like Java, JavaScript, React, and SQL, while developing strong teamwork and communication
        skills. I am driven to keep learning and applying my knowledge to build innovative, practical
        solutions that create real impact.
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
