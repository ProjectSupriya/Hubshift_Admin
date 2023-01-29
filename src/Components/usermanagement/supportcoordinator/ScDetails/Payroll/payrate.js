import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import PayrateTable from './PayrateTable';
import PayrateTable2 from './PayrateTabel2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1, width: 950 }}>
      <Grid container spacing={2}>

        <Grid item xs={12} md={12}>
          <Typography style={{ fontSize: '25px', fontWeight: 600 }}>Pay Rate</Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <PayrateTable />
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography>Jobtype: casual</Typography>
        </Grid>

        <Grid mb={4} item xs={12} md={12}>
          <Typography>Level: 5</Typography>
        </Grid>

        <PayrateTable2 />

      </Grid>
    </Box>
  );
}
