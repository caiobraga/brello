import React, { useState } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import { Link } from '@chakra-ui/react';
import './style.css';
import backgroundImage from './logo.png'; // Import the image file

import { useHistory } from 'react-router-dom';
import { Database } from '../../../data/bd.js';

import {User} from '../../../data/bd.js';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');

  const history = useHistory();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handleSignup = (event) => {
    event.preventDefault();

    // Atualiza o objeto User no banco de dados com os dados do formulário
    const db = new Database;
    
    if (!name || !email || !password || !phone || !cpf) {
      alert('Por favor, preencha todas as informações antes de prosseguir.');
      return;
    }
    
    const newUser = new User(email, password, name, phone, cpf);
    db.addUserLista(newUser);
    
    //user.setUser(user);
    // Reset the form
    setName('');
    setEmail('');
    setPassword('');
    setPhone('');
    setCpf('');
    //console.log(listaUsuarios);
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
        <h2>Signup</h2>
        <Box position="absolute" top="-50px" left="50%" transform="translateX(-50%)">
          <FaUser size={60} />
        </Box>
      </Box>
      <form onSubmit={handleSignup}>
        <label>
          Name:
          <Input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="input-field"
          />
        </label>
        <br />
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
        <label>
          Phone:
          <Input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            className="input-field"
          />
        </label>
        <br />
        <label>
          CPF:
          <Input
            type="number"
            value={cpf}
            onChange={handleCpfChange}
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
          Signup
        </Button>
      </form>
      <p style={{ marginTop: '10px' }}>
        Already have an account? <Link href="/">Login</Link>
      </p>
    </Box>
  );
};

export default SignupScreen;