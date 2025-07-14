import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Image,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import { FaLinkedin } from "react-icons/fa";
import heroImage from "../assets/hero_image_1.jpeg";


const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

function Hero() {
  return (
    <Box
      id="Hero"
      position="relative"
      bgGradient="linear(to-b, #eaf6fb, white)"
      minH="100vh"
      px={{ base: 6, md: 20 }}
      py={{ base: 14, md: 24 }}
      // overflow="hidden"
    >
      
      <MotionFlex
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        gap={{ base: 14, md: 20 }}
        zIndex={1}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Text Section */}
        <MotionBox
          flex="1"
          textAlign={{ base: "center", md: "left" }}
          maxW="600px"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            // fontFamily="Playfair Display"
            fontWeight="bold"
            color="gray.800"
            mb={4}
          >
            
            <Box 
            as="span" 
            color="black.500"
            fontSize={{ base: "3xl", md: "3xl" }}
            // fontFamily="Merriweather"
            fontWeight="bold"
            >
              Hi! My name is Preeti
            </Box>
          </Heading>

          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" lineHeight="1.8" mb={8}>
          I help students master French through personalized lessons — designed to support their university studies, travel plans, or exam goals.
          </Text>

          {/* <Stack direction="row" justify={{ base: "center", md: "flex-start" }}>
            <Button
              size="lg"
              rounded="full"
              px={8}
              bg="black"
              color="white"
              leftIcon={<Icon as={FaLinkedin} />}
              _hover={{
                bg: "blue.600",
                boxShadow: "0 0 12px rgba(59, 130, 246, 0.6)",
                transform: "translateY(-2px)",
              }}
              onClick={() => window.open("https://www.linkedin.com/in/preetk3121/", "_blank")}
            >
              Connect on LinkedIn
            </Button>
          </Stack> */}
        </MotionBox>

        {/* Image Section */}
        <MotionBox
          flex="1"
          textAlign="center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Image
            src={heroImage}
            display="flex"
            alt="Preeti - French Tutor"
            boxSize={{ base: "260px", md: "360px" }}
            borderRadius="full"
            objectFit="cover"
            border="6px solid white"
            boxShadow="0 8px 25px rgba(108, 175, 202, 0.97)"
            transition="transform 0.4s ease"
            _hover={{ transform: "scale(1.03)" }}
          />
        </MotionBox>
      </MotionFlex>
    </Box>
  );
}

export default Hero;
