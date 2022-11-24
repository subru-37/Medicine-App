import React,{useEffect,useState,useContext} from 'react';
import './Card.css'
import { ThemeContext } from '../../App';
export default function Card(props) {
    const [width, setWidth] = useState(window.innerWidth);
    const {theme} = useContext(ThemeContext);
    useEffect(()=>{
      addEventListener("resize", ()=>(setWidth(window.innerWidth)));
    })
  return (
    <div className='boxn' style={{backgroundColor: theme?'black':'white', color: theme ? 'green': 'black',borderColor: theme ? 'green':'#DC3535'}} data-aos={width>900? 'zoom-in': 'fade-up'}>
        <div className='Name'><h3>Name: {props.Name}</h3></div>    
        {/* <div className='Age'><p>{props.Age}</p></div>   */}
        <br/>
        <div className='MName'><h4>Medicine: {props.MName}</h4></div> 
        <div className='Time'><p>Time: {props.Time}</p></div> 
        <div className='Dosage'><p>Dosage: {props.Dosage}</p></div> 
    </div>
  )
}
