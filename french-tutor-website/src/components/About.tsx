import { Box, Flex, Heading, Stack, List, ListItem, SimpleGrid } from "@chakra-ui/react";

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
      {/* Background Glow Blobs */}
      <Box
        position="absolute"
        bottom="-100px"
        right="-100px"
        width="300px"
        height="300px"
        bg="rgba(201, 230, 236, 0.8)"
        opacity={0.3}
        filter="blur(1px)"
        borderRadius="full"
        zIndex={1}
      />
      <Box
        position="absolute"
        top="-50px"
        left="-50px"
        width="200px"
        height="200px"
        bg="rgba(201, 230, 236, 0.6)"
        opacity={0.2}
        filter="blur(1px)"
        borderRadius="full"
        zIndex={1}
      />

      {/* Content */}
      <Stack gap={10} align="center" zIndex={2} maxW="1200px" w="100%">
        <Heading
          as="h2"
          size="4xl"
          fontWeight="bold"
          color="blackAlpha.800"
          textAlign="center"
        >
          Experience
        </Heading>

        <Heading
          as="h3"
          size="2xl"
          fontWeight="bold"
          color="blackAlpha.800"
          textAlign="center"
        >
          Freelance French Tutor
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} width="100%">
  {/* Location Card */}
  <MotionBox
    bg="rgba(201, 230, 236, 0.8)"
    borderRadius="xl"
    border="2px solid white"
    boxShadow="md"
    p={6}
    whileHover={{
      y: -4,
      boxShadow: "lg",
      transition: { duration: 0.3, ease: "easeInOut" },
    }}
  >
    <Heading as="h4" size="lg" mb={4} textAlign="center" color="blackAlpha.800">
      Locations
    </Heading>
    <List.Root gap={2} fontSize="md" color="gray.700">
      <ListItem>Mumbai, India</ListItem>
      <ListItem>Muscat, Oman</ListItem>
      <ListItem>Online</ListItem>
    </List.Root>
  </MotionBox>

  {/* Time Card */}
  <MotionBox
    bg="rgba(201, 230, 236, 0.8)"
    borderRadius="xl"
    border="2px solid white"
    boxShadow="md"
    p={6}
    whileHover={{
      y: -4,
      boxShadow: "lg",
      transition: { duration: 0.3, ease: "easeInOut" },
    }}
  >
    <Heading as="h4" size="lg" mb={4} textAlign="center" color="blackAlpha.800">
      Time Period
    </Heading>
    <List.Root gap={2} fontSize="md" color="gray.700">
      <ListItem>2016 – Present</ListItem>
    </List.Root>
  </MotionBox>

  {/* Responsibilities Card */}
  <MotionBox
    bg="rgba(201, 230, 236, 0.8)"
    borderRadius="xl"
    border="2px solid white"
    boxShadow="md"
    p={6}
    whileHover={{
      y: -4,
      boxShadow: "lg",
      transition: { duration: 0.3, ease: "easeInOut" },
    }}
  >
    <Heading as="h4" size="lg" mb={4} textAlign="center" color="blackAlpha.800">
      Responsibilities
    </Heading>
    <List.Root gap={2} fontSize="md" color="gray.700">
      <ListItem>Delivered tailored French instruction to Grades 1-9.</ListItem>
      <ListItem>Created CEFR-aligned lesson plans & evaluated progress.</ListItem>
      <ListItem>Taught in English, Hindi, Punjabi, and French (online & offline).</ListItem>
    </List.Root>
  </MotionBox>
</SimpleGrid>

      </Stack>
    </Box>
  );
}

export default Exp;
