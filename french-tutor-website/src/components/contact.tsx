import { Box, Button, Flex, Heading, Input, Stack, Text, Textarea } from "@chakra-ui/react";

function Contact() {
  return (
    <Box id="contact" bg="blue.50" minH="100vh" px={6} py={6}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="80vh"
        px={{ base: 4, md: 20 }}
        gap={8}
        mt="2.6%"
      >
        <Box flex='1'textAlign="center">
          <Heading as="h2" size="6xl" fontFamily="Merriweather" fontWeight="semibold" color="gray.700" mb={4}>
            Get in Touch
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="600px" fontFamily="Merriweather">
            Questions about learning French? Feel free to send a message!
          </Text>
        </Box>

        <form style={{ width: "100%" }}>
          <Stack
            gap={6}
            maxW="600px"
            mx="auto"
            bg="white"
            p={8}
            borderRadius="xl"
            boxShadow="lg"
          >
            <Input name="from_name" placeholder="Please Enter Your Name" fontFamily="Merriweather" required color="gray.700" />
            <Input name="from_email" placeholder="Please Enter Your Email" type="email" fontFamily="Merriweather" required color="gray.700"/>
            <Textarea name="message" placeholder="Please Enter Your Message" rows={6} fontFamily="Merriweather" required color="gray.700" />

            <Button
              type="submit"
              mt={4}
              colorPalette="gray"
              size="md"
              variant="surface"
            >
              Send Message
            </Button>
          </Stack>
        </form>
      </Flex>
    </Box>
  );
}

export default Contact;
