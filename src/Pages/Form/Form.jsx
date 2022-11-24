import React,{useEffect, useState, useRef} from 'react'
import './Form.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function Form(props) {
  const ref0 = useRef();
  const ref1 = useRef();
  const freq = ['1','2','3','4']
  const [value, setValue] = useState({
    Name: "",
    Age: "",
    History:"",
    MName: '',
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
    const name = ref0.current.getAttribute('name');
    setValue(
      (preValue)=>{
        return{
          ...preValue,
          [name]: v
        }
      }
    )
  }
  function handleChangeAuto2(e,v,r){
    const name = ref1.current.getAttribute('name');
    setValue(
      (preValue)=>{
        return{
          ...preValue,
          [name]: v
        }
      }
    )
  }
  // useEffect(()=>{
  //   console.log(value)
  // },[value])
  function onClicked(event){
    // console.log(value)
    props.onAdd(value)
    setValue({
      Name: "",
      Age: "",
      History:"",
      MName: '',
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
                required
                autoComplete='off'
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
                required
                onChange={handleChange} 
                label="Enter your age" 
                autoComplete='off'
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
                autoComplete='off'
                id="standard-basic"/>
          </div>
          <div className='subbox'>
            <h4>Medicine Name: </h4> 
            <TextField 
                name='MName' 
                onChange={handleChange} 
                value={value.MName}
                required
                label="Fill this CAREFULLY!" 
                variant="standard" 
                autoComplete='off'
                id="standard-basic"/>
          </div>
          <div className='subbox'>
            <h4>Frequency?</h4>
            <Autocomplete
              ref={ref0}
              id="combo-box-Dosage"
              onChange={handleChangeAuto1}
              name='Dosage'
              options={freq}
              inputValue={value.Dosage}
              sx={{width: '70%'}}
              renderInput={(params) => <TextField {...params} label="Enter Dosage" required/>}
            />
          </div>
          <div className='subbox'>
            <h4>Before/After Food?</h4>
            <Autocomplete
              ref={ref1}
              id="combo-box-Time"
              name='Time'
              inputValue={value.Time}
              onChange={handleChangeAuto2}
              options={['Before','After']}
              sx={{width: '70%'}}
              renderInput={(params) => <TextField {...params} label="Enter Timing" required />}
            />
          </div>
          <button>Submit</button>
        </form>
    </div>
  )
}

