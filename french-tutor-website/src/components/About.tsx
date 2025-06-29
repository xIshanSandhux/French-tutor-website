import { Box, Flex, Heading, Text, Stack, Image } from "@chakra-ui/react";
import aboutImage from "../assets/about_image.jpeg"; // you can add a separate about image too if you want!

function About() {
  return (
    <Box id="about" bg="blue.50" minH="100vh" px={6} py={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1000px"
        mx="auto"
        mt="10%"
        gap={24}
      >
        {/* Text Section */}
        <Box flex="1.7" textAlign={{ base: "center", md: "left" }}>
          <Stack gap={6}>
            <Heading as="h2" size="6xl" fontFamily="Merriweather" color="gray.700">
              About Me
            </Heading>

            <Text fontSize="xl" color="gray.600" fontFamily="Merriweather">
              Bonjour! I'm Preeti, a passionate French tutor with over 8 years of experience helping students master the beautiful French language.
            </Text>

            <Text fontSize="xl" color="gray.600" fontFamily="Merriweather">
              Whether you're a complete beginner or looking to sharpen your skills, I customize each lesson based on your needs and learning style.
            </Text>

            <Text fontSize="xl" color="gray.600" fontFamily="Merriweather">
              My approach is interactive, practical, and focused on building confidence. Let's make learning French an exciting and rewarding journey!
            </Text>
          </Stack>
        </Box>

        {/* Image Section */}
        <Box flex="1" textAlign="center" >
          <Image
            src={aboutImage} // use another picture if you want
            alt="Preeti - French Tutor"
            boxSize={{ base: "250px", md: "350px" }}
            borderRadius="full"
            objectFit="cover"
            boxShadow="lg"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default About;