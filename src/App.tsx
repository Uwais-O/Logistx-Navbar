import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';

import Home from './Pages/Home';
import Routess from './Pages/Routess';
import Drivers from './Pages/Drivers';
import Orders from './Pages/Orders'; 


function App() {
  return (
    <>
    <Router>
      <Sidebar />
      <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path ='/routes' element={<Routess/>} />
      <Route path ='/drivers' element={<Drivers/>} />
      <Route path ='/orders' element={<Orders/>} />
      </Routes>
      </Router>
    </>
  )
}

export default App;
