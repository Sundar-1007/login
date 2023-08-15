import React, { useState } from 'react';
import Home from './Home';
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from './Notfound';

export default function Container() {

  const isLogined = localStorage.getItem('login');
  

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={isLogined ? <Home/> : <Login/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
