import React from 'react';
import Signup from '../src/Signup.jsx';
import Login from '../src/Login.jsx'
import Home from '../src/Home.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App