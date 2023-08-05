import { createContext } from "react";

export const UserContext = createContext<ContextProps>({
  userData: { fullName: "", heroMessage: "" },
  routersArray: [
    {
      icon: ["", ""],
      text: "",
      navigatesTo: "",
    },
  ],
});

type ChildrenProps = {
  children: React.ReactNode;
};

type ContextProps = {
  userData: UserDataProp;
  routersArray: RouterProp[];
};

type UserDataProp = {
  fullName: string;
  heroMessage: string;
};

type RouterProp = {
  icon: [string, string];
  text: string;
  navigatesTo: string;
};

export function UserProvider({ children }: ChildrenProps) {
  const userData: UserDataProp = {
    fullName: "Salih Zorer",
    heroMessage: "",
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
  return (
    <UserContext.Provider value={{ userData, routersArray }}>
      {children}
    </UserContext.Provider>
  );
}
