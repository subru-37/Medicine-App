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
  function handleChangeAuto1(event){
    const {value} = event.target;
    const name = ref0.current.getAttribute('name')
    console.log(value)
    setValue(
      (preValue)=>{
        return{
          ...preValue,
          [name]: value
        }
      }
    )
  }
  function handleChangeAuto2(event){
    const {value} = event.target;
    const name = ref1.current.getAttribute('name')
    console.log(value)
    setValue(
      (preValue)=>{
        return{
          ...preValue,
          [name]: value
        }
      }
    )
  }
  useEffect(()=>{
    console.log(value)
  },[value])
  return (
    <div className='parent'>
        <form>
          <div className='subbox'>
            <h4>Enter Your Name: </h4> 
            <TextField 
                name='Name' 
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
        </form>
    </div>
  )
}

