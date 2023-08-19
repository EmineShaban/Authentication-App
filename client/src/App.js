 import './App.css';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom"

// import React, { useState, useEffect } from 'react';

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:3030/users/register')
  //     .then(response => response.json())
  //     .then(json => setData(json))
  //     .then(json => JSON.stringify(json))
  //     .catch(error => console.error(error));
  // }, []);
  return (
    <div >
      <h1>Home</h1>
      <Link to={'/login'}> <h1>Login</h1> </Link>
      <Link to={'/register'}> <h1>Register</h1> </Link>

      <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} /> 
          </Routes>
     

    </div>
  );
}

export default App;
