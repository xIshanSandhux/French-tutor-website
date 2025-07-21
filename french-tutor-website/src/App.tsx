import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About';
import Education from './components/Education';
import Exp from './components/Exp';
import Contact from './components/contact';
import Services from './components/service';
import SplashScreen from "./components/SplashScreen";
import { useState } from "react";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Exp />
      <Services />
      {/* <Education /> */}
      <Contact />
    </Box>
  );
}

export default App;
