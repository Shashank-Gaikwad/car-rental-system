import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Help from '@material-ui/icons/Help';
import AddIcon from '@material-ui/icons/Add';
import Feedback from '@material-ui/icons/Feedback';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';

// const styles = {
const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function CustomerDashboardHome(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div>
    <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Book a car
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Book a car on rent
        </Typography>
        <Typography variant="h5" component="h2">
          {/* 56 */}
          <AddIcon style={{fontSize: '48px'}}/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Go to Car Catelog</Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={12} sm={6}>
    <Card className={classes.card}>
    <CardContent>
      <Typography variant="h5" component="h2">
        My Bookings
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        View details of previously reserved cars 
      </Typography>
      <Typography variant="h5" component="h2">
        {/* 56 */}
        <ShoppingCartIcon style={{fontSize: '48px'}}/>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Go to My Bookings</Button>
    </CardActions>
  </Card>
  </Grid>

  <Grid item xs={12} sm={6}>
    <Card className={classes.card}>
    <CardContent>
      <Typography variant="h5" component="h2">
        Ask Query
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Ask Query to admin
      </Typography>
      <Typography variant="h5" component="h2">
        {/* 56 */}
        <QuestionAnswer style={{fontSize: '48px'}}/>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Go to Query page</Button>
    </CardActions>
  </Card>
  </Grid>

  <Grid item xs={12} sm={6}>
    <Card className={classes.card}>
    <CardContent>
      <Typography variant="h5" component="h2">
        Give Feedback
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Give feedback about our servies
      </Typography>
      <Typography variant="h5" component="h2">
        {/* 56 */}
        <Feedback style={{fontSize: '48px'}}/>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Go to feedback page</Button>
    </CardActions>
  </Card>
  </Grid>

  <Grid item xs={12} sm={6}>
    <Card className={classes.card}>
    <CardContent>
      <Typography variant="h5" component="h2">
        Profile Settings
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Edit Your Details
      </Typography>
      <Typography variant="h5" component="h2">
        {/* 56 */}
        <PeopleIcon style={{fontSize: '48px'}}/>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Go to Profile Settings page</Button>
    </CardActions>
  </Card>
  </Grid>

  <Grid item xs={12} sm={6}>
    <Card className={classes.card}>
    <CardContent>
      <Typography variant="h5" component="h2">
        Help
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        How Our Website Works
      </Typography>
      <Typography variant="h5" component="h2">
        {/* 56 */}
        <Help style={{fontSize: '48px'}}/>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Go to help page</Button>
    </CardActions>
  </Card>
  </Grid>

  </Grid>
  </div>
  );
}

CustomerDashboardHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomerDashboardHome);

