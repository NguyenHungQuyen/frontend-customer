import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './../assets/css/rectangle.css';

const InputFrame = ({ children }) => {
    return <div className="input-frame">{children}</div>;
  };
 


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic
    console.log('Logging in...');
  };

 

  return (
    <div className='wrappper'>
     <form action=''>
      <h1>E-commerce</h1>
      
      <div className='input-box'>
    
        <input type='text' placeholder='ellie@gmail.com' required></input>
        <i class='bx bx-envelope'></i>

      </div>

      <div className='input-box'>
       
        <input type='password' placeholder='****' required></input>
        <i class='bx bxs-lock-alt' ></i>
      </div>

      <div className='remember-forgot'>
        <label className='remember-forgot-label' >
          <input type="checkbox"></input>
          Remember me
          </label>
          <a href='#'> Forgot Password</a>
      </div>
    
      <button type='submit' className='btn' >Login</button>
    
    
     </form>
    </div>
  );
};

export default Login;
