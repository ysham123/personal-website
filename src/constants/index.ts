import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  python,
  reactjs,
  sql,
  samsearch,
  global_tech,
  code_emergancy,
  chatbot,
  analysis,
  pizza_app
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "AI/Machine Learning Engineer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: sql
  },
];

const experiences: TExperience[] = [
  {
    companyName: "Code Emergency LLC",
    title: "Cofounder & CEO",
    icon: code_emergancy,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Built a HIPAA-compliant web platform enabling emergency personnel to instantly access critical patient information via secure, custom QR codes.",
      "Led full-stack development using Django for backend operations and React JS for a dynamic, user-friendly frontend, ensuring seamless performance.",
    ],
  },
  {
    companyName: "SamSearch",
    title: "Software Engineer Intern",
    icon: samsearch, 
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
      "Engineered a chatbot using FastAPI and React JS, enhancing user interaction with government contracts through machine learning-driven query responses.",
      "Built a modular, scalable codebase for session handling, API integration, and document analysis, ensuring long-term maintainability.",
      "Optimized data storage and retrieval processes by integrating Astra DB, improving query performance and enabling advanced analysis of vectorized document data."
    ],
  },
  {
    companyName: "The Global Tech Experience",
    title: "SQL and Python Specialist Intern",
    icon: global_tech, 
    iconBg: "#383E56",
    date: "August 2023 - December 2023",
    points: [
      "Conducted in-depth data analysis for The Recording Academy’s website project, leveraging SQL and Python for data querying and visualization.",
      "Developed automation scripts in Python, driving process improvements and supporting data-driven decision-making.",
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "AI Chatbot",
    description:
      "Engineered a chatbot using FastAPI and React JS, enhancing user interaction with government contracts through machine learning-driven query responses. Built a modular, scalable codebase for session handling, API integration, and document analysis, ensuring long-term maintainability.",
    tags: [
      {
        name: "FastAPI",
        color: "blue-text-gradient",
      },
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "Astra DB",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Pizza Delivery App",
    description:
      "Built a cross-platform pizza delivery app using React Native and Expo, optimized for both iOS and Android with real-time order updates via Supabase. Implemented intuitive navigation with Expo Router, improving user experience and app usability.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
    ],
    image: pizza_app,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Stock Analysis",
    description:
      "Developed a stock analysis tool using PyQt6 with real-time data integration from the y-finance API for market insights. Designed advanced data visualizations with Matplotlib, enhancing user interaction and decision-making.",
    tags: [
      {
        name: "PyQt6",
        color: "blue-text-gradient",
      },
      {
        name: "y-finance API",
        color: "green-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: analysis,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
