import React from "react";
import {
  useTheme,
  Container,
  Typography,
  Grid,
  Button,
  
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import PrimarySearchAppBar from "../Sidebar/appbar";




const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#01C1EB !important",
    width: "150px",
    height: "50px",
  },

 
})); 

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "left",
//   color: theme.palette.text.dark,
// }));



const Adddocument = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <PrimarySearchAppBar />

      <Container>

        <Grid container spacing={2} sx={{}}>
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>

          <Grid item xs={12} md={10}>

            <Grid container>

              <Grid item xs={12} md={12} >
                <Typography fontSize="20px" fontWeight="bold"  >
                  
                Content Management
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12} mt={3} >
                <Typography fontSize="16px" fontWeight="bold"  >
                  
                [document_date]
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12} mt={3}>
                <Typography fontSize="16px" fontWeight="bold"  >
                  
                [full name]
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12} mt={3} >
                <Typography fontSize="16px" fontWeight="bold"  >
                  
                [address line 1]
                </Typography>
              </Grid>

              <Grid item xs={12} md={12} mt={3} >
                <Typography fontSize="16px" fontWeight="bold"  >
                  
                [city] [state] [postcode]
                </Typography>
              </Grid>

              <Grid item xs={12} md={12} mt={3} >
                <Typography fontSize="16px" fontWeight="bold"  >
                  
                Dear [first name],
                </Typography>
              </Grid>

              <Grid item xs={12} md={12} mt={3} >
                <Typography fontSize="16px">
                  
                Abandonment of Employment - Final Warning
                </Typography>

                <Typography mt={3} fontSize="16px">
                We are writing to you in relation to your employment with [org name] and refer to our letter of Date 1 ​​regarding the potential abandonment of your employment. In that letter we raised our concerns regarding your failure to attend work and your ongoing lack of communication. Further, we noted that you had not attended work sinceOR failed to attend your rostered shifts on  ​​and had not contacted us to explain your absence. You were advised that you needed to inform us by of close of business on Date 2 of the reason for your absence and your future intentions. We clearly advised you in that letter that in the event you failed to contact us, we may consider you have abandoned your employment, and therefore, that your employment has terminated. We are providing you with a final opportunity to confirm whether you intend to return to work and to explain your absence. You are directed to make contact with us by telephone on add contact number or add email address. Please note, we require your response by close of business on Date 3. If you do not contact us, we may conclude that you have abandoned your employment and your employment will be terminated.
                </Typography>
              </Grid>

              <Grid item md={12} mt={3} >
                <Typography fontSize="16px" fontWeight="bold"  >
                  
                [sender full name]
                </Typography>
              </Grid>

              <Grid item md={12} mt={3} >
                <Typography fontSize="16px" fontWeight="bold"  >
                  
                [sender job title]
                </Typography>
              </Grid>

        
              <Grid container>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{
                    mt: 10,
                    mb: 6,
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Button variant="contained" className={classes.btn}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {/* </Grid> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Adddocument;
