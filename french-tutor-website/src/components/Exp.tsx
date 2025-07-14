import { Box, Flex, Heading, Stack, List, ListItem, SimpleGrid, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

function Exp() {
  return (
    <Box
      id="exp"
      bgGradient="linear(to-b, #eaf6fb, white)"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 2, md: 10 }}
      py={{ base: 10, md: 20 }}
      position="relative"
      overflow="hidden"
    >
     
      {/* Content */}
      <Stack gap={10} align="center" zIndex={2} maxW="1200px" w="100%">
        <Heading
          as="h2"
          size="4xl"
          fontWeight="bold"
          color="blackAlpha.800"
          textAlign="center"
        >
          Experience: Freelance French Tutor (2016 - Present)
        </Heading>

    <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} display="flex" justifyContent="center" alignItems="center">
   {/* Location Card */}
    <MotionBox
    bg="rgba(201, 230, 236, 0.8)"
    borderRadius="xl"
    border="3.5px solid white"
    boxShadow="0 8px 25px rgba(108, 175, 202, 0.72)"
    p={6}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, ease: "easeIn" }}
    whileHover={{
      y: -4,
      boxShadow: "0 8px 25px rgba(39, 162, 211, 0.97)",
      transition: { duration: 0.3, ease: "easeInOut" },
    }}
    > 
    <Stack gap={5}>
      <Heading as="h4" size="2xl" mb={4} textAlign="center" color="blackAlpha.800">
        Locations Worked In:
      </Heading>
      <Text fontSize="lg" color="black.700" textAlign="center">
        Mumbai, India
      </Text>
      <Text fontSize="lg" color="black.700" textAlign="center">
        Muscat, Oman
      </Text>
      <Text fontSize="lg" color="black.700" textAlign="center">
        Remote (Online)
      </Text>
      </Stack>    
  </MotionBox>

{/* Responsibilities Card */}
      <MotionBox
        bg="rgba(201, 230, 236, 0.8)"
        borderRadius="xl"
        border="3.5px solid white"
        boxShadow="0 8px 25px rgba(108, 175, 202, 0.72)"
        p={6}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        whileHover={{
          y: -4,
          boxShadow: "0 8px 25px rgba(39, 162, 211, 0.97)",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        > 
        <Stack gap={5}>
          <Heading as="h4" size="2xl" mb={4} textAlign="center" color="blackAlpha.800">
          Responsibilities:
          </Heading>
          <Text fontSize="lg" color="black.700" textAlign="center">
          Delivered tailored French instruction to Grades 1-9.
          </Text>
          <Text fontSize="lg" color="black.700" textAlign="center">
          Created CEFR-aligned lesson plans & evaluated progress.
          </Text>
          <Text fontSize="lg" color="black.700" textAlign="center">
          Taught in English, Hindi, Punjabi, and French (online & offline).
          </Text>
          </Stack>    
      </MotionBox>


  
  
</SimpleGrid>

      </Stack>
    </Box>
  );
}

export default Exp;
