import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from '../../../Sidebar/appbar';
import Button from '@mui/material/Button';
import {RadioGroup,Radio} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Days from './select/days'
import Date from './select/date'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    
    color: theme.palette.text.dark,
    
  }));

  export default function ColumnsGrid() {
    return (
      <>

        <Grid container spacing={4} >
      <Grid item xs={12} md={6}>
                    <Item
                        elevation={0} >
                        <Box
                       sx={{
                            '& .MuiTextField-root': {  width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <Typography
                            sx={{
                            fontsize: "20px",
                            color: "#000000",
                            fontWeight: "700",
                            p: 0,
                            }}
                        >
                      Start Date
                        </Typography>
                        <Date/>
                        </Box>
                    </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Item
                        elevation={0} >
                        <Box
                       sx={{
                            '& .MuiTextField-root': {  width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <Typography
                            sx={{
                            fontsize: "20px",
                            color: "#000000",
                            fontWeight: "700",
                            p: 0,
                            }}
                        >
                     End Date
                        </Typography>
                        <Date/>
                        </Box>
                    </Item>
                    </Grid>
        <Grid item xs={12} md={12} >
            <Item
                    elevation={0}
                    sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                    
                    }}
            >
                
            <Typography padding='5px' fontWeight='bold'>Frequency</Typography>
            <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            >
           

            <FormControlLabel value="Weekly"  control={<Radio />} label="Weekly" />
            <FormControlLabel value="Fortnightly"  control={<Radio />} label="Fortnightly" />
            <FormControlLabel value="Monthly"  control={<Radio />} label="Monthly" />

            </RadioGroup>

            </Item>

            </Grid>
      </Grid>
      <Grid container spacing={4} sx={{mt:1}}>
      <Grid item xs={12} md={6}>
                    <Item
                        elevation={0} >
                        <Box
                       sx={{
                            '& .MuiTextField-root': {  width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <Typography
                            sx={{
                            fontsize: "20px",
                            color: "#000000",
                            fontWeight: "700",
                            p: 0,
                            }}
                        >
                      Days
                        </Typography>
                        <Days/>
                        </Box>
                    </Item>
                    </Grid>
      </Grid>
      </>
    );
  }