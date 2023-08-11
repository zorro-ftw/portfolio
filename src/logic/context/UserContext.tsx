import { createContext } from "react";

export const UserContext = createContext<ContextProps>({
  userData: { fullName: "", biography: "" },
  routersArray: [
    {
      icon: ["", ""],
      text: "",
      navigatesTo: "",
    },
  ],
  skillsArray: [],
  socialsArray: [],
});

type ChildrenProps = {
  children: React.ReactNode;
};

type ContextProps = {
  userData: UserDataProp;
  routersArray: RouterProp[];
  skillsArray: string[];
  socialsArray: SocialProps[];
};

type UserDataProp = {
  fullName: string;
  biography: string;
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

export function UserProvider({ children }: ChildrenProps) {
  const userData: UserDataProp = {
    fullName: "Salih Zorer",
    biography: `In the realm of lifelong learning and transformation, my remarkable journey stands as a testament to the power of embracing change and seizing opportunities. My story is one of curiosity, innovation, and unyielding dedication to growth.

    My path was set in motion in Ankara, Turkey, where my inquisitive mind was captivated by the intricate mechanics of the world. As I grew, so did my fascination with the internet's enigmatic workings and the art of website creation. Despite pursuing a degree in Mechanical Engineering at the renowned Middle East Technical University, my passion for coding robotic behaviors and developing automated solutions in MATLAB was unwavering.
    
    The aviation industry offered me a platform to showcase my mechanical prowess, yet my heart yearned for the realm of Information Technology. Taking a calculated leap into the world of coding, I enrolled in an introductory software development course. This experience ignited a fervent determination to embark on a more immersive educational journey, leading me to the doors of Jagaad Academy.
    
    Jagaad Academy's nurturing environment provided the perfect soil for my growth. Graduating as the top performer, I not only honed my coding skills but also developed into a holistic IT professional—a creative problem solver and a skilled communicator.
    
    Equipped with my newfound skills and an unquenchable thirst for learning, I ventured into the realm of job applications, primed for my first junior developer role. In an unexpected twist, Jagaad, the institution that had shaped my transformation, extended an invitation for me to become a junior developer within their team. This offer was a testament to my dedication and a heartening full-circle moment in my journey.
    
    My commitment to growth and learning led me to gracefully balance my roles as a junior developer at Jagaad Software House and a tutor at Jagaad Academy. My embodiment of the motto "Once you stop learning, you start dying" shone through as a guiding light in my path.
    
    As I continue to navigate the dynamic landscape of technology, my journey stands as a beacon of inspiration. It underscores the beauty of embracing change and seizing every opportunity for growth. From a curious Mechanical Engineer to a respected junior developer and tutor, my narrative is a celebration of transformation, resilience, and the enduring quest for knowledge.`,
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
    "Javascript",
    "Typescript",
    "Tailwind",
    "HTML",
    "CSS",
    "Sass",
    "Storybook",
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
  return (
    <UserContext.Provider
      value={{ userData, routersArray, skillsArray, socialsArray }}
    >
      {children}
    </UserContext.Provider>
  );
}
