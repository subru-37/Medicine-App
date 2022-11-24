import React from 'react';
import { useState,useEffect,useRef,useContext } from 'react';
import './MobileAppBar.css';
import InfoIcon from '@mui/icons-material/Info';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import BottomNavigation from '@mui/material/BottomNavigation';
import FilterListIcon from '@mui/icons-material/FilterList';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../App';
import { Button } from '@mui/material';
const MobileAppBar = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const ref1 = useRef();
  const theme1 = createTheme({
    breakpoints: {
      values: {
        xxs: 0,
        xs: 360,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const [value, setValue] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(0);
  // useEffect(()=>{
  //   ref1.current.addEventListener('resize',()=>{
  //     setHeight(ref1.current.clientHeight);
  //   })
  //   console.log(height)
  // },[height])
  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setWidth(window.innerWidth)
    })
  },[width])

  let history = useNavigate();
  const pages = [
    {
      icon: <InfoIcon/>,
      label: 'About Us',
      Link: "/"
    },
    {
      icon: <FilterListIcon/>,
      label: 'Remainders',
      Link: "/remainders"
    },
    {
      icon: <ViewQuiltIcon/>,
      label: 'Submit Form',
      Link: "/form"
    },
    {
      icon: <Brightness4Icon onClick={()=>(setTheme(!theme))}/>,
      label: 'Dark switch',
    }
  ];
  return (
    <ThemeProvider theme={theme1}>
      <div>
        <BottomNavigation
          ref={ref1}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ backgroundColor: theme ? 'black' :'#FFE15D', 
                position: 'fixed', 
                padding: '10px 0',
                display:{xxs:'flex',md:'none'}, 
                // bottom:'0px', 
                // zIndex:'100',
                height: 'auto',
                width:`${width}px`, 
                justifyContent: {xxs: 'center', xs: 'space-around' },
                flexWrap: {xxs: 'wrap', xs: 'nowrap'}}}
        >
          {pages.map(x=>{
            const {icon , label, Link} = x;
            return(
            <BottomNavigationAction key={label} onClick={()=>(history(Link))} sx={{padding: '0',color: theme ? "green": '#B01E68',}} label={label} icon={icon}/>
            );
          })}
        </BottomNavigation>
      </div>
    </ThemeProvider>
  );
};

export default MobileAppBar;