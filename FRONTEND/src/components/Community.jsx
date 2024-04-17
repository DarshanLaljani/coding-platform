import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ChakraProvider,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  Text,
  Flex,
  Spacer,
  SimpleGrid,
  Avatar
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Community() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const handlePost = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/posts', {
        name,
        title,
        description
      });
      setPosts([...posts, response.data]);
      setTitle('');
      setDescription('');
      setName('');
      onClose();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <ChakraProvider>
      <>
        <Flex p={4} bg="purple.600" color="white" alignItems="center">
          <Text fontSize={32}> Community Page</Text>
          <Spacer />
          <Button onClick={onOpen} mr={4}>Post</Button>
          <Link to="/"><Button>Home</Button></Link>
        </Flex>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Create a Post
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder='Enter Your Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Title</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder='Enter Topic Of Your Post'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Input
                  placeholder='Enter Description of your post'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='purple' mr={3} onClick={handlePost}>
                Post
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <SimpleGrid columns={2} spacing={4} mt={9} width="100%">
          {posts.map((post, index) => (
            <Card key={index} post={post} />
          ))}
        </SimpleGrid>
      </>
    </ChakraProvider>
  );
}

const Card = ({ post }) => (
  <VStack
    p={4}
    borderWidth='1px'
    borderRadius='md'
    boxShadow='md'
    width='100%'
    align='flex-start'
  >
    <Flex align="center">
      <Avatar size="sm" name={post.name} />
      <Text ml={2} fontWeight='bold'>{post.name}</Text>
    </Flex>
    <Text fontWeight='bold' fontSize="large">{post.title}</Text>
    <Text fontSize="medium">{post.description}</Text>
    <Text fontSize="sm" color="gray.500" ml={2}>
      - {post.timestamp}
    </Text>
  </VStack>
);

export default Community;
