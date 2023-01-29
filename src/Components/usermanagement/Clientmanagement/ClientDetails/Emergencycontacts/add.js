import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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


