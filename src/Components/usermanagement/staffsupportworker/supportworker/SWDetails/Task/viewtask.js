import React from "react";
import {
  useTheme,
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  Paper,
  styled,
 
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import PrimarySearchAppBar from '../../../.././../Sidebar/appbar';
import avatarImg from '../../../.././../assets/profileimage.png'
import avatarImg2 from '../../../.././../assets/profileimage3.png'

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

        <Grid container spacing={2} sx={{ mb: 10 }}>
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>


          <Grid item xs={10} md={10}>

            <Grid container spacing={1}>

              <Grid item xs={12} md={12}>
                <Typography fontSize='30px' fontWeight='bold'> View Task </Typography>
              </Grid>


              <Grid item xs={12} md={12} mt={2}>
                <Typography fontSize='20px' fontWeight='bold'> Routine Name: Exercise</Typography>
              </Grid>

              <Grid item xs={12} md={12} mt={4}>
                <Typography> <span style={{ fontWeight: 'bold' }}> Title:</span> Jumping Jacks X15</Typography>
              </Grid>

              <Grid item xs={12} md={12} mt={4}>
                <Typography> <span style={{ fontWeight: 'bold' }}> Category:</span> Homecare</Typography>
              </Grid>

              <Grid item xs={12} md={12} mt={4}>
                <Box
                  sx={{
                    width: 1000,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // m: 2,
                  }} >
            <Typography> <span style={{ fontWeight: 'bold' }}> DueDate:</span> 8-Sep-2022</Typography>
            <Typography> <span style={{ fontWeight: 'bold' }}> Repeat every day:</span> 
            Repeat every day On Location - Sydney 
            </Typography>

                 
                </Box>
              </Grid>

              <Grid item xs={12} md={12} mt={2}>
                <Typography> <span style={{ fontWeight: 'bold' }}> Attachments: </span> Notes-document-1.pdf</Typography>
              </Grid>

              <Grid item md={12} xs={12} mt={3}>
                <Typography fontWeight='bold'>Notes:</Typography>

                <Box sx={{ backgroundColor: '#E3E3E3', width: 1000, height: '52px' }}>

                  <Typography padding='12px'>Take 30 seconds break after performing 5 jumping jacks.</Typography>
                </Box>

                <Box
                  sx={{
                    width: 1000,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    m: 2,
                  }} >

                  <Typography>9-sep-2022, 12:44 pm </Typography>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={avatarImg}
                      sx={{ width: 24, height: 24 }}
                    />
                    <span>Francis Dsouza</span>
                  </div>
                </Box>

                <Box sx={{ backgroundColor: '#E3E3E3', width: 1000, height: '52px' }}>

                  <Typography padding='12px'>Perform 15 Jumping jacks.</Typography>
                </Box>

                <Box
                  sx={{
                    width: 1000,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    m: 2,
                  }} >

                  <Typography>9-sep-2022, 12:44 pm </Typography>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={avatarImg2}
                      sx={{ width: 24, height: 24 }}
                    />
                    <span>Francis Dsouza</span>
                  </div>
                </Box>

               



              </Grid>

              <Grid item xs={12} md={12} mt={3}>
                <Typography> <span style={{ fontWeight: 'bold' }}> Status:</span> Completed</Typography>
              </Grid>

              



            </Grid>

          </Grid>

        </Grid>

      </Container>
    </>
  );
};

export default Viewnote;