import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../../components/navbar";

import { Box, Button, Flex, Grid, Image } from "@chakra-ui/react";
// import "./style.css"; // Import the CSS file

const ProjectCell = ({name, info}) => {
    return (
        <Flex width={240} border='2px solid black' boxShadow='xl' rounded='md' flexDirection='column'>
            <Flex flexDirection='column'>
                <h1>{name}</h1>
                <h3>{info}</h3>
            </Flex>
        </Flex>
    );
};

const ProjectScreen = () => {
	const history = useHistory();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleButtonClick = () => {
		history.push("/dashbord");
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// Perform login logic here, such as making an API call
		// with the entered email and password

		// Reset the form
		setEmail("");
		setPassword("");
	};

	return (
		<div className="App">
			<Navbar></Navbar>
            <Flex flexStart px='14px' gap='14px'>
                <ProjectCell name='teste' info='Lorem ipsum dolor simet, Lorem ipsum dolor simet, Lorem ipsum dolor simet, Lorem ipsum dolor simet, Lorem ipsum dolor simet'></ProjectCell>
                <ProjectCell name='teste' info='Lorem ipsum dolor simets'></ProjectCell>
            </Flex>
            {/* <Grid px='auto' justifyContent='center' gridRowGap='14px' gridColumnGap='14px' gridAutoFlow='row dense' gridTemplateColumns='repeat(auto-fill, 240px)'>
                <ProjectCell name='teste' info='Lorem ipsum dolor simets'></ProjectCell>
                <ProjectCell name='teste' info='Lorem ipsum dolor simets'></ProjectCell>
                <ProjectCell name='teste' info='Lorem ipsum dolor simets'></ProjectCell>
                <ProjectCell name='teste' info='Lorem ipsum dolor simets'></ProjectCell>
                <ProjectCell name='teste' info='Lorem ipsum dolor simets'></ProjectCell>
                <ProjectCell name='teste' info='Lorem ipsum dolor simets'></ProjectCell>
                <ProjectCell name='teste' info='Lorem ipsum dolor simets'></ProjectCell>
                <ProjectCell name='teste' info='Lorem ipsum dolor simets'></ProjectCell>
                <ProjectCell name='teste' info='Lorem ipsum dolor simets'></ProjectCell>
            </Grid> */}
		</div>
	);
};

export default ProjectScreen;
