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
  samsearch,
  global_tech,
  code_emergancy,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sql,
  python,
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
    title: "Data Anaysis",
    icon: backend,
  },
  {
    title: "Ai/Machine Learning",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences: TExperience[] = [
  {
    title: "Code Emergency LLC",
    // companyName: "Code Emergency LLC",
    icon: code_emergancy, // Placeholder for your icon
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Builtacross-platform pizza delivery app using React Native and Expo, optimized for both iOS and Android with real-time order updates via Supabase.",
      "Implementedintuitive navigation with Expo Router, improving user experience and app usability.",
    ],
  },
  {
    title: " SamSearch",
    // companyName: "SamSearch",
    icon: samsearch, 
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      " Engineeredachatbot using FastAPI and React JS, enhancing user interaction with government contracts through chine learning-driven query responses.",
      "Builtamodular, scalable codebase for session handling, API integration, and document analysis, ensuring long-term maintainability.",
      "Optimizeddata storage and retrieval processes by integrating Astra DB, improving query performance and enabling advanced analysis of vectorized document data."
    ],
  },
  {
    title: "The Global Tech Experience",
    // companyName: "The Global Tech Experience",
    icon: global_tech, 
    iconBg: "#383E56",
    date: "August 2023 - December 2023",
    points: [
      " Developedastock analysis tool using PyQt6 with real-time data integration from the y-finance API for market insights.",
      "Designedadvanced data visualizations with Matplotlib, enhancing user interaction and decision-making.",
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
    name: "Ai Chatbot",
    description:
      "Engineeredachatbot using FastAPI and React JS, enhancing user interaction with government contracts through machine learning-driven query responses.Builtamodular, scalable codebase for session handling, API integration, and document analysis, ensuring long-term maintainability.",
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
      "Builtacross-platform pizza delivery app using React Native and Expo, optimized for both iOS and Android with real-time order updates via Supabase.Implementedintuitive navigation with Expo Router, improving user experience and app usability.",
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
      "Developedastock analysis tool using PyQt6 with real-time data integration from the y-finance API for market insights.Designedadvanced data visualizations with Matplotlib, enhancing user interaction and decision-making.",
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
