import React, { useContext } from "react";

export default function EventsProvider(props) {
  return (
    <EventsContext.Provider value={events}>
      {props.children}
    </EventsContext.Provider>
  );
}
