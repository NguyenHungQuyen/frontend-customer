import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './../assets/css/rectangle.css';
import axios from 'axios';

const InputFrame = ({ children }) => {
    return <div className="input-frame">{children}</div>;
  };
 


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail=(e)=>{
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const handelPassword=(e)=>{
    console.log(e.target.value)
    setPassword(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('submit form');
    axios.post('http://localhost:3200/login', {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response.data)
      alert('sucess login')
    })
    .catch((err)=>{
      console.log(err)
      console.log(err.response)
      alert(err.response.data.console.message)
    })
  }

  const handleLogin = () => {
    // Implement login logic
    console.log('Logging in...');
  };

 

  return (
    <div className='wrappper'>
     <form action='' onSubmit={handleSubmit}>
      <h1>E-commerce</h1>
      
      <div className='input-box'>
    
        <input 
            type='text' 
            placeholder='ellie@gmail.com' 
            required 
            onChange={handleEmail}
            value={email}></input>
        <i class='bx bx-envelope'></i>

      </div>

      <div className='input-box'>
       
        <input 
            type='password' 
            placeholder='****' 
            required 
            onChange={handelPassword}
            value={password}
            ></input>
        <i class='bx bxs-lock-alt' ></i>
      </div>

      <div className='remember-forgot'>
        <label>
          <input type="checkbox"></input>
          Remember me
          </label>
          <a href='#'> Forgot Password</a>
      </div>

      <button type='submit' className='btn'>Login</button>
     </form>
    </div>
  );
};

export default Login;
