import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

function AdminDashboardHome(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div>
    <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Total Customers
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Total customers registered in website
        </Typography>
        <Typography variant="h5" component="h2">
          56
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View All</Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={12} sm={6}>
    <Card className={classes.card}>
    <CardContent>
      <Typography variant="h5" component="h2">
        Total Suppliers
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Total third party suppliers registered in website
      </Typography>
      <Typography variant="h5" component="h2">
        56
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View All</Button>
    </CardActions>
  </Card>
  </Grid>

  <Grid item xs={12} sm={6}>
    <Card className={classes.card}>
    <CardContent>
      <Typography variant="h5" component="h2">
        Total Cars
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Total number of cars
      </Typography>
      <Typography variant="h5" component="h2">
        56
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View All</Button>
    </CardActions>
  </Card>
  </Grid>

  <Grid item xs={12} sm={6}>
    <Card className={classes.card}>
    <CardContent>
      <Typography variant="h5" component="h2">
        Total Third Party Cars
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Total number of third party cars provided by supplier
      </Typography>
      <Typography variant="h5" component="h2">
        56
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View All</Button>
    </CardActions>
  </Card>
  </Grid>

  <Grid item xs={12} sm={6}>
    <Card className={classes.card}>
    <CardContent>
      <Typography variant="h5" component="h2">
        Reserved Cars
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Total number reserved cars at this time
      </Typography>
      <Typography variant="h5" component="h2">
        56
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View All</Button>
    </CardActions>
  </Card>
  </Grid>

  <Grid item xs={12} sm={6}>
    <Card className={classes.card}>
    <CardContent>
      <Typography variant="h5" component="h2">
        Available Cars
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Total number non reserved cars at this time
      </Typography>
      <Typography variant="h5" component="h2">
        56
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View All</Button>
    </CardActions>
  </Card>
  </Grid>

  </Grid>
  </div>
  );
}

AdminDashboardHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminDashboardHome);

