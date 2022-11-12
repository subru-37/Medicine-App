import React from 'react';
import { useState,useEffect } from 'react';
import './MobileAppBar.css';
import InfoIcon from '@mui/icons-material/Info';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import BottomNavigation from '@mui/material/BottomNavigation';
import FilterListIcon from '@mui/icons-material/FilterList';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import { Link } from 'react-router-dom';
const MobileAppBar = () => {
  const theme = createTheme({
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
  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setWidth(window.innerWidth)
    })
  },[width])

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
      icon: <Brightness4Icon/>,
      label: 'Dark switch',
      Link: "/"
    }
  ];
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ backgroundColor: '#3B3486 !important', 
                position: 'fixed', 
                display:{xxs:'flex',md:'none'}, 
                bottom:'0px', 
                height: 'auto',
                width:`${width}px`, 
                justifyContent: {xxs: 'center', xs: 'space-around' },
                flexWrap: {xxs: 'wrap', xs: 'nowrap'}}}
        >
          {pages.map(x=>{
            const {icon , label, Link} = x;
            return(
              <a href={Link} className='Links'><BottomNavigationAction key={label} label={label} icon={icon} />{label}</a>
              //<Link key={label} to={Link}><BottomNavigationAction label={label} icon={icon} /></Link>
            );
          })}
        </BottomNavigation>
      </div>
    </ThemeProvider>
  );
};

export default MobileAppBar;