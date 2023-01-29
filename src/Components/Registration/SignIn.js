import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Typography, Paper, Box, TextField, Button, Grid, Container, Link } from '@mui/material';
import { useNavigate } from "react-router-dom";


const SignIn = () => {

    let navigate = useNavigate();

    function applyjob() {
      navigate("/dashboard");
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
                                border: "1px solid #01C1EB"
                            }}
                        >

                            <Box component="form" sx={{ m: 5, width:"100%" }}>
                                <Typography style={{ textAlign: 'center', fontWeight:"bold", fontSize:"20px" }} mb={2}>
                                Admin Sign in
                                </Typography>

                                <Grid container spacing={3}
                                    sx={{
                                        marginTop: '60px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >

                                    <Grid item xs={12} md={6} >
                                        <Box
                                    sx={{'& .MuiTextField-root': { m: 1, width: '100%'}, }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                    <div>
                                    <Typography sx={{fontWeight:"bold", m:1}}>Email</Typography>
                                        <TextField
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
                                    <Typography sx={{fontWeight:"bold", m:1}}>Password</Typography>
                                        <TextField
                                        id="outlined-size-small"
                                        size="Medium"
                                        />  
                                    </div>     
                                    </Box>
                                   
                                        </Grid>
                                </Grid>
                                <Grid item xs={12} md={12} >
                                <Box sx={{ float: 'right' }} >
                                            <Link href="/forgotpassword" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Box>     
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

                                <Box item
                                    style={{

                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>

                                    <Link href="#" variant="body2"  >
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Box>

                               
                            </Box>

                        </Paper>
                    </Container>
                

        </>
    );
};

export default SignIn;