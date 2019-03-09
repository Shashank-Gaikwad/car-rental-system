import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function ContactInformation() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <TextField required id="mobileNumber1" label="Mobile Number" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="mobileNumber2" label="Alternate Mobile Number" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="email" label="Email" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="licenseNumber"
            label="License Number"
            // helperText="Last three digits on signature strip"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            type="file"
            id="licenseFile"
            label="Upload License"
            helperText="max file size is 256KB"
            fullWidth
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}

export default ContactInformation;