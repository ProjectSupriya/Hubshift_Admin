import { Grid } from "@mui/material";
import React from "react";
import Historyimg from "../assets/History.png";

const History = () => {

    const images = [
        {
          id: 1,
          url: Historyimg,
          title: 'Image 1',
        },
        {
          id: 2,
          url: Historyimg,
          title: 'Image 2',
        },
        {
          id: 3,
          url: Historyimg,
          title: 'Image 3',
        },

    ];

    const Imagesty = {
        // margin:'10px',
        width:'100%',
    }

  return (
    <>
      <Grid container spacing={2} mt={4}>

        <Grid item xs={12} md={12}>

          <div>
           {images.map(image => (
           <img style={Imagesty} key={image.id} src={image.url} alt={image.title} />
           ))}
         </div>

        </Grid>

    
      </Grid>
    </>
  );
};

export default History;
