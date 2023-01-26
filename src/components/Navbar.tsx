import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex' }} className="navbar-container">
              <NavLink to={'/'}>
                <Button>Home</Button>
              </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;