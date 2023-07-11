import React, { useState } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import { Link, Text } from '@chakra-ui/react';
import './style.css';
import backgroundImage from './logo.png'; // Import the image file

import { useHistory } from 'react-router-dom';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform login logic here, such as making an API call
    // with the entered email and password

    // Reset the form
    setEmail('');
    setPassword('');

    history.push('/dashbord');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      position="relative"
      background={`url(${backgroundImage})`} // Set the background image
      backgroundSize="cover"
    >
      <Box position="relative">
        <h2>Login</h2>
        <Box
          position="absolute"
          top="-50px"
          left="50%"
          transform="translateX(-50%)"
        >
          <FaUser size={60} />
        </Box>
      </Box>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Password:
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
          />
        </label>
        <br />
        <Button
          type="submit"
          mt={20}
          style={{
            width: '100%',
            height: '28px',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          Login
        </Button>
      </form>
      <p style={{ marginTop: '10px' }}>
        Don't have an account? <Link href="/signup">Sign up</Link>
      </p>
    </Box>
  );
};

export default LoginScreen;