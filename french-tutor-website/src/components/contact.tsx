import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const MotionBox = motion(Box);

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  // const toast = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!form.current) return;

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
  };

  return (
    <Box
      id="contact"
      bgGradient="linear(to-b, #eaf6fb, white)"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 10 }}
      py={{ base: 10, md: 20 }}
      position="relative"
    >
      <Stack gap={10} align="center" maxW="1200px" w="100%" zIndex={2}>
        <Heading
          as="h2"
          size="4xl"
          fontWeight="bold"
          color="blackAlpha.800"
          textAlign="center"
        >
          Get in Touch
        </Heading>

        <MotionBox
          as="section"
          bg="rgba(201, 230, 236, 0.85)"
          borderRadius="xl"
          border="3px solid white"
          boxShadow="0 8px 25px rgba(108, 175, 202, 0.72)"
          maxW="600px"
          w="100%"
          p={{ base: 6, md: 5 }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          whileHover={{
            y: -4,
            boxShadow: "0 8px 25px rgba(108, 175, 202, 0.97)",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <Text fontSize="lg" color="gray.700" textAlign="center" mb={4}>
            Questions about learning French? I’d love to hear from you!
          </Text>

          <form ref={form} onSubmit={handleSubmit}>
            <Stack gap={5}>
              <label htmlFor="name" style={{ fontWeight: 600 }}>
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                border="1px solid #000"
                placeholder="Enter your name"
                fontFamily="Merriweather"
                color="gray.700"
                required
              />

              <label htmlFor="email" style={{ fontWeight: 600 }}>
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                border="1px solid #000"
                placeholder="Enter your email"
                fontFamily="Merriweather"
                color="gray.700"
                required
              />

              <label htmlFor="message" style={{ fontWeight: 600 }}>
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                border="1px solid #000"
                placeholder="Write your message..."
                rows={6}
                fontFamily="Merriweather"
                color="gray.700"
                required
              />

              <Button
                type="submit"
                isLoading={loading}
                loadingText="Sending"
                size="md"
                fontWeight="semibold"
                colorScheme="blue"
                borderRadius="xl"
                px={8}
                py={2}
                boxShadow="0 4px 12px rgba(108, 175, 202, 0.18)"
                _hover={{
                  bg: "blue.400",
                  transform: "translateY(-2px)",
                }}
                _active={{
                  bg: "blue.600",
                  transform: "translateY(0)",
                }}
                transition="all 0.2s ease"
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </MotionBox>
      </Stack>
    </Box>
  );
}

export default Contact;
