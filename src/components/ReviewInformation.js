import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PersonalInformation from './PersonalInformation';
import ContactInformation from './ContactInformation';

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});

function ReviewInformation(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review Your Information
      </Typography>
      
      <Grid container spacing={16}>
          <PersonalInformation />
          <ContactInformation />
      </Grid>
    </React.Fragment>
  );
}

ReviewInformation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReviewInformation);