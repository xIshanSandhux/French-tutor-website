// SplashScreen.tsx
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useColorMode } from "./ui/color-mode";
import samplelogo from "../assets/samplelogo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const MotionBox = motion(Box);

function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const { setColorMode } = useColorMode();

  useEffect(() => {
    // Force light mode for splash screen
    setColorMode("light");
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 5000);
    return () => clearTimeout(timer);
  }, [onComplete, setColorMode]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bgGradient="rgba(201, 230, 236, 0.8)"
      zIndex={9999}
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.5s ease-in-out"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="100vh"
        px={6}
        gap={6}
      >
        {/* Tutor Image */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={samplelogo}
            alt="French Tutor"
            boxSize={{ base: "100px", md: "150px" }}
            borderRadius="full"
            // boxShadow="lg"
            border="6px solid white"
            boxShadow="0 0 0 6px white, 0 8px 30px rgba(0, 0, 0, 0.68)"
            mb={4}
          />
        </MotionBox>

        {/* Welcome Text */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            // fontFamily="Playfair Display, serif"
            fontWeight="bold"
            color="blue.800"
            textAlign="center"
          >
            <Typewriter
              words={["Welcome to French Academy !"]}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </Text>
        </MotionBox>

        {/* Subtitle */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <Text
            fontSize={{ base: "md", md: "xl" }}
            color="gray.600"
            textAlign="center"
            maxW="400px"
            fontFamily="Open Sans"
          >
            Master French for your studies, your travels, and your future.
          </Text>
        </MotionBox>

        {/* Decorative Line */}
        <Box h="2px" w="80px" bg="blue.300" mt={2} borderRadius="full" />

        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
        >
        </MotionBox>
      </Flex>
    </Box>
  );
}

export default SplashScreen;