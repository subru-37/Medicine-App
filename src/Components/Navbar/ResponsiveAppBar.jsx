import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './ResponsiveAppBar.css';
import {Link} from 'react-router-dom';
import pp from "../../assets/jpg/IMG20221025172200.jpg";
import Brightness4Icon from '@mui/icons-material/Brightness4';
const pages = ['About us','Form','Remainder'];


const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{backgroundColor: '#FF570C !important', position: 'static'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
		{/* add your logo here replacing adbicon */}
          <Box
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "'Montserrat', sans-serif",
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1.5rem'
            }}
          >
            <Link className="Links" to='/'>Ace Bikes</Link>
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
              justifyContent: 'center'
            }}
          >
            <Link className="Links" to='/'>Ace Bikes</Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end', maxWidth:'75vw',fontFamily: "'Montserrat', sans-serif" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <p style={{margin: '0 1rem'}}>{page}</p>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;




