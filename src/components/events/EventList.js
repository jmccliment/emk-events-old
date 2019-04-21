import React from 'react';
import EventSummary from './EventSummary';
import { Link } from 'react-router-dom';

const EventList = ({ events }) => {
  return (
    <div>
      { events && events.map((event) => <Link to={`/events/${event.id}`} key={event.id}><EventSummary event={event} /></Link>)}
    </div>
  );
}

export default EventList;