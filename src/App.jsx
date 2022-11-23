import React,{useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import ResponsiveAppBar from './Components/Navbar/ResponsiveAppBar';
import MobileAppBar from './Components/Navbar/MobileAppBar';
import Landing from './Pages/Landing/Landing';
import Form from './Pages/Form/Form';
import Remainders from './Pages/Remainders/Remainders';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
export default function App() {
  useEffect(() => {
    AOS.init({offset: 120,delay: 0,duration: 1000});
  })
  return (
    
    <div className="App">
      <ResponsiveAppBar/>
      <MobileAppBar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/remainders" element={<Remainders/>}/>
      </Routes>
    </div>
  )
}

