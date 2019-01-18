import React from 'react';

const EventTypeSummary = (props) => {
  const { eventType } = props;

  return (
    <div>
      <h3>{eventType.name}</h3>
      <img src={eventType.imageUrl} alt={eventType.name} />
    </div>
  );
};

export default EventTypeSummary;