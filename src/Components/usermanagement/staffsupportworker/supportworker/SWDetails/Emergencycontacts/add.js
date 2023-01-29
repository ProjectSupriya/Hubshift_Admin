import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';


export default function FullScreenDialog() {
  let navigate = useNavigate();

  function applyjob() {
    navigate("/addswcontact");
  }
  return (
    <div>
      
      <Button 
      sx={{ color:'white',
       fontSize:'13px',
       width:'200px',
       textTransform:'capitalize', borderRadius:'5px', backgroundColor:'#01c1eb', mb:5 }} 
       onClick={applyjob}             
             type="submit"
            //  color="success"              
             variant="contained"            
           >            
             Add New
           </Button> 
      
    </div>
  );
}


