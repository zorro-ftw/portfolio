import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import Skills from "../../components/Skills/Skills";

function Home() {
  return (
    <div className="h-full w-full">
      <NavBar />
      <Hero />
      <Skills />
    </div>
  );
}

export default Home;
