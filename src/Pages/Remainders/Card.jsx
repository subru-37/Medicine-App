import React,{useEffect,useState} from 'react';
import './Card.css'

export default function Card(props) {
    const [width, setWidth] = useState(0);
    useEffect(()=>{
      addEventListener("resize", ()=>(setWidth(window.innerWidth)));
    })
    useEffect(()=>{
      setWidth(window.innerWidth);
    })
    // {Age, Dosage, History, MName, Name, Time}
  return (
    <div className='box' data-aos={width>900? 'zoom-in': 'fade-up'}>
        <div className='Name'><h3>Name: {props.Name}</h3></div>    
        {/* <div className='Age'><p>{props.Age}</p></div>   */}
        <br/>
        <div className='MName'><h4>Medicine: {props.MName}</h4></div> 
        <div className='Time'><p>Time: {props.Time}</p></div> 
        <div className='Dosage'><p>Dosage: {props.Dosage}</p></div> 
    </div>
  )
}
