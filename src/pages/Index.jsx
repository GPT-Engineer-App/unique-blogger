import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { FaPenNib } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to My Blog</Heading>
        <Image src="/images/blog-banner.jpg" alt="Blog Banner" borderRadius="md" mb={4} />
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm [Your Name], and this is my personal blog where I share my thoughts, experiences, and stories.
        </Text>
        <Button leftIcon={<FaPenNib />} colorScheme="teal" variant="solid" size="lg">
          Read My Latest Post
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;