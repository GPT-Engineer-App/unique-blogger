import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, FormControl, FormLabel, FormErrorMessage, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!title) formErrors.title = "Title is required";
    if (!content) formErrors.content = "Content is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Mock API call
      console.log({ title, content, image });
      navigate("/");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Add New Post</Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl isInvalid={errors.title}>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && <FormErrorMessage>{errors.title}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.content}>
              <FormLabel htmlFor="content">Content</FormLabel>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              {errors.content && <FormErrorMessage>{errors.content}</FormErrorMessage>}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="image">Image</FormLabel>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {image && <Image src={image} alt="Selected" boxSize="200px" mt={4} />}
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Submit
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default AddPost;