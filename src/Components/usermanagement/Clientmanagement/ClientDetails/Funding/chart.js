import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import Chart1 from "../../.././../assets/Chart1.png";
import Chart2 from "../../.././../assets/Chart2.png";
import Chart3 from "../../.././../assets/Chart3.png";

import "./Styling/Funding.css";

export default function Chart() {
  return (
    <>

    <Box className='Boxsty'
  >

   <Link style={{textDecoration: 'none'}} to ='/addfunding'>
     <Button  className='Button' variant='contained' sx={{m:1}} >
       Add New
     </Button>
     </Link>

     <Button  className='Button' variant='contained' sx={{m:1}}>
       Export
     </Button>

    </Box>

    <Grid container>

      <Grid item md={12} >
         <img src={Chart1} alt="Chart 1" width='100%' />
      </Grid>

      {/* className='Gridsty' */}

      <Grid mt={10} item md={12} className='Gridsty' >
         <img src={Chart2} alt="Chart 1"  />
      </Grid>

      <Grid mt={10} item md={12} >
         <img src={Chart3} alt="Chart 1" width='100%' />
      </Grid>

    </Grid>
    
   
    </>
   
  );
}
