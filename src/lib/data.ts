import { StaticImageData } from "next/image";

//project
import Project1 from "/public/project/project1.png";
import Project2 from "/public/project/project2.png";
import Project3 from "/public/project/project3.png";
import Project4 from "/public/project/project4.png";
import Project5 from "/public/project/project5.png";
import Project6 from "/public/project/project6.png";
import Project7 from "/public/project/project7.png";
import Project8 from "/public/project/project8.png";
import Project9 from "/public/project/project9.png";
import Project10 from "/public/project/project10.png";
import Project11 from "/public/project/project11.png";

//education
import College from "/public/education/college.png";
import hss from "/public/education/hss.jpeg";

//skills
import nextjs from "/public/skills/nextjs.png";
import reactjs from "/public/skills/react.png";
import nodejs from "/public/skills/nodejs.png";
import expressjs from "/public/skills/expressjs.png";
import mongodb from "/public/skills/mongodb.png";
import postgresql from "/public/skills/postgresql.png";
import sequelize from "/public/skills/sequelize.png";
import tailwind from "/public/skills/tailwind.png";
import bootstrap from "/public/skills/bootstrap.png";
import html from "/public/skills/html.png";
import css from "/public/skills/css.png";
import javascript from "/public/skills/javascript.png";
import typescript from "/public/skills/typescript.png";
import git from "/public/skills/git.png";
import github from "/public/skills/github.png";
import vercel from "/public/skills/vercel.png";
import vscode from "/public/skills/vscode.png";
import canva from "/public/skills/canva.png";
import vite from "/public/skills/vite.png";
import trello from "/public/skills/trello.png";
import strapi from "/public/skills/strapi.png";

//about

import Picture1 from "/public/about/pic1.jpg";
import Picture2 from "/public/about/pic2.jpg";
import Picture3 from "/public/about/pic3.jpg";
import Picture4 from "/public/about/pic4.jpg";
import Picture5 from "/public/about/pic5.jpg";
import Picture6 from "/public/about/pic6.jpg";

type Link = {
  id: number;
  name: string;
  link: string;
}[];

type Education = {
  id: number;
  logo: StaticImageData;
  name: string;
  location: string;
  course: string;
  year: string;
  link: string;
}[];

type Skills = {
  id: number;
  name: string;
  logo?: StaticImageData | string;
  color?: string;
  link?: string;
};

type Project = {
  id: number;
  banner: StaticImageData | string;
  name: string;
  description: string;
  github_link: string;
  public_link?: string;
  skills: Skills[];
  mobile?: boolean;
}[];

type Experience = {
  id: number;
  role: string;
  company: string;
  date: string;
  link: string;
  responsibilities: string[];
}[];

export const navLinks: Link = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Education",
    link: "/education",
  },
  {
    id: 4,
    name: "Experience",
    link: "/experience",
  },
  {
    id: 5,
    name: "Skills",
    link: "/skills",
  },
  {
    id: 6,
    name: "Project",
    link: "/project",
  },
  {
    id: 7,
    name: "Blogs",
    link: "/blogs",
  },
];

export const education: Education = [
  {
    id: 1,
    name: "Sri C Achutha Menon Govt College",
    location: "Thrissur, Kerala",
    course: "Bsc Computer Science",
    logo: College,
    year: "2021 - 2024",
    link: "https://govtcollegethrissur.ac.in/",
  },
  {
    id: 2,
    name: "CNN Higher Secondary School",
    location: "Thrissur, Kerala",
    course: "Commerce",
    logo: hss,
    year: "2019 - 2021",
    link: "https://www.facebook.com/p/CNN-Higher-Secondary-Schoolcherpu-100066789380754/",
  },
];

export const experience: Experience = [
  {
    id: 1,
    company: "Trebuchet Systems",
    date: "July 2022 - September 2022",
    role: "Front End Intern",
    link: "https://trebuchet.one/",
    responsibilities: [
      "Redesigned the front-end user interface (UI) of the application to improve usability and enhance usersatisfaction.",
      " Successfully integrated the front-end application with the back-end system, ensuring seamless data flow and functionality.",
      " Implemented version control practices using Git, facilitating efficient team collaboration and project management.",
      " Assisted in debugging and troubleshooting front-end issues, ensuring high-quality and bug-free releases.",
    ],
  },
  {
    id: 2,
    company: "TinkerHub GCT(College Community)",
    date: "March 2022 - April 2023",
    role: "Technical Lead",
    link: "https://www.tinkerhub.org/",
    responsibilities: [
      " Organized and led technology workshops and seminars for students, focusing on industry-relevant skillsand trends.",
      " Developed and delivered comprehensive training materials, ensuring clear and effective communication of complex technical concepts",
      " Facilitated hands-on sessions, enabling students to apply learned skills in real-world scenarios.",
    ],
  },
];

export const skills: Skills[] = [
  {
    id: 1,
    name: "Next JS",
    logo: nextjs,
    link: "https://nextjs.org/",
  },
  {
    id: 2,
    name: "React JS",
    logo: reactjs,
    link: "https://react.dev/",
  },
  {
    id: 3,
    name: "Node JS",
    logo: nodejs,
    link: "https://nodejs.org/en",
  },
  {
    id: 4,
    name: "Express JS",
    logo: expressjs,
    link: "https://expressjs.com/",
  },
  {
    id: 5,
    name: "MongoDB",
    logo: mongodb,
    link: "https://www.mongodb.com/",
  },
  {
    id: 6,
    name: "PostgreSQL",
    logo: postgresql,
    link: "https://www.postgresql.org/",
  },
  {
    id: 7,
    name: "HTML",
    logo: html,
    link: "https://www.w3schools.com/html/",
  },
  {
    id: 8,
    name: "CSS",
    logo: css,
    link: "https://www.w3schools.com/css/",
  },
  {
    id: 9,
    name: "JavaScript",
    logo: javascript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 10,
    name: "TypeScript",
    logo: typescript,
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 11,
    name: "Git",
    logo: git,
    link: "https://git-scm.com/",
  },
  {
    id: 12,
    name: "GitHub",
    logo: github,
    link: "https://github.com/",
  },
  {
    id: 13,
    name: "Tailwind",
    logo: tailwind,
    link: "https://tailwindcss.com/",
  },
  {
    id: 14,
    name: "Bootstrap",
    logo: bootstrap,
    link: "https://getbootstrap.com/",
  },
  {
    id: 15,
    name: "Sequelize",
    logo: sequelize,
    link: "https://sequelize.org/",
  },
  {
    id: 16,
    name: "Trello",
    logo: trello,
    link: "https://trello.com/",
  },
  {
    id: 17,
    name: "Vercel",
    logo: vercel,
    link: "https://vercel.com/",
  },
  {
    id: 18,
    name: "Vite",
    logo: vite,
    link: "https://vitejs.dev/",
  },
  {
    id: 19,
    name: "VS Code",
    logo: vscode,
    link: "https://code.visualstudio.com/",
  },
  {
    id: 20,
    name: "Canva",
    logo: canva,
    link: "https://www.canva.com/",
  },
  {
    id: 21,
    name: "Strapi",
    logo: strapi,
    link: "https://strapi.io/",
  },
];

export const projects: Project = [
  {
    id: 1,
    banner: Project11,
    description: "daily.dev clone - blog application using Next js",
    github_link: "https://github.com/vivinkv6/daily-dev-clone",
    name: "Daily Dev Clone",
    public_link: "https://daily-dev-clone.vercel.app/",
    skills: [
      {
        id: 1,
        name: "Next JS",
        color: "#000000",
      },
      {
        id: 2,
        name: "TypeScript",
        color: "#3178C6",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        color: "#38B2AC",
      },
      {
        id: 4,
        name: "Daily Dev API",
        color: "#000000",
      },
    ],
  },
  {
    id: 2,
    banner: Project1,
    description: "finance dashboard",
    github_link: "https://github.com/vivinkv6/finance-dashboard",
    name: "Finance Dashboard",
    public_link: "https://findas.vercel.app/",
    skills: [
      {
        id: 1,
        name: "Next JS",
        color: "#000000",
      },
      {
        id: 2,
        name: "TypeScript",
        color: "#3178C6",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        color: "#38B2AC",
      },
      {
        id: 4,
        name: "Next Auth",
        color: "#000000",
      },
      {
        id: 5,
        name: "PostgreSQL",
        color: "#336791",
      },
    ],
  },
  {
    id: 3,
    banner: Project2,
    description: "List down all movies list",
    github_link: "https://github.com/vivinkv6/movie-dashboard",
    name: "Movie Dashboard",
    public_link: "https://nextmdb.vercel.app/",
    skills: [
      {
        id: 1,
        name: "Next JS",
        color: "#000000",
      },
      {
        id: 2,
        name: "TypeScript",
        color: "#3178C6",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        color: "#38B2AC",
      },
      {
        id: 4,
        name: "TMDB API",
        color: "#01D277",
      },
    ],
  },
  {
    id: 4,
    banner: Project3,
    description: "General quiz application using react",
    github_link: "https://github.com/vivinkv6/quiz-app",
    name: "Quiz Application",
    public_link: "https://reactquizzapp.vercel.app/",
    skills: [
      {
        id: 1,
        name: "React JS",
        color: "#1fc1ed",
      },
      {
        id: 2,
        name: "TypeScript",
        color: "#3178C6",
      },
      {
        id: 3,
        name: "Tailwind",
        color: "#38B2AC",
      },
      {
        id: 4,
        name: "Framer Motion",
        color: "#0055FF",
      },
    ],
  },
  {
    id: 5,
    banner: Project4,
    description: "Event sharing platform",
    github_link: "https://github.com/vivinkv6/tech-connect-hub",
    name: "Tech Connect Hub",
    skills: [
      {
        id: 1,
        name: "Node JS",
        color: "#339933",
      },
      {
        id: 2,
        name: "Express JS",
        color: "#000000",
      },
      {
        id: 3,
        name: "Bootstrap",
        color: "#7952B3",
      },
      {
        id: 4,
        name: "AOS",
        color: "#000000",
      },
      {
        id: 5,
        name: "EJS",
        color: "#A91E50",
      },
      {
        id: 6,
        name: "PostgreSQL",
        color: "#336791",
      },
      {
        id: 7,
        name: "Sequelize",
        color: "#52B0E7",
      },
    ],
  },
  {
    id: 6,
    banner: Project5,
    description: "short note application",
    github_link: "https://github.com/vivinkv6/mern-note-frontend",
    name: "Note Application",
    skills: [
      {
        id: 1,
        name: "Node JS",
        color: "#339933",
      },
      {
        id: 2,
        name: "Express JS",
        color: "#000000",
      },
      {
        id: 3,
        name: "Tailwind",
        color: "#38B2AC",
      },
      {
        id: 4,
        name: "React JS",
        color: "#1fc1ed",
      },
      {
        id: 5,
        name: "TypeScript",
        color: "#3178C6",
      },
      {
        id: 6,
        name: "MongoDB",
        color: "#47A248",
      },
    ],
  },
  {
    id: 7,
    banner: Project6,
    description: "Pexels clone using ejs, node js, express",
    github_link: "https://github.com/vivinkv6/pexel-clone",
    public_link: "https://pexel.onrender.com/",
    name: "Pexels Clone",
    skills: [
      {
        id: 1,
        name: "Node JS",
        color: "#339933",
      },
      {
        id: 2,
        name: "Express JS",
        color: "#000000",
      },
      {
        id: 3,
        name: "EJS",
        color: "#A91E50",
      },
      {
        id: 4,
        name: "Bootstrap",
        color: "#7952B3",
      },
      {
        id: 5,
        name: "Pexel API",
        color: "#000000",
      },
    ],
  },
  {
    id: 8,
    banner: Project7,
    description: "Expense tracker using react",
    github_link: "https://github.com/vivinkv6/budget-tracker",
    public_link: "https://expense-tracker-vivinkv6.vercel.app/",
    name: "Budget Tracker",
    skills: [
      {
        id: 1,
        name: "React JS",
        color: "#1fc1ed",
      },
      {
        id: 2,
        name: "JavaScript",
        color: "#e6d33e",
      },
      {
        id: 3,
        name: "Bootstrap",
        color: "#7952B3",
      },
    ],
  },
  {
    id: 9,
    banner: Project8,
    description: "BMI Calculator using react",
    github_link: "https://github.com/vivinkv6/BMI-Calculator",
    public_link: "https://bmi-calculator-liart.vercel.app/",
    name: "BMI Calculator",
    skills: [
      {
        id: 1,
        name: "React JS",
        color: "#1fc1ed",
      },
      {
        id: 2,
        name: "JavaScript",
        color: "#e6d33e",
      },
      {
        id: 3,
        name: "Bootstrap",
        color: "#7952B3",
      },
    ],
  },

  {
    id: 10,
    banner: Project9,
    description: "Github UI clone using react native",
    github_link: "https://github.com/vivinkv6/github-clone",
    name: "GitHub Clone",
    mobile: true,
    skills: [
      {
        id: 1,
        name: "React Native",
        color: "#1fc1ed",
      },
      {
        id: 2,
        name: "TypeScript",
        color: "#3178C6",
      },
      {
        id: 3,
        name: "Expo",
        color: "#000020",
      },
      {
        id: 4,
        name: "Expo Router",
        color: "#000020",
      },
      {
        id: 5,
        name: "GitHub API",
        color: "#181717",
      },
    ],
  },
  {
    id: 11,
    banner: Project10,
    description: "Youtube UI clone using react native",
    github_link: "https://github.com/vivinkv6/youtube-clone",
    name: "YouTube Clone",
    mobile: true,
    skills: [
      {
        id: 1,
        name: "React Native",
        color: "#1fc1ed",
      },
      {
        id: 2,
        name: "TypeScript",
        color: "#3178C6",
      },
      {
        id: 3,
        name: "Expo",
        color: "#000020",
      },
      {
        id: 4,
        name: "Expo Router",
        color: "#000020",
      },
      {
        id: 5,
        name: "YouTube API",
        color: "#FF0000",
      },
    ],
  },
];

export const AboutPage: string[] = [
  "/about/pic1.jpg",
  "/about/pic2.jpg",
  "/about/pic3.jpg",
  "/about/pic4.jpg",
  "/about/pic5.jpg",
  "/about/pic6.jpg",
];
