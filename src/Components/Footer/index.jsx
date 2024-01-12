import { useTheme } from '@mui/material/styles';
import { Container, Typography, AppBar, Box } from '@mui/material';
function Footer() {
  const theme = useTheme();

  const backgroundStyle = {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.background : theme.palette.light.background,
    color: theme.palette.mode === 'dark' ? theme.palette.dark.text : theme.palette.light.text,
    backgroundImage:'none',
  };
  const footer ={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
  }

  return (
    <AppBar position="static" style={backgroundStyle}>
      <Container maxWidth="xl">   
        <Box style={footer}>
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
          <Typography  
            component="a"
            href="#top"
            sx={{
              color: theme.palette.mode === 'dark' ? theme.palette.dark.text : theme.palette.light.text,
              textDecoration: 'none',
            }}>
            À propos
          </Typography>
          <Typography  
            component="a"
            href="/Information"
            sx={{
              color: theme.palette.mode === 'dark' ? theme.palette.dark.text : theme.palette.light.text,
              textDecoration: 'none',
            }}>
            Information
          </Typography>
          <Typography>
            2024
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Footer;
