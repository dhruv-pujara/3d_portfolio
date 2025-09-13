import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// ========== ExperienceCard Component ==========
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "rgba(29,24,54,0.95)",
      color: "#fff",
      padding: "24px 20px",
      boxShadow: "0 0 25px rgba(145,94,255,0.3)",
      borderRadius: "16px",
      border: "1px solid rgba(145,94,255,0.3)",
    }}
    contentArrowStyle={{
      borderRight: "7px solid #915EFF",
    }}
    date={experience.date}
    iconStyle={{
      background: experience.iconBg,
      boxShadow: `0 0 20px ${experience.iconBg}, 0 0 40px ${experience.iconBg}`,
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {experience.link ? (
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-[#915EFF]"
          >
            {experience.title}
          </a>
        ) : (
          experience.title
        )}
      </h3>
    </div>

    <ul className="mt-5 list-disc pl-6 sm:pl-8 space-y-5 leading-loose">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[17px] tracking-wide"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// ========== Main Experience Component ==========
const Experience = () => {
  return (
    <div className="relative left-[20px] sm:left-[28px] pr-4">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I've been working on</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          lineColor="rgba(145,94,255,0.5)"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
