import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Typography,TextField,Grid,Paper,styled,Stack,
    RadioGroup,Radio} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Status from './status'
import Priority from './priority'
import Type from './type'
import Date from './date' 

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

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen} sx={{textTransform:"capitalize"}}>
        Quick Task
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add  Quick Task</DialogTitle>
        <DialogContent>
         
          <Grid container spacing={2} sx={{mb:10}}>

                <Grid item xs={12} md={12}>

                <Grid container spacing={1}>  
                {/* border start here */}
                <Grid mt={5} container sx={{border:1, borderColor: 'grey.500'}}>
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
                        Select Client:
                        </Typography>
                        <Type/>
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
                       Title
                        </Typography>
                        <TextField fullWidth id="fullWidth" />
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
                        Assigned To
                        </Typography>
                        <TextField fullWidth id="fullWidth" />
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
                        Category
                        </Typography>
                        <TextField fullWidth id="fullWidth" />
                        </Box>
                    </Item>
                    </Grid>
                    <Grid item xs={12} md={12}>
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
                       Due Date
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
                        Status
                        </Typography>
                        <Status/>
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
                        Priority
                        </Typography>
                        <Priority/>
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
                    
                <Typography padding='5px' fontWeight='bold'>Billing Type:</Typography>
                <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                >
                {/* <Typography>Access :</Typography> */}

                <FormControlLabel value="Billable"  control={<Radio />} label="Billable" />
                <FormControlLabel value="Non-Billable"  control={<Radio />} label="Non-Billable" />
               
                </RadioGroup>

                </Item>

                </Grid> 
                        {/* Attach Document */}
                    

                    <Grid item xs={12} md={12}>
                    <Item
                        elevation={0}
                        sx={{
                        display: "flex",
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
                            
                        }}
                        >
                        <Typography
                            sx={{
                            fontSize: "18px",
                            color: "black",
                            fontWeight: "600",
                           
                            }}
                        >
                            Attachments*
                        </Typography>
                        </Box>
                    </Item>
                    </Grid>

                    <Grid item xs={12} md={12}>
                    <Item
                        elevation={5}
                        sx={{
                        display: "flex",
                        m: 1,
                        flexDirection: "column",
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
                            justifyContent:'center',
                            flexDirection: "column",
                            // justifyContent: "space-between",
                            alignItems: "center",
                            // m: 4,
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
                        sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                        alignItems: "center",
                        mt:1,
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
                        <TextField multiline rows={5}  fullWidth id="fullWidth" />
                        
                        </Box>
                    </Item>
                    </Grid>


                <Grid container sx={{mt:15, mb:3}}>
                
                <Grid item xs={12} sx={{display:'flex',flexDirection:'row', justifyContent:'center'}}>
                <Button variant="contained" sx={{display:'flex',flexDirection:'row', justifyContent:'center',textTransform:"capitalize"}}>Save</Button>  
                </Grid>
                
                </Grid>

                </Grid>

                
                {/* border end here */}

                </Grid>

                </Grid>

                </Grid>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}