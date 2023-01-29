import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Avatar from '@mui/material/Avatar';


const steps = [
  'Task 1',
  'Task 2',
  'Task 3',
  'Task 4',
  'Task 5'
];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ pb:1,display:"flex", alignContent:"center", justifyContent:"center" }}>
    <Avatar sx={{ backgroundColor:"#0C8AFF",display:"flex", alignContent:"center", justifyContent:"center" }}>5</Avatar>
    </Box>
    
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label} >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
