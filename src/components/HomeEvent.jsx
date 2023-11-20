import React from 'react';
import { Events } from '../pages/Events';


const HomeEvents = () => {
  // Get the first 8 events
  const limitedEvents = data.slice(0, 8);

  return (
    <Events />
  );
}

export default HomeEvents;