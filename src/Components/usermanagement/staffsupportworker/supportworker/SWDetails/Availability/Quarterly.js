import React, { useState } from "react";
import { Grid,Typography,Box,TextField,Link } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import QuarterlyDropDown from './QuarterlyDropDown';
import Divider from '@mui/material/Divider';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    height: 30,
    width: 60,
  },
}));

function createData(Days, all,first,second,third,fourth,fifth) {
    return {Days, all,first,second,third,fourth,fifth  };
  }

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const rows = [
    createData('Sunday'),

    createData('Monday'),

    createData('Tuesday'),

    createData('Wednesday'),

    createData('thursday'),

    createData('Friday'),

    createData('Saturday'),
  
   
  ];

const Quarterly = () => {
  const classes = useStyles();
  const [show,setShow]=useState(false)
    const items = [
        {
          quarterly:"1st Quarterly",
          Monthly:"Jan Feb Mar"
        },
        {
          quarterly:"2nd Quarterly",
          Monthly:"Apr May June"
        },
        {
          quarterly:"4rd Quarterly",
          Monthly:"Jul Agu Sep"
        },
        {
          quarterly:"4th Quarterly",
          Monthly:"Oct Nov Dec"
        },
    ]
    const Item = ({quarterly,Monthly  }) => {
        return (

         <Box style={{display:'flex',justityContent: 'center',alignItems: "center", flexDirection: 'column',backgroundColor:'#CAF5FF'}}>
           <Box sx={{  width: '100%', maxWidth: 360,}}>
        
               <Typography mb={2} fontSize="25px" fontWeight="bold" textAlign="center">{quarterly}</Typography>
               <Divider variant="middle" />
           </Box>
        
           <Box sx={{display:'flex',flexDirection: 'row',justityContent: 'center',mt:2,}}>
               <Typography padding='15px' fontWeight="bold">{Monthly}</Typography>
              
         </Box>
         </Box>
         );
    }
    
    return (
        <>
         <div>
         <Grid container>

         <Grid item xs={12} sm={12} md={12}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop:4,
                        marginBottom:8
                      }}
                    >
                      <Checkbox />
                      <Typography fontSize="13px" fontWeight="bold">
                        Default availability is set to 15 days, 6 am - 10 pm
                      </Typography>
                    </Box>
        </Grid>

        <Grid item xs={12}md={12} sx={{display: 'flex', justifyContent: 'flex-end',mb:3 }}>
        <Link href="/viewall">View All</Link>
        </Grid>

         <Grid item xs={2} sm={2} md={2}>
            <Box>
         
              <QuarterlyDropDown/>

            </Box>
         </Grid>

         <Grid item xs={10} md={10}>
         {/* Carousel */}

         <div>
      <Carousel
        autoPlay={false} 
        navButtonsAlwaysVisible
      >
        {items.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </Carousel>
         </div>
             
        <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650, }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{border:1}}>Days</TableCell>
            <TableCell sx={{border:1}} align="right">All</TableCell>
            <TableCell sx={{border:1}} align="right">1st</TableCell>
            <TableCell sx={{border:1}} align="right">2nd</TableCell>
            <TableCell sx={{border:1}} align="right">3rd</TableCell>
            <TableCell sx={{border:1}} align="right">4th</TableCell>
            <TableCell sx={{border:1}} align="right">5th</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow 
            //   key={row.Days}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
            >
              <TableCell sx={{border:1}} component="th" scope="row">
                {row.Days}
              </TableCell>
              <TableCell sx={{border:1}} align="right">
              <div style={{display: "flex", flexDirection: "column",}}>
                 {

                  show?

                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent:'center',alignItems:'center', mt: 1 }}>
                  <TextField
                    variant="outlined"
                    label="Start"
                    defaultValue="9:00"
                    id="outlined-required"
                    InputProps={{
                      className: classes.input,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  ></TextField>

                  <TextField
                    required
                    id="outlined-required"
                    label="end Time"
                    defaultValue="7:00"
                    InputProps={{
                      className: classes.input,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
           </Box>
                  
                  :null
                 }
                <Checkbox {...label} onClick={()=>setShow(true)}/>
              </div>
                </TableCell>
              <TableCell sx={{border:1}} align="right"><Checkbox {...label}/></TableCell>
              <TableCell sx={{border:1}} align="right"><Checkbox {...label}/></TableCell>
              <TableCell sx={{border:1}} align="right"><Checkbox {...label}/></TableCell>
              <TableCell sx={{border:1}} align="right"><Checkbox {...label}/></TableCell>
              <TableCell sx={{border:1}} align="right"><Checkbox {...label}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
         </TableContainer>
   

         </Grid>

         </Grid>
         </div>   
        </>
    );
};

export default Quarterly;