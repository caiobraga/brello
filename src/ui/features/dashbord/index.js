import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Stack,
  Text,
  VStack,
  useBoolean,
  Grid,
  GridItem, 
} from '@chakra-ui/react';

import { FaPlus, FaWrench } from "react-icons/fa";


import  Navbar  from '../../components/navbar';

import { useHistory } from 'react-router-dom';


const DashboardScreen = () => {
    const history = useHistory();

  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');

  const handleButtonClick = () => {
    history.push('/projects');
  };

  function randomColor() {
    const randPixel = () => 127 + Math.random() * 128;
  
    return `rgb(${randPixel()},${randPixel()},${randPixel()})`;
  }
  const Card = ({ children  }) => {
    const [isHovering, setHovering] = useBoolean();
  
    return (
      <Flex
        p="14px"
        maxW={600}
        width={600}
        margin={8}
        backgroundColor="lightgray"
        borderRadius="14px"
        justifyContent="space-between"
        justifySelf={"center"}
        onMouseEnter={setHovering.on}
        onMouseLeave={setHovering.off}>
        <Text
          m="0"
          alignSelf="flex-start"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          fontSize="18px">
          
        </Text>
        {children }
        
      </Flex>
    );
  };
  
 
  const handleCreateProject = () => {
    if (newProjectName) {
      setProjects([...projects, newProjectName]);
      setNewProjectName('');
    }
  };

  return (
    <Grid
  templateAreas={`"header header"
                  "nav nav "
                  "main main"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    <Navbar />
  </GridItem>
  <GridItem pl='2' bg='pink.300'  area={'nav'} direction={'column'} alignSelf={"center"} alignContent={"center"} justifyContent={"center"} justifyItems={"center"} justifySelf={"center"} width={"50%"} >
  <Heading mb={4}>Dashboard</Heading>

<Flex  mb={4} width="100%"  alignSelf={"center"} alignContent={"center"} justifyContent={"center"} justifyItems={"center"} justifySelf={"center"}>
  <Input
    flex="1"
    height={50}
    mr={2}
    placeholder="Enter project name"
    value={newProjectName}
    onChange={(e) => setNewProjectName(e.target.value)}
  />
  <Button colorScheme="teal" onClick={handleCreateProject}>
    Create Project
  </Button>
</Flex>

  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'} justifyContent="space-between" justifySelf={"center"} justifyItems={"center"}   >
    <Flex direction={'column'} justifyContent="center" justifySelf={"center"} justifyItems={"center"} >
    {projects.map((project, index) => (
           <Card
           justifyContent="space-between"
          >
           
           <Heading size="md" mb={2} >
              {project}
            </Heading>
        <Text
          m="0"
          alignSelf="flex-start"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          fontSize="18px"
          >
          
        </Text>
        <Button  mt={4} colorScheme="teal" onClick={handleButtonClick}>
              Open Project
            </Button>
       
           
            
            
          </Card>
        ))}
    </Flex>
  
  </GridItem>
  
</Grid>
    
  );
};

export default DashboardScreen;