import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PrimarySearchAppBar from '../../Navbar/appbar';
import Tabbar from './tabbar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  
  color: theme.palette.text.dark,
  
}));

export default function ColumnsGrid() {
  return (
    <>
  
     <PrimarySearchAppBar/>
     <Box sx={{display:'flex',justifyContent:'flex-start',}}>
     <Tabbar/>
     </Box>  
      
    </>
  );
}
