import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import CustomizedSwitches from '../Switches';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



function ResponsiveAppBar({ handleChange }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  
  const backgroundStyle = {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.background : theme.palette.light.background,
    color: theme.palette.mode === 'dark' ? theme.palette.dark.text : theme.palette.light.text,
    backgroundImage: 'none',
    borderBottom: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.dark.accent : theme.palette.light.accent}`,
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:'100%'
  };
  const toggleDarkMode = () => {
    handleChange();
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const sections = [
    { id: 'about', label: 'À propos' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ];
  
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
  
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <AppBar
    position={isSmallScreen ? 'fixed' : 'static'} style={backgroundStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={containerStyle}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/Home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: theme.palette.mode === 'dark' ? theme.palette.dark.text : theme.palette.light.text,
              textDecoration: 'none',
            }}
          >
            Arthur BIET
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             {sections.map((section) => (
  <MenuItem key={section.id} onClick={() => { handleScrollToSection(section.id); handleCloseNavMenu(); }}>
    {section.label}
  </MenuItem>
))}
            </Menu>
          </Box>
          <Box sx={{
  display: 'flex',
  alignItems: 'center', 
}}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/Home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: theme.palette.mode === 'dark' ? theme.palette.dark.text : theme.palette.light.text,
              textDecoration: 'none',
            }}
          >
            Arthur Biet
          </Typography>
            <CustomizedSwitches handleChange={toggleDarkMode} sx={{justifyContent:'flexend'}} />
          </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;