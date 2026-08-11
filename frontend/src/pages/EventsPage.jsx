import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  const [shuffledEvents, setShuffledEvents] = useState([]);

  useEffect(() => {
    if (allEvents && allEvents.length > 0) {
      // Shuffle the events array
      const shuffled = [...allEvents].sort(() => 0.5 - Math.random());
      setShuffledEvents(shuffled);
    }
  }, [allEvents]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <div>
            {shuffledEvents && shuffledEvents.length > 0 ? (
              shuffledEvents.map((event) => (
                <EventCard key={event._id} active={true} data={event} />
              ))
            ) : (
              <p>No events available</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EventsPage;
