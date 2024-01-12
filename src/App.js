import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery'; 
import Home from './Pages/Home';
import Footer from './Components/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "./Components/Navbar";
import Information from './Pages/Information';


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode);

  
  const appTheme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light',
      light: {
        primary: '#fd5623',
        text: '#09223b',
        textAccent: '#144b82',
        background: '#f6f9fc',
        accent: '#d7e5f2',
        accentRgb: '215, 229, 242',
      },
      dark: {
        primary: '#fe9474',
        text: '#f6f9fc',
        textAccent: '#b9d0e8',
        background: '#061423',
        accent: '#15243d',
        accentRgb: '21, 36, 61',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode ? '#061423' : '#f6f9fc',
          },
        },
      },
    },
  });

  const handleChange = () => {
    setMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', mode);
  }, [mode]);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <BrowserRouter>     
          <Navbar  handleChange={handleChange}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Information" element={<Information />} />
          </Routes>
          <Footer />    
      </BrowserRouter>
    
    </ThemeProvider>
  );
}

export default App;
