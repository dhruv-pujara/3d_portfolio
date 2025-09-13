// constants/index.js

import {
  shuttle,
  galaxy,
  falling,
  planet,

} from "../assets";


import pipeline from "../assets/company/valve.png";
import robot from "../assets/company/robot.png";
import gamepad from "../assets/company/gamepad.png";
import binarycode from "../assets/company/programming.png";
import basketball from "../assets/company/basketball.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Problem Solving & Algorithms",
    icon: planet,
  },
  {
    title: "Frontend Developer (React / JavaScript)",
    icon: shuttle,
  },
  {
    title: "Backend Developer (Node.js / SQL)",
    icon: falling,
  },
  {
    title: "AI & Cybersecurity Enthusiast",
    icon: galaxy,
  },
];



const experiences = [
  {
    title: "Personal Portfolio Website",
    company_name: "Self-Initiated Project",
    icon: binarycode,
    iconBg: "#915EFF",
    date: "Sept 2025 – Present",
    points: [
      "Developed a visually striking and fully responsive personal portfolio using React, Tailwind CSS, Framer Motion, and Three.js.",
      "Integrated interactive 3D elements with Three.js to elevate user engagement and visual appeal.",
      "Implemented smooth animations, intuitive navigation, and mobile-first design for an optimal browsing experience.",
]

  },
  {
  title: "Pipeline Monitoring System",
  company_name: "Personal Project",
  icon: pipeline,
  iconBg: "#383E56",
  date: "Jan 2025 – June 2025",
  points: [
    "Designed a pipeline monitoring system using React, TypeScript, and MySQL/MongoDB to improve inspection efficiency by 40% and reduce leak response time.",
    "Built real-time alerts and automated scheduling features leveraging Node.js backend and database integration for enhanced issue detection.",
    "Projected a 50% faster detection rate through streamlined workflows, improving pipeline safety and operational efficiency.",
  ],
  link: "https://github.com/dhruv-pujara/Pipeline-Monitoring-System",
},

  {
    title: "Basketball Tracker Application",
    company_name: "Academic Project",
    icon: basketball,
    iconBg: "#E6DEDD",
    date: "Feb 2024 – Jun 2024",
    points: [
      "Built a JavaFX GUI to track player statistics with 15+ metrics (points, rebounds, assists, etc.).",
      "Implemented file-based data persistence for 100% accurate saved game retrieval.",
      "Collaborated in a team of 4 to design an OOP solution that improved performance tracking by 30%.",
    ],
    link: "https://github.com/dhruv-pujara/Baller-Basketball-Statistics-Tracker",
  },
  {
    title: "Connect-L: Modified Connect-4 Game",
    company_name: "Academic Project",
    icon: gamepad,
    iconBg: "#FF7F50",
    date: "Jan 2024 – Feb 2024",
    points: [
      "Developed a Java-based Connect-4 variant where players win by forming an L-shaped pattern.",
      "Implemented a GUI with Swing for interactive gameplay and mouse-based controls.",
      "Designed a hint system to help players find optimal moves based on game state.",
    ],
    link: "https://github.com/dhruv-pujara/Connect-L-Modified-Connect-4-Game",
  },
  {
    title: "Robot Wars: Grid-Based Battle Simulator",
    company_name: "Academic Project",
    icon: robot,
    iconBg: "#1F6F78",
    date: "Jan 2024 – Apr 2024",
    points: [
      "Built a JavaFX-based battle simulator featuring customizable grid-based combat between PredaCons and Maximals.",
      "Implemented GUI for intuitive interaction including battle creation, entity placement, and combat controls.",
      "Enabled saving/loading of battles via text files for persistent and shareable game states.",
    ],
    link: "https://github.com/dhruv-pujara/Robot-Wars-Grid-Based-Battle-Simulator",
  },
];


export { services, experiences};
