import * as React from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Checkbox,
  FormHelperText,
  DialogTitle,
  Divider,
} from "@mui/material";
import Draggable from "react-draggable";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import { Link } from "react-router-dom";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function ChangePassword() {

  const [open, setOpen] = React.useState(false);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
    let navigate = useNavigate();  
  function Pre() {
    navigate("/furthsetup");
    console.log("navigate", navigate);
  }
  function Next() {
    navigate("/fifthsetup");
    console.log("navigate", navigate);
  }

  return (
    <Container>

      <Paper elevation={0} sx={{ backgroundColor: "#fff",}}>

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
                       
          <Typography fontSize="25px" fontWeight="bold" > Change Password </Typography>
         
       </Grid>

            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  mt:3,
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
                    Old Password
                  </Typography>
                  <TextField 
                  fullWidth 
                  type='password'

                  id="fullWidth"
                   />
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
                    }}
                  >
                    New Password
                  </Typography>
                  <TextField 
                  fullWidth 
                  type='password'
                  id="fullWidth"
                   />
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
                    }}
                  >
                    Comform Password
                  </Typography>
                  <TextField 
                  fullWidth 
                  type='password'
                  id="fullWidth"
                   />
                </Box>
              </Item>
            </Grid>

            <Grid mt={2} item xs={12} md={12}>
                <Button variant="contained"> Save changes</Button>
            </Grid>


           
            </Grid>

         

          


      
        </Box>

        <Divider sx={{ mt: 10,mb:6, bgcolor: 'black' }} variant="middle" />

    <Box>
                <Typography fontWeight='bold'> Self-service </Typography>

                <Typography mt={1}>Turn on self-service to allow employees to view their pay slips,
                  manage their personal details and apply for leave.
                </Typography>

                <Typography fontWeight='bold'>Turn on self-service for this employee?</Typography>

                <FormControl>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Yes" />
                    <FormControlLabel value="male" control={<Radio />} label="No" />
                   
                  </RadioGroup>

                </FormControl>

    </Box>

      </Paper>

      

    </Container>
  );
}
