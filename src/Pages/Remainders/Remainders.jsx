import React,{useState} from 'react'
import './Remainders.css'
import Card from './Card';
export default function Remainders(props) {
  const data = props.data;
  return (
    <div className='parent_box'>
      {
        data.map(
          (x)=>{
            const {Age, Dosage, History, MName, Name, Time} = x;
            return(
              <div className='boxes'>
                {/* {Age}, {Dosage}, {History}, {MName}, {Name}, {Time} */}
                <Card
                  Name={Name}
                  Age={Age}
                  MName={MName}
                  Time={Time}
                  Dosage={Dosage}
                />
              </div>
            );
          }
        )
      }
    </div>
  )
}
