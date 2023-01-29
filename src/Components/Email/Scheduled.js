import { Grid } from '@mui/material';
import React from 'react';
import Scheduled1 from "../assets/Scheduled1.png"
import Scheduled2 from "../assets/Scheduled2.png"

const Preview = () => {

    const Imagesty = {
        width:'100%',
    }

    return (

        <>

          <Grid container spacing={2} mt={4}>

            <Grid  item xs={12} md={6}>
               <img style={Imagesty} src={Scheduled1} alt={'image6'} />
            </Grid>

            <Grid item xs={12} md={6}>
               <img style={Imagesty} src={Scheduled2} alt={'image6'} />
            </Grid>

        
            </Grid> 

         
        </>
    );
};

export default Preview;