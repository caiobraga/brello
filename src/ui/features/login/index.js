import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
<<<<<<< HEAD
=======
import { NavBar } from '../../components/navbar';import './style.css'; // Import the CSS file

>>>>>>> 5ec22e7228c1950b94e49c9a81e90b73de5115b4
const LoginScreen = () => {
    const history = useHistory();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleButtonClick = () => {
    history.push('/dashbord');
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
<<<<<<< HEAD
    <div className="App">
       
=======
    <div className="App" className="login-container">
>>>>>>> 5ec22e7228c1950b94e49c9a81e90b73de5115b4
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit" onClick={handleButtonClick} >Login</button>
      </form>
    </div>
  );
};

export default LoginScreen;