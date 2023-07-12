import React, { useState, useEffect } from 'react';
import './style.css';
import {
  Box,
  Center,
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
  const [text, setText] = useState("");
  


 function handleInput(){
  setPosts(posts.concat(<Topic title={text}></Topic>))
 }

  return (

    <Box p = "20px">
      <Navbar></Navbar>
      <h2 className='homeTitle'>Faça sua pergunta</h2>
        <Flex alignItems={"center"}>
          <Input
            flex="1"
            mr={2}
            size='md'
            maxW={"500px"}
            placeholder="CRIAR TOPICO"
            onChange={text=>{
              setText(text.target.value)
            }}
          />
          <Button colorScheme='blue' size='xs' onClick={handleInput} >POSTAR </Button>
        </Flex>
      <Flex flexDirection='column' p = '20px' gap = '10px'>
        {posts}
      </Flex>
    </Box>
  );
};

export default ForumScreen;
