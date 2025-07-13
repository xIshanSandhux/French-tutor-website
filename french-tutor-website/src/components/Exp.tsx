import { Box, Flex, Heading, Stack, List, ListItem } from "@chakra-ui/react";
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
      px={{ base: 1, md: 15 }}
      py={{ base: 1, md: 10 }}
      position="relative"
      overflow="hidden"
    >
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
        borderRadius="100%"
        zIndex={1}
      />
      
      <MotionBox
        bg="rgba(201, 230, 236, 0.8)"
        borderRadius="xl"
        border="3px solid white"
        boxShadow="0 8px 25px rgba(108, 175, 202, 0.72)"
        maxW="1000px"
        width="100%"
        p={{ base: 6, md: 10 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        whileHover={{
          y: -4,
          boxShadow: "0 8px 25px rgba(108, 175, 202, 0.97)",
          transition: { duration: 0.3, ease: "easeInOut" }
        }}
        position="relative"
        zIndex={2}
      >
        <Stack gap={6} width="100%">
          <Heading 
            as="h2" 
            size="4xl" 
            fontWeight="bold"
            color="black.700"
            textAlign="center"
          >
            Experience
          </Heading>

          {/* French Language Stack */}
          <Stack gap={4}>
            <Heading 
              as="h3" 
              size="2xl" 
              fontWeight="bold"
              color="black.700"
              textAlign="center"
            >
              Freelance French Tutor
            </Heading>

            <List.Root
              gap={3}
              pl={4}
              fontSize="lg"
              fontWeight="normal"
              color="gray.600"
            >
              <ListItem>
                {/* <Text fontWeight="semibold" color="gray.700"> */}
                  Locations worked:
                {/* </Text> */}
                <List.Root
                  gap={0}
                  pl={4}
                  fontSize="lg"
                  fontWeight="normal"
                  color="gray.600"
                >
                  <ListItem>Mumbai, India</ListItem>
                  <ListItem>Muscat, Oman</ListItem>
                  <ListItem>Online</ListItem>
                </List.Root>
              </ListItem>
            </List.Root>

            <List.Root
              gap={3}
              pl={4}
              fontSize="lg"
              fontWeight="normal"
              color="gray.600"
            >
              <ListItem>
                {/* <Text fontWeight="semibold" color="gray.700"> */}
                  Time Period:
                {/* </Text> 2016 – Present */}
              </ListItem>
            </List.Root>

            <List.Root
              gap={3}
              pl={4}
              fontSize="lg"
              fontWeight="normal"
              color="gray.600"
            >
              <ListItem>
                {/* <Text fontWeight="semibold" color="gray.700"> */}
                  Did the Following:
                {/* </Text> */}
                <List.Root
                  gap={1}
                  pl={4}
                  fontSize="lg"
                  fontWeight="normal"
                  color="gray.600"
                >
                  <ListItem>Delivered tailored French instruction to Grades 1–9.</ListItem>
                  <ListItem>Created CEFR-aligned lesson plans & evaluated student progress.</ListItem>
                  <ListItem>Taught in English, Hindi, Punjabi, and French, both in-person and online</ListItem>
                </List.Root>
              </ListItem>
            </List.Root>
          </Stack>
        </Stack>
      </MotionBox>
    </Box>
  );
}

export default Exp;