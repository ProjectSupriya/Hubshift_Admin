import { Grid } from '@mui/material';
import React from 'react';
import Template from "../assets/template.png"
import Template1 from "../assets/template1.png"
import Template2 from "../assets/template2.png"
import Template3 from "../assets/template3.png"
import Template4 from "../assets/template4.png"
import Template5 from "../assets/template5.png"


const Selecttemplate = () => {

   const Imagesty = {
        width:'100%',
        height:'220px',
    }

    return (

        <>

          <Grid container spacing={2} mt={3}>

            <Grid item xs={12} md={2}>
               <img style={Imagesty} src={Template} alt={'image6'} />
            </Grid>

            <Grid item xs={12} md={2}>
               <img style={Imagesty} src={Template1} alt={'image5'} />
            </Grid>

            <Grid item xs={12} md={2}>
               <img style={Imagesty} src={Template2} alt={'image4'} />
            </Grid>

            <Grid item xs={12} md={2}>
               <img style={Imagesty} src={Template3} alt={'image3'} />
            </Grid>

            <Grid item xs={12} md={2}>
               <img style={Imagesty} src={Template4} alt={'image2'} />
            </Grid>

            <Grid item xs={12} md={2}>
               <img style={Imagesty} src={Template5} alt={'image1'} />
            </Grid>
            
            </Grid> 

         
        </>
    );
};

export default Selecttemplate;