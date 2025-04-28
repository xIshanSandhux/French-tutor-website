import { Box, Flex, Heading, Stack, List, ListItem } from "@chakra-ui/react";

function education() {
  return (
    <Box id="education" bg="blue.50" minH="100vh" px={6} py={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1000px"
        mx="auto"
        mt="5%"
        gap={24}
      >
        {/* Text Section */}
        <Box flex="1.7" textAlign={{ base: "center", md: "left" }}>
          <Stack gap={6}>
            <Heading as="h2" size="6xl" fontFamily="Merriweather" color="gray.700">
              Education
            </Heading>

            {/* French Language Stack */}
            <Stack>
            <Heading as="h3" size="2xl" fontFamily="Merriweather" color="gray.700">
              French Language
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
                Completed 144 hours of structured French language training at the Centre Franco-Omanais (CFO) in Muscat, Oman — a French Embassy-affiliated institution.
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
                    Levels Completed:
                    <List.Root
            gap={0}
            pl={4}
            fontSize="lg"
            fontWeight="normal"   // <-- add this
            color="gray.600"       // <-- solid gray color
            fontFamily="Merriweather" >
                <ListItem>A1.1 (March 2016) – 86.5%</ListItem>
                <ListItem>A1.2 (June 2016) – 82.5%</ListItem>
                <ListItem>A1.3 (November 2016) – 77%</ListItem>
                <ListItem>A2.1 (May 2017) – 70.5%</ListItem>
            </List.Root>
            </ListItem>
                </List.Root>
            </Stack>

            {/* Normal Graduation stack */}
            <Stack>
            <Heading as="h3" size="2xl" fontFamily="Merriweather" color="gray.700">
              Graduation 
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
                Completed Master of Science (Hons) from PAU, Ludhiana (India)
                    </ListItem>
                    </List.Root>
            </Stack>

          </Stack>
        </Box>

        {/* Image Section
        <Box flex="1" textAlign="center" >
          <Image
            src={aboutImage} // use another picture if you want
            alt="Preeti - French Tutor"
            boxSize={{ base: "250px", md: "350px" }}
            borderRadius="full"
            objectFit="cover"
            boxShadow="lg"
          />
        </Box> */}
      </Flex>
    </Box>
  );
}

export default education;
