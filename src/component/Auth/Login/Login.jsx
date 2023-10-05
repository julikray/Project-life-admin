import React, { useState } from 'react';
import './Login.css';
import { useNavigate} from 'react-router-dom';

function Adminpanel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const data = {
      email: email,
      password: password,
    };
  
    try {
      const response = await fetch('https://www.mecallapi.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        navigate('/home');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

return (
  <div className='box'>
    <div className='login'>
      <h2>Login</h2>
      <form className='LoginForm' onSubmit={handleLogin}>
        <div className='Div1'>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
        </div>
        <div className='Div1'>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);
}

export default Adminpanel;
