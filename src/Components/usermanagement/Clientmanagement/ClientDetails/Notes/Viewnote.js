import React from "react";
import {Container,Typography,Box,TextField,Grid,Paper,styled,Stack,Button,
  RadioGroup,FormControlLabel,Radio} from "@mui/material";
import PrimarySearchAppBar from "../../../../Sidebar/appbar";
import Type from './type';



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
 

  return (
    <>
      <PrimarySearchAppBar />
      <Container >
        <Grid container spacing={2} >
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>

          <Grid item xs={12} md={10}>

            <Grid container spacing={1}>

              <Grid item xs={7} md={7}>
                <Typography  fontSize="22px" fontWeight='bold'
                 
                 
                >
                  View Notes
                </Typography>
              </Grid>  

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
                
            <Typography fontSize='16px' fontWeight='bold' padding='5px'>Access :</Typography>
          <RadioGroup
         row
         aria-labelledby="demo-row-radio-buttons-group-label"
         name="row-radio-buttons-group"
       >
     
        <FormControlLabel value="anyone"  control={<Radio />} label="Anyone" />
        <FormControlLabel value="private"  control={<Radio />} label="Private" />
        <FormControlLabel value="Team"  control={<Radio />} label="Team" />
          </RadioGroup>
        
            </Item>

            </Grid> 
           
              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                
                >
                  <Box
                  
                  >
                    <Typography fontSize='16px' fontWeight='bold'
                     
                    >
                     Type*
                    </Typography>
                    <Type/>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                 
                >
                  <Box
                   
                  >
                    <Typography fontSize='16px' fontWeight='bold'
                    
                    >
                     Subject*
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                 
                >
                  <Box
                  
                  >
                 
                    <Typography fontSize='16px' fontWeight='bold'
                  
                     
                    >
                     Notes*
                    </Typography>
                    <TextField multiline rows={5}  fullWidth id="fullWidth" />
                  
                  </Box>
                </Item>
              </Grid>

                   {/* Attach Document */}
                 

              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                 
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
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "black",
                        fontWeight: "600",
                        ml: -2,
                      }}
                    >
                      Attachments*
                    </Typography>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={3}
                
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      width: 1000,
                      maxWidth: "100%",
                      display: "flex",
                      justifyContent:'center',
                      flexDirection: "column",
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

                  <Typography mt={3}>
                      Drag and Drop Attachment
                    </Typography>
                  </Box>
                </Item>
              </Grid>
              {/* Attach Document end Here */}

              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                 
                >
                  <Box
                    
                  >
                    <Typography fontSize='16px' fontWeight='bold'
                     
                    >
                     Created By*
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                 
                >
                  <Box
                    sx={{
                    
                    }}
                  >
                    <Typography fontSize='16px' fontWeight='bold'
                    
                    >
                     Created On*
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

      <Grid container sx={{mt:15, mb:3}}>
      <Grid item xs={5} >
      </Grid>
      <Grid item xs={2} >
      <Button variant="contained" sx={{display:'flex',flexDirection:'row', justifyContent:'center',textTransform:"capitalize"}}>Save</Button>  
      </Grid>
      <Grid item xs={5} >
      </Grid>
      </Grid>

             </Grid>

            

            </Grid>
          
          </Grid>

        </Grid>
     
      </Container>
    </>
  );
};

export default Viewnote;