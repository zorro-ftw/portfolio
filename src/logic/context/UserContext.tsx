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
    biography: `I came into this world on December 14, 1992, in the vibrant city of Istanbul, Turkey. Even as a young child, I found myself captivated by the mysteries of the internet and how websites functioned.

    My educational journey lead me into Ankara Atatürk Anatolian High School. Later on I developed a more general engineering interests for automation, robotics & electronics. Eventually I ended up admitted to the prestigious Middle East Technical University to pursue a degree in Mechanical Engineering. Learning and using different coding tools and concepts to solve complex mechanism behaviors, robotic systems etc only fueled my interest about coding. I knew that I was going to be doing it as a living one day.

    After completing my studies, I found myself in the dynamic environment of TurkishAerospace, the leading aviation and defense company in Turkey. For six years, I dedicated myself to this company as a Manufacturing engineer; working on different type of aircraft projects and making the designs into a real, flying aircrafts, harnessing my determination and honing both technical and soft skills along the way. However, as time passed, a strong desire to transition into the realm of IT began to take root within me. I found myself increasingly drawn to the world of software development, automation, and the endless possibilities they held.

    By making 2020 covid pandemic and relaxed working conditions at the time an opportunity, I enrolled in a software development course offered by my university's Computer Engineering department. The course was a filtered down/condensed version of computer engineering study in the university and it provided a glimpse into the realm of coding. I tried to land a job as Flutter developer for a while, finally giving up on the idea because the title was so niche and vacancies were tough to grab for someone switching careers into it.

    I changed my direction towards Frontend Developer, realizing the endless opportunities in web development and that the concept was pretty much same to interact with end users. It was during this time that I stumbled upon Jagaad Academy. Eager to expand my knowledge, I enrolled in their Frontend Course, a six-month online program that promised a comprehensive learning experience.

    I graduated with a remarkable success from this program in the 1st place. Just as I was preparing for interviews in the IT industry, fate had a remarkable twist in store for me. Unexpectedly, Jagaad offered me a position as a junior developer within their team. It was a humbling honor to be recognized by the very institution that had played a pivotal role in shaping my skills and knowledge. However, this wasn't the only opportunity presented to me.

    In addition to the developer role, Jagaad extended an invitation for me to join their esteemed team of tutors at Jagaad Academy. The chance to impart knowledge and support aspiring IT professionals in their learning journeys was an offer I couldn't refuse. This role allowed me to give back to the community that had nurtured my growth and development.

    As a person, I'm known for my sense of humor, problem-solving acumen, and team-oriented nature. My friends often refer to me as the "genius of the group," a playful moniker that reflects my approach to challenges. Communication comes naturally to me, fostering connections and collaborations that drive me forward.

    Currently, I thrive as a Frontend Developer at Jagaad, simultaneously embracing the role of Assistant Tutor at Jagaad Academy for a year now. This dual role allows me to continue my journey of learning while also supporting the growth of others. Looking back, my legacy is one of transformation, adaptability, and a relentless pursuit of knowledge. This is not my success story, not yet at least. This is just a beginning of chasing of a dream and I know for sure, there’s a lot more to come.
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
