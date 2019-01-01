import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';

const styles = {
  card: {
    minWidth: 275,
    marginBottom: '.5rem',
    marginTop: '1rem',
  },
  title: {
    fontSize: 14
  },
};

const EventDetails = (props) => {
  const { classes, match } = props;
  const { id } = match.params;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Event Title = {id}
        </Typography>
        <Typography component="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, cum dolore ipsam soluta ab quia quod dignissimos iusto asperiores illo qui numquam dolor impedit corrupti unde accusamus eveniet voluptate cumque.</Typography>
      </CardContent>
      <CardActions>
        <Typography component="div">Posted by Foo Barrington</Typography>
        <Typography component="div">2nd September, 2am</Typography>
      </CardActions>
    </Card>
  )
}

EventDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withStyles(styles)(EventDetails);