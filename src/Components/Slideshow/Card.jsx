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
  return (
    <div className='box' data-aos={width>900? 'zoom-in': 'fade-up'}>
        <div className='title'><h2>{props.title}</h2></div>    
        <div className='content'><p>{props.content}</p></div>    
    </div>
  )
}
