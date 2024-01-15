import React from 'react';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useTheme, Typography, Box } from '@mui/material';
import ActionAreaCard from '../../Components/Card';
import styled from '@emotion/styled';
import projectsData from '../../projets.json';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion'
import StyledBox from '../../Components/StyledBox';
import Svg from '../../assets/map.svg';


const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery('(max-width:900px)');


  const titleStyleh1 = {
    color: theme.palette[theme.palette.mode].text,
    fontWeight: 700,
    letterSpacing: '1px',
    lineHeight: 1,
    fontSize: isSmallScreen ? '3rem' : '6rem',
  };

  const titleStyleh2 ={
    color: theme.palette[theme.palette.mode].primary,
    fontWeight: 700,
    letterSpacing: '1px',
    lineHeight: 1,
    fontSize: isSmallScreen ? '2rem' : '4rem',
  }

  const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.palette[props.theme.palette.mode].background};
  color: ${(props) => props.theme.palette[props.theme.palette.mode].text};
  border-radius: 32px;
  align-items: center;
  border: 1px solid ${(props) => props.theme.palette[props.theme.palette.mode].accent};
  display: flex;
  font-size: 1rem;
  height: 56px;
  justify-content: space-between;
  padding: 0 24px;
  transition: border .3s linear;
  width: 100%;
  text-transform: none;

  &:hover {
    border-color: ${(props) => props.theme.palette[props.theme.palette.mode].primary};
    background-color: ${(props) => props.theme.palette[props.theme.palette.mode].background};
    .MuiSvgIcon-root {
      color: ${(props) => props.theme.palette[props.theme.palette.mode].primary};
    }
  }
`;

  const section1Style = {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.background : theme.palette.light.background,
    color: theme.palette.mode === 'dark' ? theme.palette.dark.text : theme.palette.light.text,
    height:'100%'
  };

  const aPropos ={
    width: isSmallScreen ? '100%' : '30%',
  }

  const introStyle = {
    flexDirection: isSmallScreen ? 'column' : 'row',
    display: 'flex',
    width: isSmallScreen ? '100%' : '100%',
  };

  const projetsStyle = {
    width: isSmallScreen ? '100%' : '80%',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
  };

  const socialContactStyle = {
    width: isSmallScreen ? '100%' : '50%',
    display: 'flex',
    flexDirection: 'column',
  };

  const socialStyle = {
    width: '100%',
    height:'100%',
  };

  const contactStyle = {
    width: isSmallScreen ? '100%' : '100%',
    height:'100%',
  };

  const test = {
    width: '100%',
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'row',
  };

  const test2 = {
    width: isSmallScreen ? '100%' : '70%',
    marginTop: isSmallScreen ? '55px' : '0px',
    display: 'flex',
    flexDirection: 'row',
  };

  const animation ={
    hover: {
      scale: 1.1,
      transition: { type: 'spring', bounce: 0.6 },
    },
    
  }

  return (
    <div style={section1Style}>
      <Box style={{ ...section1Style, ...introStyle }}>
        <StyledBox style={test2}>
          <Typography style={titleStyleh1}>
            Développeur Web
          </Typography>
        </StyledBox>
        <StyledBox style={{
          backgroundImage: `url(${Svg})`,
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
         width: isSmallScreen ? '100%' : '15%',}}>
</StyledBox>
        <StyledBox style={aPropos}>
          <Typography style={titleStyleh2} >
            À propos
          </Typography>
          <Typography>
            Bonjour, je suis un développeur web français, vivant à Poitiers. Passionné par le développement web et le design, j'adore explorer de nouvelles technologies web et je suis toujours en quête de nouvelles compétences à acquérir.
          </Typography>
          <StyledButton variant="contained" href={`${process.env.PUBLIC_URL}/test.pdf`} target="_blank" >
            En savoir plus
            <motion.div
      whileHover="hover" variants={animation}
     >
       <ArrowOutwardIcon />
     </motion.div>
            
          </StyledButton>
        </StyledBox>
      </Box>

      <Box style={test}>
        <Box style={socialContactStyle}>
          <StyledBox style={socialStyle}>
            <Typography style={titleStyleh2}>
              Social
            </Typography>
            <StyledButton variant="contained" target="_blank" href='https://github.com/ArthurB86' endIcon={<ArrowOutwardIcon />}>
              Github
            </StyledButton>
            <StyledButton variant="contained" target="blank" href='www.linkedin.com/in/arthur-biet-7871182aa' endIcon={<ArrowOutwardIcon />}>
              Linkedin
            </StyledButton>
          </StyledBox>
          <StyledBox style={{backgroundImage: `url(${Svg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: isSmallScreen ? '100%' : '100%',}}>
</StyledBox>
          <StyledBox style={contactStyle}>
            <Typography style={titleStyleh2}>
              Contact
            </Typography>
            <StyledButton variant="contained" href="mailto:arthur.biet@gmail.com" endIcon={<ArrowOutwardIcon />}>
              Envoyer un mail
            </StyledButton>
            <StyledButton variant="contained" href="tel:0628767192"  endIcon={<ArrowOutwardIcon />}>
              Appeler
            </StyledButton>
          </StyledBox>
        </Box>

        <StyledBox style={projetsStyle}>
          <Typography style={titleStyleh2} >
            Projets
          </Typography>
          <Box sx={{
            width: '90%',
            justifyContent: 'space-between',
            gap: '30px',
            display: 'flex',
            flexDirection: 'column' 
            }}>
            {projectsData.map((project, index) => (
              <ActionAreaCard key={index} project={project} />
            ))}
          </Box>
        </StyledBox>
      </Box>
    </div>
  );
}

export default Home;
