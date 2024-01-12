import React from 'react';
import { useTheme, Typography, Box, Link, } from '@mui/material';
import StyledBox from '../../Components/StyledBox';
import useMediaQuery from '@mui/material/useMediaQuery';
import Svg from '../../assets/map.svg';



const Information = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  const titleStyleh2 = {
    color: theme.palette[theme.palette.mode].primary,
    fontWeight: 700,
    letterSpacing: '1px',
    lineHeight: 1,
    fontSize: isSmallScreen ? '2rem' : '4rem',
    marginBottom: '30px',
  };

  const phoneNumberStyle = {
    color: theme.palette.mode === 'dark' ? theme.palette.dark.primary : theme.palette.light.primary,
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center',
    textAlign:'center',
    width: isSmallScreen ? '100%' : '50%',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Box
      sx={{
        ...containerStyle,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.background : theme.palette.light.background,
        color: theme.palette.mode === 'dark' ? theme.palette.dark.text : theme.palette.light.text,
      }}
    >
      <StyledBox style={sectionStyle}
      sx={{
        marginTop: isSmallScreen ? '65px' : '',
      }}>
        <Typography style={titleStyleh2}>À propos</Typography>
        <Typography>
          <strong>Nom :</strong> BIET Arthur (AB)
        </Typography>
        <Typography>
          <strong>Addresse :</strong> 24 rue Marcellin Berthelot
        </Typography>
        <Typography>
          <strong>Ville :</strong> Chatellerault 86100
        </Typography>
        <Box>
          <Typography>
            <strong>Email : </strong>
            <Link href="mailto:arthur.biet1@gmail.com" style={phoneNumberStyle}>
              arthur.biet1@gmail.com
            </Link>
          </Typography>
        </Box>
        <Typography>
          <strong>Téléphone : </strong>
          <Link href="tel:+33628767192" style={phoneNumberStyle}>
            +33 6 28 76 71 92
          </Link>
        </Typography>
      </StyledBox>

      <StyledBox style={{backgroundImage: `url(${Svg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: isSmallScreen ? '100%' : '50%',}}>
</StyledBox>

      <StyledBox style={sectionStyle} >
        <Typography style={titleStyleh2}>Hébergeur</Typography>
        <Typography>
        <strong> Nom : </strong>Vercel, Inc.
          </Typography>
          <Typography>
          <strong> Addresse : </strong>340 S Lemon Ave #4133 
          </Typography>
          <Typography>
          <strong> Ville : </strong>Walnut, CA, 91789
          </Typography>
          <Typography>
            <strong> Email : </strong> 
            <Link href="mailto:support@vercel.com" style={phoneNumberStyle}>  
                support@vercel.com
          </Link>
          </Typography>
          <Typography>
          <strong>Support : </strong> 
          <Link href="https://vercel.com/help" style={phoneNumberStyle}>
          https://vercel.com/help
        </Link>
        </Typography>
      </StyledBox>
    </Box>
  );
};

export default Information;
