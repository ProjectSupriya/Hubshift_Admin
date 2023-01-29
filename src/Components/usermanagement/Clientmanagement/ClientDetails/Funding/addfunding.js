import React from "react";
import {useTheme,Container,Typography,Box,TextField,Grid,Paper,styled,Stack,Button,
  RadioGroup,FormControlLabel,Radio,FormLabel} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import PrimarySearchAppBar from "../../../../Sidebar/appbar";
import Type from './type';
import Date from './date'
import Service from './servicetype'

const useStyles = makeStyles((theme) => ({
  Modelbutton: {
    margin: "5px",
    height: "40px",
    width: "160px",
    padding: "0 30px",
    backgroundColor: "#05C3DD !important ", //important
    color: "#FFFFFF ",
  },
  btn: {
    backgroundColor: "#01C1EB !important",
    color: "#ffffff !important",
    fontSize: "18px",
    width: "150px",
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

const Viewnote = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <PrimarySearchAppBar />
      <Container style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <Grid container spacing={2} sx={{mb:10}}>
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>

          <Grid item xs={10} md={10}>

            <Grid container spacing={1}>

              <Grid item xs={7} md={7} mt={2}>
                <Typography
                  fontSize="22px"
                  sx={{
                    textAlign: "left",
                    ml: 1,
                    // fontsize: 30,
                    color: "#000000",
                    fontWeight: "bold",
                    p: 0,
                  }}
                >
                  Add Funding
                </Typography>
              </Grid>    
             {/* border start here */}
             <Grid mt={5} container >
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
                
            <Typography padding='5px' fontWeight='bold'>Access :</Typography>
          <RadioGroup
         row
         aria-labelledby="demo-row-radio-buttons-group-label"
         name="row-radio-buttons-group"
       >
        {/* <Typography>Access :</Typography> */}
     
        <FormControlLabel value="individual"  control={<Radio />} label="Individual" />
        <FormControlLabel value="NDIS"  control={<Radio />} label="NDIS" />
          </RadioGroup>
        
            </Item>

            </Grid> 
            
    <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} item xs={12} md={12}>
    <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
    <Typography sx={{ fontWeight: 'bold', color: "#000",  }}>NDIS Number: </Typography>
    &nbsp;&nbsp; <Typography sx={{ color: "#000" }}>1234567890</Typography>
    </Item>
    </Grid>
    <Typography sx={{ fontWeight: 'bold', color: "#000", ml:2, fontSize:"20px" }}>Plan Information</Typography>
    <Grid container spacing={2} >
              <Grid item xs={12} md={6}>
              <Item elevation={0}>
              <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {  width: '100%' },
                }}
                noValidate
                autoComplete="off"
                >
                <div>
                <Typography  sx={{
                        fontsize: "20px",
                        color: "#000000",
                        fontWeight: "700",
                        pl: 0,
                      }}>
                      Plan Start Date
                      </Typography>
                <Date/>
                </div>
                
                </Box></Item>
              </Grid>
              <Grid item xs={12} md={6}>
              <Item elevation={0}>
              <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {  width: '100%' },
                }}
                noValidate
                autoComplete="off"
                >
                <div>
                <Typography  sx={{
                        fontsize: "20px",
                        color: "#000000",
                        fontWeight: "700",
                        pl: 0,
                      }}>
                      Plan End Date
                      </Typography>
                <Date/>
                </div>
                
                </Box></Item>
              </Grid>
              </Grid>
             
              <Typography sx={{ fontWeight: 'bold', color: "#000", ml:2, fontSize:"20px" }}>Service Information</Typography>
    <Grid container spacing={1} >
              <Grid item xs={12} md={6}>
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
                      width: '100%',
                      // maxWidth: "100%",
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
                     Select Service Type
                    </Typography>
                    <Service />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
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
                      }}
                    >
                     Total Hours 
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>
              </Grid>
             

              <Grid container spacing={1} >
              <Grid item xs={12} md={6}>
                <Item
                  elevation={0}>
                  <Box
                     component="form"
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
                     Service Start Date
                    </Typography>
                    <Date />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item
                  elevation={0}>
                  <Box
                     component="form"
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
                     Service End Date 
                    </Typography>
                    <Date/>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
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
                      }}
                    >
                     Funding Source
                    </Typography>
                    <Type/>
                  </Box>
                </Item>
              </Grid>
              </Grid>

              <Grid container spacing={1} >
              <Grid item xs={12} md={6}>
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
                      width: '100%',
                      // maxWidth: "100%",
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
                     Current Funding
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
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
                      }}
                    >
                     Approved Funding
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>
              </Grid>

              <Grid container spacing={1} >
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
                      width: '100%',
                      // maxWidth: "100%",
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
                    Spending
                    </Typography>
                    <TextField fullWidth 
                    id="fullWidth"
                    placeholder="Maximum amount you can charge this client under this service category" />
                  </Box>
                </Item>
              </Grid>
              </Grid>
              
      <Grid container sx={{mt:15, mb:3}}>
      <Grid item xs={12} sx={{display:'flex',flexDirection:'row', justifyContent:'center',textTransform:"capitalize"}}>
      <Button variant="contained" sx={{textTransform:"capitalize"}}>Save</Button>  
      </Grid>
      </Grid>

             </Grid>

            
             {/* border end here */}

            </Grid>
          
          </Grid>

        </Grid>
     
      </Container>
    </>
  );
};

export default Viewnote;