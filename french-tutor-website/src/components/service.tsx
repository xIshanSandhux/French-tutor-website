import { Box, Heading, Stack, Text, Flex } from "@chakra-ui/react";

function Services() {
  return (
    <Box bg="blue.50" px={6} py={6} id="services" flex="0" textAlign={{ base: "center", md: "left" }}>

        <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="space-between"
                maxW="1000px"
                mx="auto"
                mt="1%"
                gap={10}
              >
                  <Stack gap={4}>
                <Heading as="h2" size="6xl" mb={8} fontFamily="Merriweather" textAlign="left" color="gray.700">
        Services Offered
      </Heading>
    
        <Text fontSize="xl" fontFamily="Merriweather" color="gray.700">
          ✔️ <b>Personalized French Lessons:</b> Tailored instruction based on each student's learning style and pace.
        </Text>

        <Text fontSize="xl" fontFamily="Merriweather" color="gray.700">
          ✔️ <b>A1–A2 Level French Instruction (CEFR-Aligned):</b> Structured lessons to help students achieve beginner and elementary proficiency.
        </Text>

        <Text fontSize="xl" fontFamily="Merriweather" color="gray.700">
          ✔️ <b>Multilingual Support:</b> Lessons available in English, Hindi, Punjabi, and French.
        </Text>

        <Text fontSize="xl" fontFamily="Merriweather" color="gray.700">
          ✔️ <b>Flexible Learning Options:</b> Online classes or in-person tutoring across the GTA.
        </Text>

        <Text fontSize="xl"  fontFamily="Merriweather" color="gray.700">
          ✔️ <b>Lesson Planning and Study Materials:</b> Custom worksheets and quizzes aligned with CEFR levels.
        </Text>

        <Text fontSize="xl" fontFamily="Merriweather" color="gray.700">
          ✔️ <b>Student Assessment and Progress Tracking:</b> Regular evaluations and feedback reports.
        </Text>

        <Text fontSize="xl" fontFamily="Merriweather" color="gray.700">
          ✔️ <b>French Cultural Integration:</b> Lessons enriched with French traditions and cultural elements.
        </Text>
      </Stack>
              </Flex>
      
    </Box>
  );
}

export default Services;
