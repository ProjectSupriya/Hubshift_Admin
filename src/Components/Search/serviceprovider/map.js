import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Map from '../../assets/map.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

  export default function RowAndColumnSpacing() {
    return (
      <Container>        
        <Box sx={{ width: '100%',backgroundColor:'#fff' }}>
<Grid item xs={12} md={12}>
      <Item elevation={0}>
      
      <img src= {Map} alt=""  style={{objectFit:'contain', width:'100%'}} />
     
      </Item>
      </Grid>
      </Box>
    
    </Container>
    );
  }
  