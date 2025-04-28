import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About';
import Education from './components/Education';
import Exp from './components/Exp';
import Contact from './components/contact';
import Service from './components/service';

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Exp />
      <Service />
      <Education />
      <Contact />
    </Box>
  );
}

export default App;
