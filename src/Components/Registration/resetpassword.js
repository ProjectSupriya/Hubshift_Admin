import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Typography, Paper, Box, TextField, Button, Grid, Container } from '@mui/material';
import { useNavigate } from "react-router-dom";


const SignIn = () => {

    let navigate = useNavigate();

    function applyjob() {
      navigate("/");
      console.log("navigate", navigate);
    }

    return (
        <>
                <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                            <Box
                                elevation={0}
                                sx={{
                                justifyContent: "start",
                                }}
                            >
                                <MailOutlineIcon sx={{ fontSize: '80px', color:"#01C1EB" }} />
                                <Typography sx={{ fontSize:"25px"}}>Hubshift</Typography>
                            </Box>
                            </Grid>
                        </Grid>
                        <Paper

                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 40,
                                border: "1px solid #01C1EB"
                            }}
                        >

                            <Box component="form" sx={{ mt: 0 , width:"100%"}}>
                                <Typography style={{ textAlign: 'center', fontWeight:"bold", fontSize:'20px' }} mb={2}>
                                Reset Password
                                </Typography>

                                <Grid container spacing={4} sx={{ mt:4, }} >
                                <Grid item xs={12} md={6} >
                                        <Box
                                    sx={{'& .MuiTextField-root': { m: 1, width: '100%'}, }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                    <div>
                                    <Typography sx={{fontWeight:"bold", m:1}}>New Password</Typography>
                                        <TextField
                                        label="New Password"
                                        id="outlined-size-small"
                                        size="Medium"
                                        />       
                                    </div>     
                                    </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} >
                                        <Box
                                            sx={{'& .MuiTextField-root': { m: 1, width: '100%'}, }}
                                            noValidate
                                            autoComplete="off"
                                            >
                                            <div>
                                            <Typography sx={{fontWeight:"bold", m:1}}>Confirm Password</Typography>
                                                <TextField
                                                label="Confirm Password"
                                                id="outlined-size-small"
                                                size="Medium"
                                                fullWidth
                                                />       
                                            </div>     
                                    </Box>
                                        </Grid>
                                </Grid>
                                <div
                                    style={{
                                        marginTop: "60px",
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Button style={{ textTransform: 'none', }}
                                        onClick={applyjob}
                                        variant='contained'
                                        type="submit"
                                        sx={{
                                            mt: 3, mb: 2,
                                            backgroundColor: "#01C1EB !important ",
                                            height: '35px',
                                            width: '150px',
                                        }}
                                    >
                                        SignIn
                                    </Button>
                                </div>
                            </Box>

                        </Paper>
                    </Container>

        </>
    );
};

export default SignIn;