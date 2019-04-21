import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { RedirectIfUserIsNotSignedIn } from '../routing/RouteGuard';


const styles = {
  card: {
    minWidth: 275,
    maxWidth: 300,
    marginBottom: '.5rem',
    marginTop: '1rem',
  },
  title: {
    fontSize: 14
  },
};


const EventTypeDetails = (props) => {
  const { eventType, classes } = props;

  if (eventType && eventType.name) {
    return (
      <RedirectIfUserIsNotSignedIn to='/signin'>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {eventType.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography>foo / bar / baz</Typography>
          </CardActions>
        </Card>
      </RedirectIfUserIsNotSignedIn>
    )
  } else {
    return (
      <RedirectIfUserIsNotSignedIn to='/signin'>
        <span>loading...</span>
      </RedirectIfUserIsNotSignedIn>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { eventTypes } = state.firestore.data;
  const eventType = eventTypes ? eventTypes[id] : {};
  return {
    eventType
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'eventTypes' }])
)(EventTypeDetails);