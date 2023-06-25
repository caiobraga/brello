import React, { useState, useEffect } from 'react';
import './style.css';
import {
  Box,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import Navbar from "../../components/navbar";
import { AiFillMessage } from 'react-icons/ai'

const Topic = ({ title }) => {
  return (
    <Flex border='1px solid gray' w = '500px' p='14px' m = '0px' justifyContent='space-between'>
      <Text alignSelf='flex-start'>
        {title}  
      </Text>
      <Button border='none'><AiFillMessage size='40px'> </AiFillMessage></Button>
    </Flex>

  )
}


const ForumScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulated API call to fetch forum posts
    fetchPosts();
  }, []);


  const fetchPosts = () => {
    // Simulated data
    const dummyPosts = [
      { id: 1, title: 'First Post', content: 'This is the first post.' },
      { id: 2, title: 'Second Post', content: 'This is the second post.' },
      { id: 3, title: 'Third Post', content: 'This is the third post.' },
    ];

    setPosts(dummyPosts);
  };

  return (

    <Box>
      <Navbar></Navbar>
      <h2 className='homeTitle'>Faça sua pergunta</h2>
      <form onSubmit={posts}>
        <Flex>
          <Input
            flex="1"
            mr={2}
            size='md'
            placeholder="CRIAR TOPICO"
          />
          <Button colorScheme='blue' size='xs' >POSTAR </Button>
        </Flex>

      </form>
      <Flex flexDirection='column' p = '20px' gap = '10px'>
        <Topic title='TOPICO 1'>
    
        </Topic>
        <Topic title='TOPICO 2'>

        </Topic>

        <Topic title='TOPICO 3'>

        </Topic>


      </Flex>
    </Box>



  );
};

export default ForumScreen;
