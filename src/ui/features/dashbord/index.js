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
} from '@chakra-ui/react';

import  Navbar  from '../../components/navbar';

import { useHistory } from 'react-router-dom';


const DashboardScreen = () => {
    const history = useHistory();

  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');

  const handleButtonClick = () => {
    history.push('/project');
  };

  const handleCreateProject = () => {
    if (newProjectName) {
      setProjects([...projects, newProjectName]);
      setNewProjectName('');
    }
  };

  return (
    <Box p={8}>
        <Navbar />
      <Heading mb={4}>Dashboard</Heading>

      <Flex mb={4}>
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

      <VStack spacing={4} align="start">
        {projects.map((project, index) => (
           <Box
            key={index}
            p={4}
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
            bg="white"
            onClick={handleButtonClick}
          >
            <Heading size="md" mb={2}>
              {project}
            </Heading>
            <Text>Project description goes here...</Text>
            <Button mt={4} colorScheme="teal">
              Open Project
            </Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default DashboardScreen;