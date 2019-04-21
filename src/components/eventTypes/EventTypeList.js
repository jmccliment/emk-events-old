import React from 'react';
import { Link } from 'react-router-dom';
import EventTypeSummary from './EventTypeSummary';

const EventTypeList = ({ eventTypes }) => {
  return (
    <div>
      <h2>Event Types</h2>
      { eventTypes && eventTypes.map((eventType) => <Link to={`/eventTypes/${eventType.id}`} key={eventType.id}>
        <EventTypeSummary eventType={eventType} />
      </Link>)}
    </div>
  );
}

export default EventTypeList;