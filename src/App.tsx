import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Cv from './pages/Cv/Cv';
import Projects from './pages/Projects/Projects';

function App() {


  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/cv' element={<Cv />} />
      <Route path='/projects' element={<Projects />} />


    </Routes>
   </BrowserRouter>
  )
}

export default App
