import { Box, Flex, Heading, HStack, Button, Spacer } from "@chakra-ui/react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <Box 
      as="nav" 
      bg="rgba(201, 230, 236, 0.8)" 
      backdropFilter="blur(6px)"
      px={9} 
      py={3} 
      position="sticky" 
      top={0} 
      zIndex={10}
      borderBottom="1px solid rgba(0, 0, 0, 0.08)"
      borderRadius="1px"
      boxShadow="0 8px 25px rgba(108, 175, 202, 0.72)"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "0 8px 25px rgba(108, 175, 202, 0.97)",
        transition: "all 0.3s ease"
      }}
      transition="all 0.3s ease"
    >
      <Flex align="center" maxW="100%" mx="auto">
        <Heading 
          size="3xl" 
          fontFamily="serif" 
          fontWeight="bold" 
          color="black.800"
          letterSpacing="tight"
        >
          Madame Teaches French
        </Heading>
        <Spacer />
        <HStack gap={6}>
          {[
            { to: "about", label: "About" },
            { to: "education", label: "Education" },
            { to: "exp", label: "Experience" },
            { to: "services", label: "Services" },
            { to: "contact", label: "Contact" }
          ].map((item) => (
            <Link key={item.to} to={item.to} smooth={true} duration={500} offset={-70}>
              <Button
                variant="ghost"
                size="sm"
                px={4}
                py={2}
                fontWeight="semibold"
                color="black.700"
                _hover={{
                  bg: "rgba(102, 100, 100, 0.1)",
                  transform: "translateY(-1px)",
                  color: "gray.900" 
                }}
                _active={{
                  bg: "rgba(0, 0, 0, 0.08)",
                  transform: "translateY(0)"
                }}
                transition="all 0.2s ease"
                borderRadius="xl"
                fontSize="md"
                letterSpacing="wide"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;