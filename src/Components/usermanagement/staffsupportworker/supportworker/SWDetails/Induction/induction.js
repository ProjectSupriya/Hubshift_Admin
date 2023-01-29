import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Table from './table'
import Daily from './daily'
import Unit from './unit'
import Client from './client'
import Training from './training'
import Access from './access'
import Policies from './policies'
import Security from './security'
import Work from './work'
import Enviornment from './enviornment'
import Motor from './motor'
import Cash from './cash'

export default function SimpleAccordion() {
  return (
    <div>
    <Box sx={{mt:5}}>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor:"#E3E3E3"}}
        >
          <Typography sx={{fontSize:'20px'}} >Staff Responsibility & Management</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
          <Table/>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{backgroundColor:"#FF000052"}}
        >
          <Typography sx={{fontSize:'20px'}} >Daily</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
          <Daily/>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{backgroundColor:"#01C1EB8A"}}
        >
          <Typography sx={{fontSize:'20px'}} >Unit/home orientation</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
          <Unit/>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{backgroundColor:"#01C1EB8A"}}
        >
          <Typography sx={{fontSize:'20px'}} >Supporting Clients</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
          <Client/>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={{backgroundColor:"#01C1EB8A"}}
        >
          <Typography sx={{fontSize:'20px'}} >Training</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
          <Training/>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={{backgroundColor:"#01C1EB8A"}}
        >
          <Typography sx={{fontSize:'20px'}} >Computer Access</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
          <Access/>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={{backgroundColor:"#01C1EB8A"}}
        >
          <Typography sx={{fontSize:'20px'}} >Policies & Procedures</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
          <Policies/>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={{backgroundColor:"#01C1EB8A"}}
        >
          <Typography sx={{fontSize:'20px'}} >Security</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
          <Security/>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={{backgroundColor:"#01C1EB8A"}}
        >
          <Typography sx={{fontSize:'20px'}} >Work, Health & Safety</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
          <Work/>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={{backgroundColor:"#01C1EB8A"}}
        >
          <Typography sx={{fontSize:'20px'}} >Environment & Sustainability</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
          <Enviornment/>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={{backgroundColor:"#01C1EB8A"}}
        >
          <Typography sx={{fontSize:'20px'}} >Motor Vehicle</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
          <Motor/>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={{backgroundColor:"#01C1EB8A"}}
        >
          <Typography sx={{fontSize:'20px'}} >Cash & Financial Management</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
          <Cash/>
        </AccordionDetails>
      </Accordion>
      </Box>
    </div>
  );
}