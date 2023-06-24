import React from 'react';
import { Flex, Box, Text, Spacer, Link, IconButton } from '@chakra-ui/react';
import { AiFillHome, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai';
import { MoonIcon } from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <Flex align="center" justify="space-between" p={4} bg="teal.500" color="white">
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          Brello
        </Text>
      </Box>
      <Flex align="center">
        <Link as="button" mr={4} fontSize="lg">
          <AiFillHome />
        </Link>
        <Link as="button" mr={4} fontSize="lg">
          <AiOutlineInfoCircle />
        </Link>
        <Link as="button" mr={4} fontSize="lg">
          <AiOutlineMail />
        </Link>
        <IconButton
          aria-label="Toggle Dark Mode"
          icon={<MoonIcon />}
          variant="ghost"
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
