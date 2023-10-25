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
  alt: string;
  codeURL: string;
  imageURL: string;
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
      title: "Test",
      alt: "Test",
      codeURL: "https://github.com/zorro-ftw/meubel-house",
      imageURL:
        "https://user-images.githubusercontent.com/86876940/229932839-0ee782c3-e37d-4bf0-bbd4-c36b35b61f54.png",
      liveURL: "https://loquacious-cendol-fff34b.netlify.app/",
    },
    {
      title: "Test2",
      alt: "Test2",
      codeURL: "https://github.com/zorro-ftw/meubel-house",
      imageURL:
        "https://user-images.githubusercontent.com/86876940/229932839-0ee782c3-e37d-4bf0-bbd4-c36b35b61f54.png",
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
