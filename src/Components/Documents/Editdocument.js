import React from "react";
import {
  useTheme,
  Container,
  Typography,
  Box,
  TextField,
  Grid,
  Paper,
  styled,
  Stack,
  Button,
  
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import PrimarySearchAppBar from "../Sidebar/appbar";
import Accesslevel from "./Accesslevel"
import Folder from "./Folder"
import DocumentDdown from "./DocumentDdown"




const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#01C1EB !important",
    width: "150px",
    height: "50px",
  },

  fileupload: {
    backgroundColor: "#fff",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  fileupload1: {
    backgroundColor: "#E0DCDC !important",
    width: "150px",
    color: "#000000 !important",
  },

  fileupload2: {
    backgroundColor: "#01C1EB !important",
    width: "150px",
  },
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

const Editdocument = () => {
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

          <Grid item xs={10} md={10}>

            <Grid container>
              <Grid item xs={7} md={7} mt={0}>
                <Typography fontSize="20px" fontWeight="bold"  >
                  
                Edit Document
                </Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                    Document Name*
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                  sx={{ 
                   
                  }}
                >
                  <Box className={classes.fileupload}
                    sx={{
                     
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
                        <Button className={classes.fileupload1}
                        
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

                    <Button className={classes.fileupload2}
                     
                      variant="contained"
                      component="span"
                    >
                      Upload
                    </Button>
                  </Box>
                </Item>
              </Grid>


              <Grid xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                    Access Level*
                    </Typography>
                    <Accesslevel />
                  </Box>
                </Item>
              </Grid>

              <Grid xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                    Folder*
                    </Typography>
                    <Folder />
                  </Box>
                </Item>
              </Grid>

        
              <Grid xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                    Document Type
                    </Typography>
                    <DocumentDdown />
                  </Box>
                </Item>
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

export default Editdocument;
