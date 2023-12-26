import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './../assets/css/rectangle.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic
    console.log('Logging in...');
  };

  return (
    <div className="rectangle">
  
    </div>
  );
};

export default Login;
