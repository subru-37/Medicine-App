import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './ResponsiveAppBar.css';
import {Link} from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { NavLink } from "react-router-dom";
import { useContext} from 'react';
import { ThemeContext } from '../../App';
const pages = [
  {
    Name:'About us',
    Link: "/"
  },
  {
    Name:'Form',
    Link: "/form"
  },
  {
    Name:'Remainders',
    Link: "/remainders"
  }];


const ResponsiveAppBar = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <AppBar sx={{backgroundColor: theme ? 'black': '#F49D1A', position: 'static',top:'0px',borderBottom:theme?'3px dotted green':''}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent: 'space-around'}}>
		{/* add your logo here replacing adbicon */}
          <Box
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "'Montserrat', sans-serif",
              textDecoration: 'none',
              fontSize: '1.5rem',
            }}
          >
            <Link className="Links" to='/'><h3 style={{color: theme ? 'green' :'black'}}>Med Tracker</h3></Link>
          </Box>


          {/* add your logo here replacing adbicon */}
          <Box
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontFamily: "'Montserrat', sans-serif",
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1.5rem',
              justifyContent: 'center',
              width: '100vw'
            }}
          >
            <Link className="Links" to='/'><h3 style={{color: theme ? 'green' :'black'}}>Med Tracker</h3></Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end', maxWidth:'75vw',fontFamily: "'Montserrat', sans-serif" }}>
            {pages.map((page) => {
              const {Name, Link} = page
              return(
                <Button
                key={Name}
                sx={{ my: 2, color: '#000063', display: 'block' }}
              >
                <NavLink end className='Links' to={Link}><p style={{margin: '0 1rem',color: theme ? 'green' :'black'}}>{Name}</p></NavLink>
                {/* <a href={Link} className='Links'><p style={{margin: '0 1rem'}}>{Name}</p></a> */}
              </Button>
              );
            })}
            <Button onClick={()=>(setTheme(!theme))}><Brightness4Icon/></Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;




