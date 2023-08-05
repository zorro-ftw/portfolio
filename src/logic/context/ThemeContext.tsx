import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<ContextProps>({
  isDarkMode: false,
  theme: {
    siteBackground: "",
    primaryButton: "",
    secondaryButton: "",
    hoverBg: "",
    primaryText: "",
    secondaryText: "",
    headingText: "",
    link: "",
    inputBorder: "",
    inputFocus: "",
    inputText: "",
    inputBg: "",
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleDarkMode: () => {},
});

type ChildrenProps = {
  children: React.ReactNode;
};

type ContextProps = {
  isDarkMode: boolean;
  theme: ThemeProps;
  toggleDarkMode: () => void;
};

type ThemeProps = {
  siteBackground: string;
  primaryButton: string;
  secondaryButton: string;
  hoverBg: string;
  primaryText: string;
  secondaryText: string;
  headingText: string;
  link: string;
  inputBorder: string;
  inputFocus: string;
  inputText: string;
  inputBg: string;
};

export function ThemeProvider({ children }: ChildrenProps) {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches ||
      getLocalStorage("isDarkMode")
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setLocalStorage("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  const theme: ThemeProps = {
    siteBackground: "bg-siteBackground-light dark:bg-siteBackground-dark",
    primaryButton: "bg-primaryButton-light dark:bg-primaryButton-dark",
    secondaryButton: "bg-secondaryButton-light dark:bg-secondaryButton-dark",
    hoverBg: "hover:bg-hoverBg-light dark:hover:bg-hoverBg-dark",
    primaryText: "text-primaryText-light dark:text-primaryText-dark",
    secondaryText: "text-secondaryText-light dark:text-secondaryText-dark",
    headingText: "text-headingText-light dark:text-headingText-dark",
    link: "text-link-light dark:text-link-dark",
    inputBorder: "border-inputBorder-light dark:border-inputBorder-dark",
    inputFocus: "border-inputFocus-light dark:border-inputFocus-dark",
    inputText: "text-inputText-light dark:text-inputText-dark",
    inputBg: "bg-inputBg-light dark:bg-inputBg-dark",
  };

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  function getLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) || "null");
  }

  function setLocalStorage(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, theme, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
