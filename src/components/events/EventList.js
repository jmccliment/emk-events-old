import React from 'react';
import EventSummary from './EventSummary';

const EventList = ({ events }) => {
  return (
    <div className="event-list section">
      { events && events.map((event) => <EventSummary key={event.id} event={event} />)}
    </div>
  );
}

export default EventList;