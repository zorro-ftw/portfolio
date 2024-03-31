import { useContext } from "react";
import photo from "../../assets/salih_photo.jpg";
import { ThemeContext } from "../../logic/context/ThemeContext";
import { UserContext } from "../../logic/context/UserContext";
export function AboutMain() {
  const { theme } = useContext(ThemeContext);
  const { userData } = useContext(UserContext);
  return (
    <>
      <main
        className={`flex flex-col items-center mt-10 mb-10 px-8 text-sm sm:text-base gap-6 sm:gap-10 md:gap-14 lg:gap-16 sm:px-16 md:px-26 lg:px-40 2xl:px-80 `}
      >
        <div className="w-full flex flex-col items-center">
          <img
            src={photo}
            alt="Photo"
            className={`h-48 md:h-96 object-contain object-top rounded-xl`}
          />
          <p className={`${theme.link} italic mt-5 text-center`}>
            {userData.motto}
          </p>
        </div>

        <h1 className={`${theme.headingText} text-3xl text-center font-bold`}>
          About
        </h1>
        <p className={`${theme.primaryText} whitespace-pre-line`}>
          {userData.biography}
        </p>
      </main>
    </>
  );
}
