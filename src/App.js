import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Company from './components/Company';
import About from './components/About';
import CssBaseLine from '@mui/material/CssBaseLine';


function App() {
  return (
    <div className="App">
      <CssBaseLine />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="company" element={<Company />}/>
            <Route path="about" element={<About />}/> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
