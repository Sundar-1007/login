import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {

  
  let nav = useNavigate();

  const handleLogout = () =>{
    localStorage.clear();
    localStorage.setItem('login', false);
    console.log(localStorage.getItem('login'));
    nav('/');
  }

  return (
    <>
      <div>Home</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
  