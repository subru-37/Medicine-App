import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import ResponsiveAppBar from './Components/Navbar/ResponsiveAppBar';
import MobileAppBar from './Components/Navbar/MobileAppBar';
import Landing from './Pages/Landing/Landing';
export default function App() {

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <MobileAppBar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </div>
  )
}

