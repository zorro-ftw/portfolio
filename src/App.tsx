import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cv from "./pages/Cv/Cv";
import Projects from "./pages/Projects/Projects";
import { ThemeProvider } from "./logic/context/ThemeContext";
import { UserProvider } from "./logic/context/UserContext";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
