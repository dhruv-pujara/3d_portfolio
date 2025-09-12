// constants/index.js

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  crystals,
  cauldron,
  mortar,
  moon,
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
    title: "Full-Stack Developer",
    icon: crystals,
  },
  {
    title: "Frontend Developer (React / JavaScript)",
    icon: cauldron,
  },
  {
    title: "Backend Developer (Node.js / SQL)",
    icon: mortar,
  },
  {
    title: "AI & Cybersecurity Enthusiast",
    icon: moon,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
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
      "Designing a pipeline monitoring system aimed at improving inspection efficiency by 40%.",
      "Developing real-time alerts and automated scheduling features to enhance issue detection.",
      "Projecting a 50% faster issue detection rate to improve pipeline safety and operations.",
      "Tested various pipeline failure cases to ensure reliable performance under different real-world scenarios."
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
      "Enhanced user experience with a clean JavaFX layout and responsive components for seamless data interaction."
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
      "Created customizable board size and win conditions for dynamic difficulty.",
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
      "Integrated entity creation with attributes like health, armor, weapons, and unique symbols.",
    ],
    link: "https://github.com/dhruv-pujara/Robot-Wars-Grid-Based-Battle-Simulator",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
