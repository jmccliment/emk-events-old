import React from 'react';

const EventTypeDetails = (props) => {
  const { eventType } = props;

  if(eventType && eventType.name) {
    return (
      <RedirectIfUserIsNotSignedIn to='/signin'>
      </RedirectIfUserIsNotSignedIn>
    )
  }
}