import { Box, Heading, Stack, Text, Flex, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function Services() {
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
          Services Offered
        </Heading>

    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
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
      Personalized French Lessons
      </Heading>
      <Text fontSize="lg" color="black.700" textAlign="center">
      Tailored instruction based on each student's learning style and pace.
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
        <Stack>
      <Heading as="h4" size="2xl" mb={4} textAlign="center" color="blackAlpha.800">
      Level French Instruction (CEFR-Aligned)
      </Heading>
      <Text fontSize="lg" color="black.700" textAlign="center">
      Structured lessons to help students achieve beginner and elementary proficiency.
      </Text>
      </Stack>     
      </MotionBox>

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
      Multilingual Support
      </Heading>
      <Text fontSize="lg" color="black.700" textAlign="center">
      Lessons available in English, Hindi, Punjabi, and French.
      </Text>
      </Stack>     
      </MotionBox>

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
        <Stack gap={5} display="flex">
      <Heading as="h4" size="2xl" mb={4} textAlign="center" color="blackAlpha.800">
      Flexible Learning Options
      </Heading>
      <Text fontSize="lg" color="black.700" textAlign="center">
      Online classes or in-person tutoring across the GTA.
      </Text>
      </Stack>     
      </MotionBox>

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
        <Stack gap={5} display="flex">
      <Heading as="h4" size="2xl" mb={4} textAlign="center" color="blackAlpha.800">
      Lesson Planning and Study Materials
      </Heading>
      <Text fontSize="lg" color="black.700" textAlign="center">
      Custom worksheets and quizzes aligned with CEFR levels.
      </Text>
      </Stack>     
      </MotionBox>
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
        <Stack gap={5} display="flex">
      <Heading as="h4" size="2xl" mb={4} textAlign="center" color="blackAlpha.800">
      Student Assessment and Progress Tracking
      </Heading>
      <Text fontSize="lg" color="black.700" textAlign="center">
      Regular evaluations and feedback reports.
      </Text>
      </Stack>     
      </MotionBox>

      
</SimpleGrid>
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
        <Stack gap={5} display="flex">
      <Heading as="h4" size="2xl" mb={4} textAlign="center" color="blackAlpha.800">
      French Cultural Integration
      </Heading>
      <Text fontSize="lg" color="black.700" textAlign="center">
      Lessons enriched with French traditions and cultural elements.
      </Text>
      </Stack>     
      </MotionBox>



      </Stack>
    </Box>
























    // <Box bg="blue.50" px={6} py={6} id="services" flex="0" textAlign={{ base: "center", md: "left" }}>

    //     <Flex
    //             direction={{ base: "column", md: "row" }}
    //             align="center"
    //             justify="space-between"
    //             maxW="1000px"
    //             mx="auto"
    //             mt="1%"
    //             gap={10}
    //           >
    //               <Stack gap={4}>
    //             <Heading as="h2" size="6xl" mb={8} fontFamily="Merriweather" textAlign="left" color="gray.700">
    //     Services Offered
    //   </Heading>
    
    //     <Text fontSize="xl" fontFamily="Merriweather" color="gray.700">
    //       ✔️ <b>Personalized French Lessons:</b> Tailored instruction based on each student's learning style and pace.
    //     </Text>

    //     <Text fontSize="xl" fontFamily="Merriweather" color="gray.700">
    //       ✔️ <b>A1–A2 Level French Instruction (CEFR-Aligned):</b> Structured lessons to help students achieve beginner and elementary proficiency.
    //     </Text>

    //     <Text fontSize="xl" fontFamily="Merriweather" color="gray.700">
    //       ✔️ <b>Multilingual Support:</b> Lessons available in English, Hindi, Punjabi, and French.
    //     </Text>

    //     <Text fontSize="xl" fontFamily="Merriweather" color="gray.700">
    //       ✔️ <b>Flexible Learning Options:</b> Online classes or in-person tutoring across the GTA.
    //     </Text>

    //     <Text fontSize="xl"  fontFamily="Merriweather" color="gray.700">
    //       ✔️ <b>Lesson Planning and Study Materials:</b> Custom worksheets and quizzes aligned with CEFR levels.
    //     </Text>

    //     <Text fontSize="xl" fontFamily="Merriweather" color="gray.700">
    //       ✔️ <b>Student Assessment and Progress Tracking:</b> Regular evaluations and feedback reports.
    //     </Text>

    //     <Text fontSize="xl" fontFamily="Merriweather" color="gray.700">
    //       ✔️ <b>French Cultural Integration:</b> Lessons enriched with French traditions and cultural elements.
    //     </Text>
    //   </Stack>
    //           </Flex>
      
    // </Box>
  );
}

export default Services;
