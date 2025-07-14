import { Box, Flex, Heading, Text, Stack, Image } from "@chakra-ui/react";
// import aboutImage from "../assets/about_image.jpeg";
import headerImage from "../assets/hero_image_1.jpeg";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function About() {
  return (
    <Box
      id="about"
      bgGradient="linear(to-b, #eaf6fb, white)"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 1, md: 15 }}
      py={{ base: 1, md: 10 }}
      position="relative"
    >
      {/* Background blob
      <Box
        position="absolute"
        bottom="-100px"
        right="-100px"
        width="300px"
        height="300px"
        bg="rgba(201, 230, 236, 0.8)"
        opacity={0.3}
        filter="blur(1px)"
        borderRadius="100%"
        zIndex={1}
      /> */}

      {/* Content */}
      <Stack gap={10} align="center" zIndex={2}>
        {/* Heading above the card */}
        <Heading
          as="h2"
          size="4xl"
          fontWeight="bold"
          color="blackAlpha.800"
          textAlign="center"
        >
          About Me
        </Heading>

        {/* Card */}
        <MotionBox
          bg="rgba(201, 230, 236, 0.8)"
          borderRadius="xl"
          border="3px solid white"
          boxShadow="0 8px 25px rgba(108, 175, 202, 0.72)"
          maxW="1000px"
          width="100%"
          p={{ base: 6, md: 10 }}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          gap={{ base: 10, md: 20 }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          whileHover={{
            y: -4,
            boxShadow: "0 8px 25px rgba(108, 175, 202, 0.97)",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          {/* Image */}
          <Box flexShrink={0}>
            <Image
              src={headerImage}
              alt="Preeti - French Tutor"
              boxSize={{ base: "220px", md: "300px" }}
              borderRadius="full"
              objectFit="cover"
              border="3px solid white"
              boxShadow="0 0 0 6px white, 0 8px 30px rgba(0, 0, 0, 0.68)"
            />
          </Box>

          {/* Text Content */}
          <Stack gap={5} textAlign={{ base: "center", md: "left" }}>
            <Text fontSize="lg" color="gray.700">
              Hi! I'm Preeti, a passionate French tutor with over 8 years of
              experience helping students master the beautiful French language.
            </Text>

            <Text fontSize="lg" color="gray.700">
              Whether you're a complete beginner or preparing for an exam, I
              tailor lessons to your style — engaging, interactive, and results-driven.
            </Text>

            <Text fontSize="lg" color="gray.700">
              Let’s make French feel simple and exciting for your goals!
            </Text>
          </Stack>
        </MotionBox>
      </Stack>
    </Box>
  );
}

export default About;
