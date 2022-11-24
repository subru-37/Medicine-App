import React,{useEffect,useState,useContext} from 'react';
import './Card.css'
import { ThemeContext } from '../../App';
export default function Card(props) {
  const {theme} = useContext(ThemeContext);
  const [width, setWidth] = useState(0);
  useEffect(()=>{
    addEventListener("resize", ()=>(setWidth(window.innerWidth)));
  })
  useEffect(()=>{
    setWidth(window.innerWidth);
  })
  return (
    <div className='box' style={{backgroundColor: theme?'black':'white', color: theme ? 'white': 'black',borderColor: theme ? 'green':'#DC3535'}} data-aos={width>900? 'zoom-in': 'fade-up'}>
        <div className='title'><h2>{props.title}</h2></div>    
        <div className='content'><p>{props.content}</p></div>    
    </div>
  )
}
