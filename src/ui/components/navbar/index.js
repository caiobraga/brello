import React from "react";
import { Flex, Image, Box, Text, Spacer } from "@chakra-ui/react";
import logo from "../../features/logo.png";

const Navbar = () => {
	return (
		<Flex align="center" p={4} bg="teal.500" color="Black">
            <Image src={logo} w='120px'></Image>
			<Box>
				{/* <Text fontSize="xl" fontWeight="bold">
					Brello
				</Text> */}
			</Box>
			<Flex ml="auto">
				<Text mr={4}>Home</Text>
				<Text mr={4}>About</Text>
				<Text mr={4}>Contact</Text>
			</Flex>
		</Flex>
	);
};

export default Navbar;
