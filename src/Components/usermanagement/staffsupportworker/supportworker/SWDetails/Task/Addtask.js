import React from 'react';
import { makeStyles } from '@material-ui/core';

import {
    Typography, Box, Paper, Grid, useTheme, styled, TextField, FormControlLabel,
    Button, Stack, RadioGroup, Radio, Link,Container
}
    from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Date from './date';
import Priority from "./category";
import Status from "./status";
import PrimarySearchAppBar from '../../../.././../Sidebar/appbar';
import Statusdropdown from "./Clientdropdown";

const useStyles = makeStyles(theme => ({

    button: {
        border: 0,
        height: '55px',
        width: '200px',
        padding: '0 30px',
        backgroundColor: "#05C3DD !important ", //important
        color: "#FFFFFF !important ",
        borderRadius: '10px !important ',
    },


    Modelbutton: {
        margin: '5px',
        height: '40px',
        width: '160px',
        padding: '0 30px',
        backgroundColor: "#05C3DD !important ", //important
        color: "#FFFFFF ",
    },
    Capturebutton: {
        backgroundColor: "#FFFFFF !important ", //important
        color: "#000000 !important ",
        borderRadius: '20px !important ',
        height: '50px',

    },

    Button2:{
       
         
            backgroundColor: "#01C1EB !important ", 
            fontSize: "18px",
            textTransform: "capitalize",
            width: "150px",
            color: "#ffffff !important ",
            fontWeight: "600",
           
    },
    Button1:{
       
         
            backgroundColor: "#01C1EB !important ", 
            fontSize: "18px",
            textTransform: "capitalize",
            // width: "150px",
            color: "#ffffff !important ",
            fontWeight: "600",
           
    }

}));
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.dark,
}));

const Input = styled("input")({
    display: "none",
});


const AddTask = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <>
          <PrimarySearchAppBar/>

          <Container style={{paddingTop:"0px", paddingBottom:"0px"}}>

            <Grid container spacing={2} >

            <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
          </Grid>

          <Grid item xs={12} md={10}>

              <Grid container>
               

              

                <Grid item md={12} xs={12}>


                    <Item elevation={0}

                        sx={{
                            // backgroundColor: '#CAF5FF',
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                // backgroundColor: '#CAF5FF',
                                width: 1000,
                                // maxWidth: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                m: 2,
                            }}
                        >
                            <Typography fontWeight="bold" fontSize='30px' >Add Task  </Typography>
                           
                        </Box>

                    </Item>


                </Grid>

                <Grid container >

                <Grid item xs={12} md={6} sx={{p:1}}>
                <Typography
                  sx={{
                    textAlign: "left",
                    ml: 1,
                    fontsize: "20px",
                    color: "#000000",
                    fontWeight: "700",
                    p: 0,
                  }}
                >
                  Client
                </Typography>
              
                <Statusdropdown/>
                </Grid>

                <Grid item xs={12} md={12}>
                    <Item
                        elevation={0}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "start",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                width: 1500,
                                maxWidth: "100%",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontsize: "20px",
                                    color: "#000000",
                                    fontWeight: "700",
                                    p: 0,
                                    marginBottom: 2,
                                }}
                            >
                                Title
                            </Typography>
                            <TextField  fullWidth id="fullWidth" />
                        </Box>
                    </Item>
                </Grid>

                <Grid item xs={12} md={12}>
                    <Item
                        elevation={0}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "start",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                width: 1500,
                                maxWidth: "100%",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontsize: "20px",
                                    color: "#000000",
                                    fontWeight: "700",
                                    p: 0,
                                    marginBottom: 2,
                                }}
                            >
                                Assigned To
                            </Typography>
                            <TextField fullWidth id="fullWidth" />
                        </Box>
                    </Item>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <Item
                        elevation={0}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "start",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                width: 1500,
                                maxWidth: "100%",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontsize: "20px",
                                    color: "#000000",
                                    fontWeight: "700",
                                    p: 0,
                                    marginBottom: 2,
                                }}
                            >
                                Category
                            </Typography>
                            <TextField defaultValue="HomeCare" fullWidth id="fullWidth" />
                        </Box>
                    </Item>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>   
                    <Item
                        elevation={0}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "start",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                width: 1500,
                                maxWidth: "100%",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontsize: "20px",
                                    color: "#000000",
                                    fontWeight: "700",
                                    p: 0,
                                    marginBottom: 2,
                                }}
                            >
                               Due Date
                            </Typography>
                            <Date />
                           
                        </Box>
                    </Item>

                </Grid>

                <Grid mt={0} item xs={12} md={6}>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding:'11px',
                        }}
                    >

                        <Box>

                            <Typography fontWeight="bold">Frequency of Task</Typography>

                            <FormControlLabel
                                control={<Checkbox />}
                                label="Repeat Every Day"
                            />

                        </Box>
                        <Box>

                            <FormControlLabel
                                control={<Checkbox />}
                                label="Repeat in Week day"
                            />

                        </Box>
                        <Box>

                            <FormControlLabel
                                control={<Checkbox />}
                                label="Repeat Every Year"
                            />

                        </Box>
                        <Box>

                            <FormControlLabel
                                control={<Checkbox />}
                                label="On Location"
                            />

                        </Box>
                        <Box>

                            <FormControlLabel
                                control={<Checkbox />}
                                label="Select Location"
                            />

                        </Box>

                    </div>

                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography
                        sx={{
                            textAlign: "left",
                            //   ml: 1,
                            fontsize: "20px",
                            color: "#000000",
                            fontWeight: "700",
                            p: 1,
                        }}
                    >
                        priority
                    </Typography>
                    <Priority />
                </Grid>

                <Grid item xs={12} md={12}>

                    <Item
                        elevation={0}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "start",
                            alignItems: "center",
                        }}
                    >

                        <Typography padding='10px' fontWeight='bold'>Attach Document</Typography>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >


                            <FormControlLabel value="anyone" control={<Radio />} label="Upload" />
                            <FormControlLabel value="private" control={<Radio />} label="Capture" />

                        </RadioGroup>

                    </Item>

                </Grid>

                <Grid item xs={12} md={12}>
                    <Item
                        elevation={3}
                        sx={{
                            display: "flex",
                            // mt: 3,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                width: 1000,
                                maxWidth: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                m: 2,
                            }}
                        >
                            <Stack direction="row" alignItems="center" spacing={0}>
                                <label htmlFor="contained-button-file">
                                    <Input
                                        accept="image/*"
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <Button
                                        sx={{
                                            background: "#E0DCDC",
                                            width: "150px",
                                            color: "#000000",
                                            fontWeight: "600",
                                            "&:hover": {
                                                background: "#E0DCDC",
                                                transition: ".5s",
                                                boxShadow: 10,
                                            },
                                        }}
                                        variant="contained"
                                        component="span"
                                    >
                                        Choose File
                                    </Button>
                                </label>
                                <label htmlFor="icon-button-file">
                                    <Input
                                        accept="image/*"
                                        id="icon-button-file"
                                        type="file"
                                    />
                                </label>
                            </Stack>
                            <Button
                                sx={{
                                    background: "#01C1EB",
                                    fontSize: "18px",
                                    textTransform: "capitalize",
                                    width: "150px",
                                    color: "#ffffff",
                                    fontWeight: "600",
                                    "&:hover": {
                                        background: "#01C1EB",
                                        transition: ".5s",
                                        boxShadow: 10,
                                    },
                                }}
                                variant="contained"
                                component="span"
                            >
                                Upload
                            </Button>
                        </Box>
                    </Item>
                </Grid>


                <Grid item xs={12} md={12}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            marginTop: 5,
                            borderTop: 1
                        }}
                    >
                        <Typography mt={2} paddingLeft='25px' fontWeight='bold'>
                            If Capture Radio Button is Selected</Typography>

                        <Item
                            elevation={0}
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "start",
                                alignItems: "center",
                            }}
                        >

                            <Typography padding='10px' fontWeight='bold'>Attach Document</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >


                                <FormControlLabel value="anyone" control={<Radio />} label="Upload" />
                                <FormControlLabel value="private" control={<Radio />} label="Capture" />

                            </RadioGroup>

                        </Item>
                        <Box sx={{ paddingLeft: '20px' }}>
                            <Button variant='contained' className={classes.Capturebutton}>Clict to Capture</Button>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={12}>
                    <Item
                        elevation={0}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "start",
                            alignItems: "center",
                            marginTop: 10
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                width: 1500,
                                maxWidth: "100%",
                            }}
                        >
                            <Typography

                                sx={{
                                    fontsize: "20px",
                                    color: "#000000",
                                    fontWeight: "700",
                                    p: 0,
                                }}
                            >
                                Notes*
                            </Typography>
                            <TextField multiline rows={5} fullWidth id="fullWidth" />

                        </Box>
                    </Item>
                </Grid>

                <Grid container>

                <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    textAlign: "left",
                    ml: 1,
                    fontsize: "20px",
                    color: "#000000",
                    fontWeight: "700",
                    p: 0,
                  }}
                >
                  Status
                </Typography>
              
                <Status/>
                </Grid>

               </Grid> 

                <Grid item xs={12} md={12} sx={{ display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
                    <Button variant='contained' className={classes.Button2}> Update </Button>
                </Grid> 

                </Grid> 

             </Grid>

             </Grid>  

            </Grid>
            </Container>
        </>
    );
};

export default AddTask;