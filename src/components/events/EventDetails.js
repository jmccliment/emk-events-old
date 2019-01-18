import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { RedirectIfUserIsNotSignedIn } from '../routing/RouteGuard';

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
  const { classes, event } = props;
  
  if(event && event.title) {
    return (
      <RedirectIfUserIsNotSignedIn  to='/signin'>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {event.title}
            </Typography>
            <Typography component="p">{event.content}</Typography>
          </CardContent>
          <CardActions>
            <Typography component="div">{event.authorFirstName} {event.authorLastName}</Typography>
            <Typography component="div">{event && event.createdAt && event.createdAt.toString && event.createdAt.toString()}</Typography>
          </CardActions>
        </Card>
      </RedirectIfUserIsNotSignedIn>
    );
  } else {
    return (
      <RedirectIfUserIsNotSignedIn  to='/signin'>
        <span>loading...</span>
      </RedirectIfUserIsNotSignedIn>
    );
  }
}

EventDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => { 
  const { id } = ownProps.match.params;
  const { events } = state.firestore.data;
  const event = events ? events[id] : {};
  return {
    event 
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'events' }])
)(EventDetails);