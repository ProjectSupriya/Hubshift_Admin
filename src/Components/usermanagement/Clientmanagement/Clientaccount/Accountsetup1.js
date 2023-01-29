import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography,FormControlLabel,FormGroup, Link } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Homecare from "./Homecare";
import Communityaccess from './Communityaccess';
import Sil from './Sil';
import Respite from "./Respite";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function Accountsetup1() {
 
  const getInitialState = () => {
    const value = "";
    return value;
  };

  const [open, setOpen] = useState(getInitialState);

  const [homecare, setHomecare] = useState(false);
  const [communityaccess, setCommunityaccess] = useState(false);
  const [sil, setSil] = useState(false);
  const [respitevisibility, setRespitevisibility] = useState(false);

  
  useEffect(() => {
    open === "homecare"
      ? setHomecare(true)
      : setHomecare(false);
      open === "community" ? setCommunityaccess(true) : setCommunityaccess(false);
      open === "sil" ? setSil(true) : setSil(false);
      open === "respite" ? setRespitevisibility(true) : setRespitevisibility(false);

  }, [open]);

  const handleOnChange = (e) => {
    setOpen(e.target.value);
  };

 
  return (
    <Container>

      <Paper elevation={0} sx={{ backgroundColor: "#fff", mb: 3, mt: 15, border: 1 }}>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            backgroundColor: "#fff",
            mt: 5,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

          <Grid container spacing={0}>

            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  pt: 2,
                  pb: 2,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 2000,
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Step 1
                  </Typography>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  // pt: 2,
                  // pb:2,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 2000,
                    maxWidth: "100%",
                    display: "flex",
                    flexDirection: 'column',

                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Step 1 / 5
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    personal Details
                  </Typography>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} md={12}>

              <Item
                elevation={0}
                sx={{
                  backgroundColor: "#C6EFB3",
                  m:3,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
            
              <Typography sx={{color:'black',fontWeight:'bold',}}>Looking For :</Typography>
              

                <FormGroup sx={{ml:7}}
                 value={open} onChange={handleOnChange}

                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    control={
                      <Checkbox {...label}  />
                    }
                    label={<><Typography sx={{m:1,color:'black',fontWeight:'bold'}}>Homecare</Typography></>}
                    value="homecare"
                  />
                   <FormControlLabel
                    control={
                      <Checkbox {...label} />
                    }
                    label={<><Typography sx={{m:1,color:'black',fontWeight:'bold'}}>Community Access</Typography></>}
                    value="community"
                  />
                   <FormControlLabel
                    control={
                      <Checkbox {...label} />
                    }
                    label={<><Typography sx={{m:1,color:'black',fontWeight:'bold'}}>SIL/SDA </Typography></>}
                    value="sil"

                  />
                   <FormControlLabel
                    control={
                      <Checkbox {...label} />
                    }
                    label={<><Typography sx={{m:1,color:'black',fontWeight:'bold'}}>Respite/STA </Typography></>}
                    value='respite'
                  />
                
                </FormGroup>
              
              </Item>

            </Grid>

         
            {homecare && <Homecare />}
            {communityaccess && <Communityaccess />}
            {sil && <Sil/>}
            {respitevisibility && <Respite/>}



            <Grid xs={12} md={12}>
                <Box
                  sx={{
                    display: "flex",
                    mt: 10,
                    mb: 3,
                    justifyContent: "flex-end",
                  }}
                >
                <Link href="/clientaccount2" sx={{textDecoration:'none'}}> <Button variant="contained" size="large"
                  sx={{backgroundColor:'#01C1EB !important',height: "3em",fontWeight: "600",}}
                  >
                    Save & Next
                  </Button>
                  </Link> 
                </Box>
              </Grid>
          </Grid>

        </Box>
      </Paper>

    </Container>
  );
}
