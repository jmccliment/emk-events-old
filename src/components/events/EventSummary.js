import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';

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

const EventSummary = (props) => {
  const { classes, event } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          { event.title }
        </Typography>
        <Typography component="p">{event.date}</Typography>
        <Typography component="p">Posted by Foo Barrington II</Typography>
        <Typography component="p" color="textSecondary">3rd September, 2am</Typography>
      </CardContent>
    </Card>
  );
}

EventSummary.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired
};



export default withStyles(styles)(EventSummary);
