// type TSection = {
//   p: string;
//   h2: string;
//   content?: string;
// };

// type TConfig = {
//   html: {
//     title: string;
//     fullName: string;
//     email: string;
//   };
//   hero: {
//     name: string;
//     p: string[];
//   };
//   contact: {
//     form: {
//       name: {
//         span: string;
//         placeholder: string;
//       };
//       email: {
//         span: string;
//         placeholder: string;
//       };
//       message: {
//         span: string;
//         placeholder: string;
//       };
//     };
//   } & TSection;
//   sections: {
//     about: Required<TSection>;
//     experience: TSection;
//     feedbacks: TSection;
//     works: Required<TSection>;
//   };
// };

// export const config: TConfig = {
//   html: {
//     title: "Yosef Shammout",
//     fullName: "Yosef Shammout",
//     email: "yosefshammout123@gmail.com",
//   },
//   hero: {
//     name: "Yosef Shammout",
//     p: ["I develop 3D visuals, user", "interfaces and web applications"],
//   },
//   contact: {
//     p: "Get in touch",
//     h2: "Contact.",
//     form: {
//       name: {
//         span: "Your Name",
//         placeholder: "What's your name?",
//       },
//       email: { span: "Your Email", placeholder: "What's your email?" },
//       message: {
//         span: "Your Message",
//         placeholder: "What do you want to say?",
//       },
//     },
//   },
//   sections: {
//     about: {
//       p: "Introduction",
//       h2: "Overview.",
//       content: `I'm a skilled software developer with experience in TypeScript and
//       JavaScript, and expertise in frameworks like React, Node.js, and
//       Three.js. I'm a quick learner and collaborate closely with clients to
//       create efficient, scalable, and user-friendly solutions that solve
//       real-world problems. Let's work together to bring your ideas to life!`,
//     },
//     experience: {
//       p: "What I have done so far",
//       h2: "Work Experience.",
//     },
//     feedbacks: {
//       p: "What others say",
//       h2: "Testimonials.",
//     },
//     works: {
//       p: "My work",
//       h2: "Projects.",
//       content: `Following projects showcases my skills and experience through
//     real-world examples of my work. Each project is briefly described with
//     links to code repositories and live demos in it. It reflects my
//     ability to solve complex problems, work with different technologies,
//     and manage projects effectively.`,
//     },
//   },
// };


type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Yosef Shammout",
    fullName: "Yosef Shammout",
    email: "yosefshammout123@gmail.com",
  },
  hero: {
    name: "Yosef Shammout",
    p: [
      "I specialize in building scalable web platforms, intuitive interfaces, and advanced software solutions, with expertise in Django, FastAPI, and Astra DB for backend development."
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a U.S. citizen currently pursuing a B.S. in Computer Science at Wayne State University, specializing in Software Engineering. 
      I have experience in backend development, building HIPAA-compliant platforms, scalable chatbots, and modular systems using Django, React, and AWS. 
      I'm also proficient in data analysis and process automation, driven by strong skills in Python and SQL.`,
    },
    experience: {
      p: "My professional journey",
      h2: "Work Experience.",
      content: `● Cofounder & CEO at Code Emergency LLC: Led development of a HIPAA-compliant platform enabling emergency personnel to access patient data via secure QR codes. Deployed on AWS for scalability and security.\n
      ● Software Engineer Intern at SamSearch: Developed a chatbot using FastAPI and React, leveraging machine learning for enhanced query responses.\n
      ● SQL and Python Specialist Intern at The Global Tech Experience: Conducted data analysis for The Recording Academy, significantly improving system performance and security.`,
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
      // Placeholder for future feedback
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcase my technical expertise:\n
      ● Pizza Delivery App: Built a cross-platform app with React Native and Expo, optimized for real-time updates.\n
      ● Stock Analysis Tool: Created a stock analysis tool with real-time market insights using PyQt6 and Matplotlib.`,
    },
  },
};

