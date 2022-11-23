import React,{useEffect, useState, useRef} from 'react'
import './Form.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function Form() {
  const ref0 = useRef();
  const ref1 = useRef();
  const freq = ['1','2','3','4']
  const [freqvalue, setFreqValue] = useState('');
  const [value, setValue] = useState({
    Name: "",
    Age: "",
    History:"",
    MName: '',
    Frequency: '',
    Dosage:'',
    Time:''
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setValue((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }
  function handleChangeAuto1(e,v,r){
    const name = ref0.current.getAttribute('name')
    if (r === "reset") {
      setValue(
        (preValue)=>{
          return{
            ...preValue,
            [name]: r === "reset" ? v : null
          }
        }
      )
    }
  }
  function handleChangeAuto2(e,v,r){
    const name = ref1.current.getAttribute('name')
    if (r === "reset") {
      setValue(
        (preValue)=>{
          return{
            ...preValue,
            [name]: r === "reset" ? v : null
          }
        }
      )
    }
  }
  // useEffect(()=>{
  //   console.log(value)
  // },[value])
  function onClicked(event){
    console.log(value)
    setValue({
      Name: "",
      Age: "",
      History:"",
      MName: '',
      Frequency: '',
      Dosage:'',
      Time:''
    });
    event.preventDefault();
  }
  return (
    <div className='parent'>
        <form onSubmit={onClicked} className='formbox'>
          <div className='subbox'>
            <h4>Enter Your Name: </h4> 
            <TextField 
                name='Name' 
                value={value.Name}
                onChange={handleChange} 
                sx={{width: '70%'}} 
                label="Sweet name please" 
                variant="standard" 
                id="standard-basic"/>
          </div>
          <div className='subbox'> 
            <h4>Age: </h4>
            <TextField 
                name='Age'
                value={value.Age} 
                onChange={handleChange} 
                label="Enter your age" 
                variant="standard" 
                id="standard-basic"/>
          </div>
          <div className='subbox'>
            <h4>Any Medical History?</h4> 
            <TextField 
                multiline
                minRows={2}
                value={value.History}
                name='History' 
                onChange={handleChange} 
                label="If any?" 
                variant="standard" 
                id="standard-basic"/>
          </div>
          <div className='subbox'>
            <h4>Medicine Name: </h4> 
            <TextField 
                name='MName' 
                onChange={handleChange} 
                value={value.MName}
                label="Fill this CAREFULLY!" 
                variant="standard" 
                id="standard-basic"/>
          </div>
          <div className='subbox'>
            <h4>Frequency?</h4>
            <Autocomplete
              ref={ref0}
              id="combo-box-Dosage"
              onInputChange={handleChangeAuto1}
              name='Dosage'
              options={freq}
              sx={{width: '70%'}}
              renderInput={(params) => <TextField {...params} label="Enter Dosage" />}
            />
          </div>
          <div className='subbox'>
            <h4>Before/After Food?</h4>
            <Autocomplete
              ref={ref1}
              id="combo-box-Time"
              name='Time'
              onInputChange={handleChangeAuto2}
              options={['Before','After']}
              sx={{width: '70%'}}
              renderInput={(params) => <TextField {...params} label="Enter Timing" />}
            />
          </div>
          <button>Submit</button>
        </form>
    </div>
  )
}

