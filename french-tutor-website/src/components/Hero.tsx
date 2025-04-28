import { Box, Button, Flex, Stack, Text, Image } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../assets/hero_image_1.jpeg";
import french_resume from "../assets/french resume.pdf";




function Hero() {
  return (
    <Box bg="blue.50" minH="100vh" px={6} py={6} id="Hero">
      {/* Flex container to arrange text and image side by side */}
      <Flex
        // direction={{ base: "column", md: "row" }}
        // align="center"
        // justify="space-between"
        // minH="90vh"
        // px={{ base: 4, md: 20 }}
        // gap={12}
        position="absolute"
        top="7%"   // <-- move it higher by controlling this
        left="16%"
        right="10%"
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={20}
      >
        {/* Text Box */}
        <Box textAlign="left" flex="2">
          <Text fontSize="4xl" fontFamily="Merriweather" fontWeight="semibold" color="gray.700">
            <Typewriter
              words={["Bonjour! Je m'appelle Gurpreet", "Hi! My name is Gurpreet"]}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={90}
              delaySpeed={8000}
            />
          </Text>

          <Text fontSize="lg" color="gray.600" >
            <Typewriter
              words={[
                "J'aide les étudiants à maîtriser le français avec des cours personnalisés juste pour eux.",
                "I help students master French with lessons customized just for them.",
              ]}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={5000}
            />
          </Text>

          <Stack direction="row" h='20'>
          <Button mt={4}
          colorPalette="gray"
          size="md"
          variant="surface"
          onClick={() => window.open(french_resume, '_blank')}
          >
             View My Resume
             </Button>
             <Button mt={4}
          colorPalette="gray"
          size="md"
          variant="surface"
          onClick={() => window.open('https://www.linkedin.com/in/preetk3121/', '_blank')}
          >
             LinkedIn
             </Button>
             
          </Stack>
          {/* <Button mt={4}
          colorPalette="gray"
          size="md"
          variant="surface"
          onClick={() => window.open(french_resume, '_blank')}
          >
             View My Resume
             </Button> */}
        </Box>

        {/* Image Box */}
        <Box flex="1" textAlign="center">
          <Image
            src={heroImage} // <- your image file here (keep it in public folder)
            alt="Preeti - French Tutor"
            boxSize={{ base: "250px", md: "350px" }}
            borderRadius="full" // makes it circular
            objectFit="cover"
            boxShadow="lg"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Hero;
