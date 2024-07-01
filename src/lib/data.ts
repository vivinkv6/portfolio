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
};

type Project = {
  id: number;
  banner: StaticImageData | string;
  name: string;
  description: string;
  github_link: string;
  public_link?: string;
  skills: Skills[];
  mobile?:boolean
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
  },
  {
    id: 2,
    name: "React JS",
    logo: reactjs,
  },
  {
    id: 3,
    name: "Node JS",
    logo: nodejs,
  },
  {
    id: 4,
    name: "Express JS",
    logo: expressjs,
  },
  {
    id: 5,
    name: "MongoDB",
    logo: mongodb,
  },
  {
    id: 6,
    name: "PostgreSQL",
    logo: postgresql,
  },
  {
    id: 7,
    name: "HTML",
    logo: html,
  },
  {
    id: 8,
    name: "CSS",
    logo: css,
  },
  {
    id: 9,
    name: "JavaScript",
    logo: javascript,
  },
  {
    id: 10,
    name: "TypeScript",
    logo: typescript,
  },
  {
    id: 11,
    name: "Git",
    logo: git,
  },
  {
    id: 12,
    name: "GitHub",
    logo: github,
  },
  {
    id: 13,
    name: "Tailwind",
    logo: tailwind,
  },
  {
    id: 14,
    name: "Bootstrap",
    logo: bootstrap,
  },
  {
    id: 15,
    name: "Sequelize",
    logo: sequelize,
  },
  {
    id: 16,
    name: "Trello",
    logo: trello,
  },
  {
    id: 17,
    name: "Vercel",
    logo: vercel,
  },
  {
    id: 18,
    name: "Vite",
    logo: vite,
  },
  {
    id: 19,
    name: "VS Code",
    logo: vscode,
  },
  {
    id: 20,
    name: "Canva",
    logo: canva,
  },
];

export const projects: Project = [
  {
    id: 1,
    banner: Project1,
    description: "dfdf",
    github_link: "https://github.com/vivinkv6/finance-dashboard",
    name: "Finance Dashboard",
    public_link: "https://findas.vercel.app/",
    skills: [
      {
        id: 1,
        name: "Next JS",
      },
      {
        id: 2,
        name: "TypeScript",
      },
      {
        id: 3,
        name: "Tailwind CSS",
      },
      {
        id: 4,
        name: "Next Auth",
      },
      {
        id: 5,
        name: "PostgreSQL",
      },
    ],
  },
  {
    id: 2,
    banner: Project2,
    description: "dfdf",
    github_link: "https://github.com/vivinkv6/movie-dashboard",
    name: "Movie Dashboard",
    public_link: "https://nextmdb.vercel.app/",
    skills: [
      {
        id: 1,
        name: "Next JS",
        logo: "",
      },
      {
        id: 2,
        name: "TypeScript",
        logo: "",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        logo: "",
      },
      {
        id: 4,
        name: "TMDB API",
        logo: "",
      },
    ],
  },
  {
    id: 3,
    banner: Project3,
    description: "dfdf",
    github_link: "https://github.com/vivinkv6/quiz-app",
    name: "Quiz Application",
    public_link: "https://reactquizzapp.vercel.app/",
    skills: [
      {
        id: 1,
        name: "React JS",
        logo: "",
      },
      {
        id: 2,
        name: "TypeScript",
        logo: "",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        logo: "",
      },
      {
        id: 4,
        name: "Framer Motion",
        logo: "",
      },
    ],
  },
  {
    id: 4,
    banner: Project4,
    description: "dfdf",
    github_link: "https://github.com/vivinkv6/tech-connect-hub",
    name: "Tech Connect Hub",
    skills: [
      {
        id: 1,
        name: "Node JS",
        logo: "",
      },
      {
        id: 2,
        name: "Express JS",
        logo: "",
      },
      {
        id: 3,
        name: "Bootstrap",
        logo: "",
      },
      {
        id: 4,
        name: "AOS",
        logo: "",
      },
      {
        id: 5,
        name: "EJS",
        logo: "",
      },
      {
        id: 6,
        name: "PostgreSQL",
        logo: "",
      },
      {
        id: 7,
        name: "Sequelize",
        logo: "",
      },
    ],
  },
  {
    id: 5,
    banner: Project5,
    description: "dfdf",
    github_link: "https://github.com/vivinkv6/mern-note-frontend",
    name: "Note Application",
    skills: [
      {
        id: 1,
        name: "Node JS",
        logo: "",
      },
      {
        id: 2,
        name: "Express JS",
        logo: "",
      },
      {
        id: 3,
        name: "Tailwind",
        logo: "",
      },
      {
        id: 4,
        name: "React JS",
        logo: "",
      },
      {
        id: 5,
        name: "TypeScript",
        logo: "",
      },
      {
        id: 6,
        name: "MongoDB",
        logo: "",
      },
    ],
  },
  {
    id: 6,
    banner: Project6,
    description: "dfdf",
    github_link: "https://github.com/vivinkv6/pexel-clone",
    public_link: "https://pexel.onrender.com/",
    name: "Pexels Clone",
    skills: [
      {
        id: 1,
        name: "Node JS",
        logo: "",
      },
      {
        id: 2,
        name: "Express JS",
        logo: "",
      },
      {
        id: 3,
        name: "EJS",
        logo: "",
      },
      {
        id: 4,
        name: "Bootstrap",
        logo: "",
      },
      {
        id: 5,
        name: "Pexel API",
        logo: "",
      },
    ],
  },
  {
    id: 7,
    banner: Project7,
    description: "dfdf",
    github_link: "https://github.com/vivinkv6/budget-tracker",
    public_link: "https://expense-tracker-vivinkv6.vercel.app/",
    name: "Budget Tracker",
    skills: [
      {
        id: 1,
        name: "React JS",
        logo: "",
      },
      {
        id: 2,
        name: "JavaScript",
        logo: "",
      },
      {
        id: 3,
        name: "Bootstrap",
        logo: "",
      },
    ],
  },
  {
    id: 8,
    banner: Project8,
    description: "dfdf",
    github_link: "https://github.com/vivinkv6/BMI-Calculator",
    public_link: "https://bmi-calculator-liart.vercel.app/",
    name: "BMI Calculator",
    skills: [
      {
        id: 1,
        name: "React JS",
        logo: "",
      },
      {
        id: 2,
        name: "JavaScript",
        logo: "",
      },
      {
        id: 3,
        name: "Bootstrap",
        logo: "",
      },
    ],
  },

  {
    id: 9,
    banner:Project9,
    description: "dfdf",
    github_link: "https://github.com/vivinkv6/github-clone",
    name: "GitHub Clone",
    mobile:true,
    skills: [
      {
        id: 1,
        name: "React Native",
        logo: "",
      },
      {
        id: 2,
        name: "TypeScript",
        logo: "",
      },
      {
        id: 3,
        name: "Expo",
        logo: "",
      },
      {
        id: 4,
        name: "Expo Router",
        logo: "",
      },
      {
        id: 5,
        name: "GitHub API",
        logo: "",
      },
    ],
  },
  {
    id: 10,
    banner:Project10,
    description: "dfdf",
    github_link: "https://github.com/vivinkv6/youtube-clone",
    name: "YouTube Clone",
    mobile:true,
    skills: [
      {
        id: 1,
        name: "React Native",
        logo: "",
      },
      {
        id: 2,
        name: "TypeScript",
        logo: "",
      },
      {
        id: 3,
        name: "Expo",
        logo: "",
      },
      {
        id: 4,
        name: "Expo Router",
        logo: "",
      },
      {
        id: 5,
        name: "YouTube API",
        logo: "",
      },
    ],
  },
];
