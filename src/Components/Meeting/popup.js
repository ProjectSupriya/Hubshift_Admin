import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import Date from "./date"
import { TextareaAutosize, Box } from '@mui/material';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const Notesty = {
    width: "100%",
    color: "#000000",
    outline: "#0c7dee",
  }

  const Buttonsty = {
    marginTop: "50px",
    marginBottom: "30px",
    textTransform: 'capitalize', 
    backgroundColor: '#01C1EB'
  }

  return (
    <div>

      <EditIcon onClick={handleClickOpen} >

      </EditIcon>

      <BootstrapDialog maxWidth='md'
        fullWidth
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', m: 3 }}>


          <Typography fontSize='20px' fontWeight='bold'> Cancelation Reason Notes </Typography>

        </Grid>

        <DialogContent >

          <Box

          >
            <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 1 }}>Note:</Typography>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={12}
              label="Note"
              placeholder='Note'
              style={Notesty} />

          </Box>


            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { width: '100%' },
              }}
              noValidate
              autoComplete="off"
            >
              <Box mt={8}>
                <Typography fontSize='16px' fontWeight='bold' > Postpone Meeting </Typography>
                <Typography fontSize='16px' fontWeight='bold'> Choose Perferred Date & Time  </Typography>

                <Date />
              </Box>
            </Box>



        </DialogContent>


        <DialogActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

          <Button autoFocus onClick={handleClose}
            type="submit"
            variant="contained"

            style={Buttonsty}
          >

            Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

