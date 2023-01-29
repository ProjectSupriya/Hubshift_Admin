import React from "react";
import {Container,Typography,Box,Grid,Button,} from "@mui/material";
import { TextareaAutosize } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';



const RiskAssessment = () => {



  const [pet, setpet] = React.useState('');
  const handleChange = (event) => {
    setpet(event.target.value);
  };
  const [weapons, setweapons] = React.useState('');
  const handleChange1 = (event) => {
    setweapons(event.target.value);
  };
  const [health, sethealth] = React.useState('');
  const handleChange2 = (event) => {
    sethealth(event.target.value);
  };
  const [behaviour, setbehaviour] = React.useState('');
  const handleChange3 = (event) => {
    setbehaviour(event.target.value);
  };
  const [family, setfamily] = React.useState('');
  const handleChange4 = (event) => {
    setfamily(event.target.value);
  };
  const [coronavirus, setcoronavirus] = React.useState('');
  const handleChange5 = (event) => {
    setcoronavirus(event.target.value);
  };
  const [vaccinated, setvaccinated] = React.useState('');
  const handleChange6 = (event) => {
    setvaccinated(event.target.value);
  };
  const [safety, setsafety] = React.useState('');
  const handleChange7 = (event) => {
    setsafety(event.target.value);
  };
  const [medical, setmedical] = React.useState('');
  const handleChange8 = (event) => {
    setmedical(event.target.value);
  };

  // styling

  const Buttongrid = {
    display:'flex',
    flexDirection:'row', 
    justifyContent:'center',
  } 

  const Buttonsty = {
    backgroundColor:'#01C1EB ',
    textTransform:"capitalize"
  } 


  return (
    <>
      <Container >

        <Grid container spacing={2}>

          <Grid item xs={12} md={12}>
            
            <Grid container spacing={4}>


              <Grid item xs={12} md={6} mt={5}>
                <Typography fontWeight='bold'
                  
                >
                 1. Are there any pets in house?*
                </Typography>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={pet}
                        onChange={handleChange}
                        >
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
              </Grid>

              <Grid item xs={12} md={6} mt={5}>
              <Typography fontWeight='bold'

                 
                >
                 2. Are there any weapons in the house?*
                </Typography>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={weapons}
                        onChange={handleChange1}
                        >
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
              </Grid>

              {/* note */}
              <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      width: 1500,
                      maxWidth: "100%",
                    }}
                  >
                    <Typography fontWeight='bold'

                     
                    >
                      Note:
                    </Typography>
                    <TextareaAutosize
              aria-label="minimum height"
              minRows={4}
             label="Note"
             placeholder='Note'
              style={{
                width: "100%",
                borderRadius: "5px",
                fontFamily: "Arial",
                color: "#000000",
                outline: "#0c7dee",
              }}
            />
                  </Box>
              </Grid>
              
            </Grid>
            <Grid container spacing={4}>


              <Grid item xs={12} md={6} mt={5}>
              <Typography fontWeight='bold'

                 
                >
                 3. Mental health issues or illness:*
                </Typography>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={health}
                        onChange={handleChange2}
                        >
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                        </Select>
                        <FormHelperText>(will have emerged during discussion of disabilities)</FormHelperText>
                    </FormControl>
                </Box>
              </Grid>

              <Grid item xs={12} md={6} mt={5}>
              <Typography fontWeight='bold'

                  
                >
                 4. History of dangerous behaviour:*
                </Typography>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={behaviour}
                        onChange={handleChange3}
                        >
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                        </Select>
                        <FormHelperText>(will have emerged during discussion of disabilities)</FormHelperText>
                    </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} mt={5}>
              <Typography fontWeight='bold'

                 
                >
                 5. Other family members in the home - might they present risk?*
                </Typography>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={family}
                        onChange={handleChange4}
                        >
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                        </Select>
                        <FormHelperText>(should emerged during discussion of living conditions)</FormHelperText>
                    </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} mt={5}>
              <Typography fontWeight='bold'

                 
                >
                 6. Potentially exposed to coronavirus (covid_19):*
                
                </Typography>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={coronavirus}
                        onChange={handleChange5}
                        >
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                        </Select>
                        <FormHelperText>or have any symptoms, such as fever, cough, sore throat or shortness of breath? - 
                        if they report either symptoms or potential esposure, after the client a phone/email/text contact only.</FormHelperText>
                    </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} mt={5}>
              <Typography fontWeight='bold'

                  
                >
                 7. Can you please confirm that you have been fully vaccinated?*
                </Typography>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={vaccinated}
                        onChange={handleChange6}
                        >
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                        </Select>
                        <FormHelperText>If not - we can only offer phone/email/text contact to ensure the safety of you and our staff</FormHelperText>
                    </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} mt={5}>
              <Typography fontWeight='bold'

                 
                >
                 8. Please indicate if this person may need a safety Assessment & Management Plan (SAMP):*
                </Typography>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={safety}
                        onChange={handleChange7}
                        >
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                        </Select>
                        <FormHelperText>**please insert SAMP info into RISK ASSESSMENT TAB IN CRM</FormHelperText>
                    </FormControl>
                </Box>
              </Grid>
              {/* note */}
              <Grid item xs={12} md={6}>
                  <Box >
                   
                      <Typography fontWeight='bold'

                     
                    >
                      Note:
                    </Typography>
                    <TextareaAutosize
              aria-label="minimum height"
              minRows={4}
             label="Note"
             placeholder='Note'
              style={{
                width: "100%",
                outline: "#0c7dee",
              }}
            />
                  </Box>
              </Grid>
              
            </Grid>

            <Grid item xs={12} md={6} mt={5}>
            <Typography fontWeight='bold'

                 
                >
                 9. Medical Issues?:*
                </Typography>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={medical}
                        onChange={handleChange8}
                        >
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                        </Select>
                        
                    </FormControl>
                </Box>
              </Grid>

            
              <Grid container sx={{mt:15, mb:3}}>

      

      <Grid item style={Buttongrid} md={12}>
      <Button style={Buttonsty}  variant="contained"  > Update</Button>  
      </Grid>

     
      </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RiskAssessment;
