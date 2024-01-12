import { Box } from '@mui/material';
import styled from '@emotion/styled';


const StyledBox = styled(Box)`
width: 50%;
flex-direction: column;
display: flex;
align-items: center;
padding: 40px;
gap: 30px;
border: 1px solid ${(props) => props.theme.palette[props.theme.palette.mode].accent};
transition-timing-function: linear;
  transition: stroke-dashoffset 4s, stroke-dasharray 4s;

&:hover {
  border-color: ${(props) => props.theme.palette[props.theme.palette.mode].primary};
}

`;

export default StyledBox;