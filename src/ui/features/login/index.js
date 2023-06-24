import React, { useState } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import './style.css';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      position="relative"
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
          Senha:
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
          />
        </label>
        <br />
        <Button type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginScreen;