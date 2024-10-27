import { createContext } from "react";

export const UserContext = createContext<ContextProps>({
  userData: { fullName: "", biography: "", motto: "" },
  routersArray: [
    {
      icon: ["", ""],
      text: "",
      navigatesTo: "",
    },
  ],
  skillsArray: [],
  socialsArray: [],
  projectsArray: [],
});

type ChildrenProps = {
  children: React.ReactNode;
};

type ContextProps = {
  userData: UserDataProp;
  routersArray: RouterProp[];
  skillsArray: string[];
  socialsArray: SocialProps[];
  projectsArray: ProjectProps[];
};

type UserDataProp = {
  fullName: string;
  biography: string;
  motto: string;
};

type RouterProp = {
  icon: [string, string];
  text: string;
  navigatesTo: string;
};

type SocialProps = {
  link: string;
  alt: string;
};

export type ProjectProps = {
  title: string;
  description?: string;
  alt: string;
  codeURL: string;
  desktopSSUrl: string;
  mobileSSUrl?: string;
  liveURL?: string;
  techStack?: string[];
};

export function UserProvider({ children }: ChildrenProps) {
  const userData: UserDataProp = {
    fullName: "Salih Zorer",
    biography: `I was born on December 14, 1992, in Istanbul, Turkey. My interest in technology and websites started early, and over time, I explored various engineering fields, particularly in automation, robotics, and electronics. I pursued a degree in Mechanical Engineering at Middle East Technical University, where coding became an essential tool in solving complex engineering problems. This early exposure cemented my passion for software development.

After graduation, I worked for six years at TurkishAerospace as a Manufacturing Engineer, contributing to various aircraft projects and refining my technical and problem-solving skills. However, my growing interest in software development led me to enroll in a condensed software development course offered by my university. During the pandemic, I made the most of the situation to shift my career direction towards becoming a developer.

Initially focusing on Flutter, I soon realized that Frontend Development offered broader opportunities. I joined Jagaad Academy’s six-month Frontend course and graduated with top honors. Following this, I spent a full year at Jagaad as a Junior Frontend Developer and Assistant Tutor, where I mentored aspiring developers.

Currently, I have been working as a Frontend Developer at Datazone for half a year. Datazone is a rapidly growing Data Manipulation Platform startup, serving three enterprise customers even before its public launch. We are on the verge of a public launch, and I'm excited to be part of a team that is shaping the future of data solutions.`,
    motto: '"Once you stop learning, you start dying."',
  };

  // Routers in NavBar
  const routersArray: RouterProp[] = [
    {
      icon: ["fa-solid", "fa-house"],
      text: "Home",
      navigatesTo: "/",
    },
    {
      icon: ["fa-solid", "fa-laptop-code"],
      text: "Projects",
      navigatesTo: "/projects",
    },
    {
      icon: ["fa-solid", "fa-user"],
      text: "About",
      navigatesTo: "/about",
    },
    {
      icon: ["fa-solid", "fa-file-lines"],
      text: "CV",
      navigatesTo: "/cv",
    },
  ];

  // Skills in Home page
  const skillsArray: string[] = [
    "React",
    "Vue.js",
    "Next.js",
    "Nuxt.js",
    "Javascript",
    "Typescript",
    "Tailwind",
    "HTML",
    "CSS",
    "Sass",
    "GraphQL",
    "Storybook",
    "Histoire",
    "Postman",
    "headlessUI",
    "Docker",
    "git",
    "Github",
    "GitLab",
    "Figma",
  ];

  // Social links
  const socialsArray: SocialProps[] = [
    {
      link: "mailto:zorer.salih@gmail.com",
      alt: "Email",
    },
    {
      link: "https://www.linkedin.com/in/zorersalih/",
      alt: "Linkedin",
    },
    {
      link: "https://github.com/zorro-ftw",
      alt: "Github",
    },
  ];

  const projectsArray: ProjectProps[] = [
    {
      title: "Meubel House",
      description:
        "E-commerce website project for a furniture shop. Featuring multiple pages such as Home, Shop, Cart, Checkout, single product pages and more along with login and cart operations functionality. Built with React and styled-components.",
      alt: "meubel-house",
      codeURL: "https://github.com/zorro-ftw/meubel-house",
      desktopSSUrl: "/assets/meubel-house-desktop.webp",
      mobileSSUrl: "/assets/meubel-house-mobile.webp",
      liveURL: "https://loquacious-cendol-fff34b.netlify.app/",
      techStack: [
        "React",
        "Javascript",
        "Scss",
        "styled-components",
        "axios",
        "eslint",
        "Context API",
      ],
    },
    {
      title: "Car Rent",
      description:
        "A dashboard page for car rental company, built with Next.js.",
      alt: "car-rental",
      codeURL: "https://github.com/zorro-ftw/car-rent",
      desktopSSUrl: "/assets/car-rent-desktop.webp",
      mobileSSUrl: "/assets/car-rent-mobile.webp",
      liveURL: "https://car-rent-zorro-ftw.vercel.app/dashboard",
      techStack: ["Next.js", "Scss", "HTML", "Javascript", "axios"],
    },
    {
      title: "Student Management System",
      description:
        "A simple web application built with Next.js and Tailwind CSS. This project serves as a practical example of a compact yet efficient student management system with three main pages.",
      alt: "student-management",
      codeURL: "https://github.com/zorro-ftw/course-catalog",
      desktopSSUrl: "/assets/course-catalog-desktop.webp",
      mobileSSUrl: "/assets/course-catalog-mobile.webp",
      liveURL: "https://course-catalog-navy.vercel.app/",
      techStack: ["Next.js", "Tailwind", "axios", "Context API", "eslint"],
    },
    {
      title: "NFTers",
      description:
        "Landing page for NFT marketplace. Built with HTML, CSS, Scss and Javascript.",
      alt: "nfters",
      codeURL: "https://github.com/zorro-ftw/nfters",
      desktopSSUrl: "/assets/nfters-desktop.webp",
      mobileSSUrl: "/assets/nfters-mobile.webp",
      liveURL: "https://zorro-ftw.github.io/nfters/",
      techStack: ["HTML", "CSS", "Javascript", "Scss"],
    },
    {
      title: "Shapevoice",
      description:
        "Landing page UI for a payment system. Pixel-perfect implementation of design with plain HTML & CSS.",
      alt: "shape-voice",
      codeURL: "https://github.com/zorro-ftw/shapevoice-landing",
      desktopSSUrl: "/assets/shapevoice-desktop.webp",
      liveURL: "https://zorro-ftw.github.io/shapevoice-landing/",
      techStack: ["HTML", "CSS"],
    },
  ];

  return (
    <UserContext.Provider
      value={{
        userData,
        routersArray,
        skillsArray,
        socialsArray,
        projectsArray,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
