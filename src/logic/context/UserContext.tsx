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
    biography: `I came into this world on December 14, 1992, in the vibrant city of Istanbul, Turkey. My early life was uniquely shaped by my father's profession as a policeman, which led my family to move across different cities. This transient lifestyle meant my primary and elementary education was spread across various locations, fostering adaptability and a sense of curiosity about the world around me. Even as a young child, I found myself captivated by the mysteries of the internet and how websites functioned.

    My educational journey took a pivotal turn when my family settled in Ankara, where I was accepted into Ankara Atatürk Anatolian High School. The sense of academic achievement I cultivated during this time propelled me further. I was eventually admitted to the prestigious Middle East Technical University to pursue a degree in Mechanical Engineering. It was during my university years that I discovered my fascination with coding, robotics, and creating innovative solutions through technology.
    
    After completing my studies, I found myself in the dynamic environment of TurkishAerospace, the leading aviation and defense company in Turkey. For six years, I dedicated myself to this company, harnessing my determination and honing both technical and soft skills. However, as time passed, a strong desire to transition into the realm of IT began to take root within me. I found myself increasingly drawn to the world of software development, automation, and the endless possibilities they held.
    
    This desire led me to enroll in a software development course offered by my university's Computer Engineering department. The course provided a glimpse into the realm of coding, igniting a passion within me to create and innovate using technology. The spark was lit, and I began to explore avenues to further enhance my skills and delve deeper into the world of coding.
    
    It was during this quest for growth that I stumbled upon Jagaad Academy. Eager to expand my knowledge, I enrolled in their Frontend Course, a six-month online program that promised a comprehensive learning experience. Little did I know that this decision would be the turning point that would redefine my career trajectory.
    
    Through Jagaad Academy, I not only acquired a diverse range of technical skills but also fostered a problem-solving mindset, a curiosity-driven approach, and a penchant for creativity. Armed with these newfound abilities, I embarked on a journey to secure my first role as a developer, confident in my skills and ready to face new challenges head-on.
    
    Just as I was preparing for interviews in the IT industry, fate had a remarkable twist in store for me. Unexpectedly, Jagaad offered me a position as a junior developer within their team. It was a humbling honor to be recognized by the very institution that had played a pivotal role in shaping my skills and knowledge. However, this wasn't the only opportunity presented to me.
    
    In addition to the developer role, Jagaad extended an invitation for me to join their esteemed team of tutors at Jagaad Academy. The chance to impart knowledge and support aspiring IT professionals in their learning journeys was an offer I couldn't refuse. This role allowed me to give back to the community that had nurtured my growth and development.
    
    As a person, I'm known for my sense of humor, problem-solving acumen, and team-oriented nature. My friends often refer to me as the "genius of the group," a playful moniker that reflects my approach to challenges. Communication comes naturally to me, fostering connections and collaborations that drive me forward.
    
    My journey has been defined by challenges turned into opportunities, from the frequent relocations of my childhood to navigating a shift from aerospace to IT. Along the way, I've been recognized for my achievements — gaining admission to esteemed institutions, excelling in a prominent aerospace company, and graduating as the top performer from Jagaad Academy's Frontend Course.
    
    Currently, I thrive as a Frontend Developer at Jagaad, simultaneously embracing the role of Assistant Tutor at Jagaad Academy. This dual role allows me to continue my journey of learning while also supporting the growth of others. Looking back, my legacy is one of transformation, adaptability, and a relentless pursuit of knowledge.
    `,
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
    "Storybook",
    "Histoire",
    "Postman",
    "headlessUI",
    "Docker",
    "git",
    "Github",
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
      desktopSSUrl:
        "https://github.com/zorro-ftw/meubel-house/assets/86876940/635b102e-eddd-4010-92d9-b9c38ebe424c",
      mobileSSUrl:
        "https://github.com/zorro-ftw/meubel-house/assets/86876940/efc5abf1-2b6a-4b44-be9f-d1b42a813ec9",
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
      desktopSSUrl:
        "https://user-images.githubusercontent.com/86876940/229932839-0ee782c3-e37d-4bf0-bbd4-c36b35b61f54.png",
      mobileSSUrl:
        "https://github.com/zorro-ftw/car-rent/assets/86876940/706aaf7e-70e2-4dc9-a19b-398d9f8845c1",
      liveURL: "https://car-rent-zorro-ftw.vercel.app/dashboard",
      techStack: ["Next.js", "Scss", "HTML", "Javascript", "axios"],
    },
    {
      title: "Student Management System",
      description:
        "A simple web application built with Next.js and Tailwind CSS. This project serves as a practical example of a compact yet efficient student management system with three main pages.",
      alt: "student-management",
      codeURL: "https://github.com/zorro-ftw/course-catalog",
      desktopSSUrl:
        "https://github.com/zorro-ftw/course-catalog/assets/86876940/de449f07-a742-4179-ac26-9b2ef2c640c1",
      mobileSSUrl:
        "https://github.com/zorro-ftw/course-catalog/assets/86876940/ed832045-63cb-4971-bf32-c09ce733fcb1",
      liveURL: "https://course-catalog-navy.vercel.app/",
      techStack: ["Next.js", "Tailwind", "axios", "Context API", "eslint"],
    },
    {
      title: "NFTers",
      description:
        "Landing page for NFT marketplace. Built with HTML, CSS, Scss and Javascript.",
      alt: "nfters",
      codeURL: "https://github.com/zorro-ftw/nfters",
      desktopSSUrl:
        "https://user-images.githubusercontent.com/86876940/227050951-229e1a2e-d815-40ea-a2b3-61d1000ea41c.png",
      mobileSSUrl:
        "https://github.com/zorro-ftw/nfters/assets/86876940/f020be20-dbd5-4a58-af8c-8a843e3e59a3",
      liveURL: "https://zorro-ftw.github.io/nfters/",
      techStack: ["HTML", "CSS", "Javascript", "Scss"],
    },
    {
      title: "Shapevoice",
      description:
        "Landing page UI for a payment system. Pixel-perfect implementation of design with plain HTML & CSS.",
      alt: "shape-voice",
      codeURL: "https://github.com/zorro-ftw/shapevoice-landing",
      desktopSSUrl:
        "https://user-images.githubusercontent.com/86876940/227037475-89cb9f0f-57e6-4df7-96f3-48f69f5dfcbc.png",

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
