import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tab from './tab'

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor:"#E3E3E3"}}
        >
          <Typography fontSize='20px' >Meeting</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
          <Tab/>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}