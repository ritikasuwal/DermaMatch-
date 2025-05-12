// src/components/Layout.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', color: '#00abff' }}>
      <Toolbar>
      
        
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <img 
            src="src\assets\logo.png"
            alt="Dermamatch Logo"
            style={{ width: 40, height: 40, marginRight: '2px' }} 
          />
          </Link>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dermamatch
        </Typography>
        <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color="inherit">
            <InfoIcon />
          </IconButton>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color="inherit">
            <ContactMailIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        bgcolor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        py: 1,
      }}
    >
      <Typography variant="body2">&copy; 2025 Dermamatch. All Rights Reserved.</Typography>
    </Box>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container component="main" sx={{ mt: 2 }}>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
