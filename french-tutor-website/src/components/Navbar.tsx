import { Box, Flex, Heading, HStack, Button, Spacer } from "@chakra-ui/react";
import { Link } from "react-scroll"; // correct import

function Navbar() {
  return (
    <Box as="nav" bg="white" px={5} py={4} shadow="sm" position="sticky" top={0} zIndex={10}>
      <Flex align="center">
        <Heading size="2xl" fontFamily="Merriweather" fontWeight="semibold" color="black">
        Madame Teaches French
        </Heading>
        <Spacer />
        <HStack wrap="wrap" gap="7">
          <Link to="about" smooth={true} duration={500} offset={-70}>
            <Button >About</Button>
          </Link>
          <Link to="education" smooth={true} duration={500} offset={-70}>
            <Button >Education</Button>
          </Link>
          <Link to="exp" smooth={true} duration={500} offset={-70}>
            <Button >Experience</Button>
          </Link>
          <Link to="services" smooth={true} duration={500} offset={-70}>
            <Button >Services Offered</Button>
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            <Button >Contact</Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
