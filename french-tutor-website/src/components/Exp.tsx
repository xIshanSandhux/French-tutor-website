import { Box, Flex, Heading, Text, Stack, List, ListItem } from "@chakra-ui/react";

function Exp() {
  return (
    <Box id="exp" bg="blue.50" minH="100vh" px={6} py={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1000px"
        mx="auto"
        mt="7%"
        gap={24}
      >
        {/* Text Section */}
        <Box flex="1.7" textAlign={{ base: "center", md: "left" }}>
          <Stack gap={6}>
            <Heading as="h2" size="6xl" fontFamily="Merriweather" color="gray.700">
              Experience
            </Heading>

            {/* French Language Stack */}
            <Stack>
            <Heading as="h3" size="2xl" fontFamily="Merriweather" color="gray.700">
              Freelance French Tutor
            </Heading>

            <List.Root
            gap={3}
            pl={4}
            fontSize="lg"
            fontWeight="normal"   // <-- add this
            color="gray.600"       // <-- solid gray color
            fontFamily="Merriweather" 
            >
                <ListItem>
                Locations worked:
                <List.Root
            gap={0}
            pl={4}
            fontSize="lg"
            fontWeight="normal"   // <-- add this
            color="gray.600"       // <-- solid gray color
            fontFamily="Merriweather" >
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
            fontWeight="normal"   // <-- add this
            color="gray.600"       // <-- solid gray color
            fontFamily="Merriweather" 
            >
                <ListItem>
                Time Period: 2016 – Present
                </ListItem>
                </List.Root>

            <List.Root
            gap={3}
            pl={4}
            fontSize="lg"
            fontWeight="normal"   // <-- add this
            color="gray.600"       // <-- solid gray color
            fontFamily="Merriweather" 
            >
                <ListItem>
                    Did the Following:
                    <List.Root
            gap={1}
            pl={4}
            fontSize="lg"
            fontWeight="normal"   // <-- add this
            color="gray.600"       // <-- solid gray color
            fontFamily="Merriweather" >
                <ListItem>Delivered tailored French instruction to Grades 1–9.</ListItem>
                <ListItem>Created CEFR-aligned lesson plans & evaluated student progress.</ListItem>
                <ListItem>Taught in English, Hindi, Punjabi, and French, both in-person and online</ListItem>
            </List.Root>
            </ListItem>
                </List.Root>
            </Stack>
        

          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Exp;
