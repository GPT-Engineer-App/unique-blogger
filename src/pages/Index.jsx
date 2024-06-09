import { useState } from "react";
import { Container, Text, VStack, Heading, Box, Image, Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPenNib, FaTrash } from "react-icons/fa";
import React from "react";

const Index = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "This is the first post.", image: "/images/blog-banner.jpg" },
    { id: 2, title: "Second Post", content: "This is the second post.", image: "/images/blog-banner.jpg" },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const handleDelete = (post) => {
    setSelectedPost(post);
    setIsOpen(true);
  };

  const confirmDelete = () => {
    setPosts(posts.filter(post => post.id !== selectedPost.id));
    setIsOpen(false);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to My Blog</Heading>
        {posts.map(post => (
          <Box key={post.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" mb={4}>
            <Image src={post.image} alt={post.title} />
            <Box p={6}>
              <Heading as="h2" size="lg" mb={2}>{post.title}</Heading>
              <Text mb={4}>{post.content}</Text>
              <Button as={Link} to="/add-post" leftIcon={<FaPenNib />} colorScheme="teal" variant="solid" size="sm" mr={2}>
                Edit
              </Button>
              <Button leftIcon={<FaTrash />} colorScheme="red" variant="solid" size="sm" onClick={() => handleDelete(post)}>
                Delete
              </Button>
            </Box>
          </Box>
        ))}
      </VStack>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Post
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this post? This action cannot be undone.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={confirmDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Container>
  );
};

export default Index;