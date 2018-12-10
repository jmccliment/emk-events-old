import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles, createStyles } from '@material-ui/core/styles';
import EventTypeSummary from './EventTypeSummary';
import { firestoreConnect } from 'react-redux-firebase';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddRounded';
import { withRouter } from 'react-router';
import Zoom from '@material-ui/core/Zoom';

const styles = createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
});

const DelayNavTo = (history, link) => (e) => {
  e.preventDefault()
  setTimeout(() => {
    history.push(link)
  }, 250)
}

const EventTypeList = (props) => {
  const { classes, eventTypes, history } = props;
  return (
    <div>
      <div className={classes.container}>
        {eventTypes && eventTypes.map((eventType) => {
          return (
            <EventTypeSummary {...eventType} key={eventType.id} />
          )
        })}
      </div>
      <div>
        <Button variant="extendedFab" color="secondary" onClick={DelayNavTo(history, '/eventTypes/new')}>
          <AddIcon /> Add event type
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  eventTypes: state.firestore.ordered.eventTypes
});


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'eventTypes', orderBy: ['createdAt', 'asc'] }
  ]),
  withStyles(styles)
)(withRouter(EventTypeList));
