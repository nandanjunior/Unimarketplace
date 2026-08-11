import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/styles';
import EventCard from './EventCard';

const Events = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  const [randomEvent, setRandomEvent] = useState(null);

  useEffect(() => {
    if (allEvents && allEvents.length > 0) {
      // Shuffle the events array and pick one
      const shuffledEvents = [...allEvents].sort(() => 0.5 - Math.random());
      setRandomEvent(shuffledEvents[0]);
    }
  }, [allEvents]);

  return (
    <div>
      {!isLoading && (
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1>Popular Events</h1>
          </div>
          <div className="w-full grid">
            {randomEvent ? (
              <EventCard data={randomEvent} />
            ) : (
              <h4>No Events have!</h4>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
