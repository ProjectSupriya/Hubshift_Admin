import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Taskcard from './taskcard'

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
   <Box   sx={{display:"flex", alignContent:"center", justifyContent:"center"}}><Taskcard/></Box> 
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
