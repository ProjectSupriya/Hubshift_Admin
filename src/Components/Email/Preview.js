import { Grid } from '@mui/material';
import React from 'react';
import Previewimg from "../assets/Preview.png"



const Preview = () => {

 

    return (

        <>

          <Grid container spacing={2} mt={3}>

            <Grid item xs={12} md={2}>
               <img src={Previewimg} alt={'image6'} />
            </Grid>

        
            </Grid> 

         
        </>
    );
};

export default Preview;