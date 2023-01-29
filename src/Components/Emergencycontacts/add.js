import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';


export default function FullScreenDialog() {
  let navigate = useNavigate();

  function applyjob() {
    navigate("/addemergency");
    console.log("navigate", navigate);
  }
  return (
    <div>
      
      <Button 
      sx={{ color:'white',
       fontSize:'13px',
       width:'100px',
        backgroundColor:'#01c1eb !important', mb:5 }} 
       onClick={applyjob}             
             type="submit"
             variant="contained"            
           >            
             Add New
           </Button> 
      
    </div>
  );
}


