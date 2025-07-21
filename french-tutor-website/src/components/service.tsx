import { Box, Heading, Stack, Text, Flex, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MotionBox = motion(Box);

function Service() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const services = [
    {
      title: "Personalized French Lessons",
      description: "Tailored instruction based on each student's learning style and pace.",
    },
    {
      title: "Level French Instruction (CEFR-Aligned)",
      description: "Structured lessons to help students achieve beginner and elementary proficiency.",
    },
    {
      title: "Multilingual Support",
      description: "Lessons available in English, Hindi, Punjabi, and French.",
    },
    {
      title: "Flexible Learning Options",
      description: "Online classes or in-person tutoring across the GTA.",
    },
    {
      title: "Lesson Planning and Study Materials",
      description: "Custom worksheets and quizzes aligned with CEFR levels.",
    },
    {
      title: "Student Assessment and Progress Tracking",
      description: "Regular evaluations and feedback reports.",
    },
    {
      title: "French Cultural Integration",
      description: "Lessons enriched with French traditions and cultural elements.",
    },
  ];

  return (
    <Box
      id="service"
      bgGradient="linear(to-b, #eaf6fb, white)"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 2, md: 10 }}
      py={{ base: 10, md: 20 }}
      position="relative"
    >
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

        {/* Buttons */}
        <Flex justify="space-between" align="center" w="full">
          <IconButton
            aria-label="Scroll Left"
            onClick={() => scroll("left")}
            variant="ghost"
            size="lg"
          >
            <FaChevronLeft />
          </IconButton>

          {/* Scrollable Cards */}
          <Flex
            ref={scrollRef}
            gap={6}
            overflowX="auto"
            py={4}
            px={2}
            w="full"
            style={{
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
            }}
            css={{
              "&::-webkit-scrollbar": { height: "8px" },
              "&::-webkit-scrollbar-thumb": {
                background: "#a0aec0",
                borderRadius: "8px",
              },
            }}
          >
            {services.map((service, index) => (
              <MotionBox
                key={index}
                minW={{ base: "280px", md: "320px" }}
                flexShrink={0}
                scrollSnapAlign="start"
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
                  <Heading as="h4" size="lg" textAlign="center" color="blackAlpha.800">
                    {service.title}
                  </Heading>
                  <Text fontSize="md" color="black.700" textAlign="center">
                    {service.description}
                  </Text>
                </Stack>
              </MotionBox>
            ))}
          </Flex>

          <IconButton
            aria-label="Scroll Right"
            onClick={() => scroll("right")}
            variant="ghost"
            size="lg"
          >
            <FaChevronRight />
          </IconButton>
        </Flex>
      </Stack>
    </Box>
  );
}

export default Service;
