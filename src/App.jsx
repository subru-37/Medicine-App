import React,{useEffect,useState} from 'react';
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
  const [allvalues, setAllValues] = useState([]);
  function onSubmitted(note) {
    setAllValues((preValue) => {
      return [...preValue, note];
    });
  }
  // useEffect(()=>{
  //   console.log(allvalues)
  // },[allvalues])
  return (
    
    <div className="App">
      <ResponsiveAppBar/>
      <MobileAppBar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/form" element={<Form onAdd={onSubmitted}/>}/>
        <Route path="/remainders" element={<Remainders data={allvalues}/>}/>
      </Routes>
    </div>
  )
}

