import { Box, Container, Flex, Heading, Text, VStack, Image, Link, SimpleGrid, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <Flex gap={4}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box bg="gray.100" p={10} textAlign="center">
        <Heading size="xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="lg" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Product Listing Section */}
      <Container maxW="container.xl" py={10}>
        <Heading size="lg" mb={6}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 1" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 1</Heading>
              <Text mb={4}>Description of product 1.</Text>
              <Button colorScheme="blue">Buy Now</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 2" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 2</Heading>
              <Text mb={4}>Description of product 2.</Text>
              <Button colorScheme="blue">Buy Now</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 3" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 3</Heading>
              <Text mb={4}>Description of product 3.</Text>
              <Button colorScheme="blue">Buy Now</Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Heading size="md">ElectroShop</Heading>
            <Flex gap={4}>
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaInstagram /></Link>
            </Flex>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <Flex gap={4}>
              <Link href="#">Terms of Service</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Contact Us</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;