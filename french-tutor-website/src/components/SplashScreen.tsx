import { Box, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

interface SplashScreenProps {
  onComplete: () => void;
}

function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 5000); // Show splash for 4 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="blue.50"
      zIndex={9999}
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.5s ease-in-out"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="100vh"
        gap={8}
      >


        {/* Welcome Text */}
        <Text fontSize="3xl" fontFamily="Merriweather" fontWeight="bold" color="gray.700">
          <Typewriter
            words={["Bienvenue!"]}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </Text>

        {/* Subtitle */}
        <Text fontSize="lg" color="gray.600" textAlign="center" maxW="400px">
          <Typewriter
            words={[
              "Apprenez le français avec confiance"]}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </Text>
      </Flex>
    </Box>
  );
}

export default SplashScreen;