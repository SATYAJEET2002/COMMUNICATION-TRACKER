import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalenderView.css";

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || []
  ); // Load events from localStorage

  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      const newEventObj = {
        id: events.length + 1,
        title: newEvent.title,
        start: new Date(newEvent.start),
        end: new Date(newEvent.end),
      };

      // Save the new event to localStorage
      const updatedEvents = [...events, newEventObj];
      setEvents(updatedEvents);
      localStorage.setItem("events", JSON.stringify(updatedEvents)); // Update localStorage

      setNewEvent({ title: "", start: "", end: "" });
    } else {
      alert("Please fill in all fields before adding an event.");
    }
  };

  return (
    <div className="calendar-view-container">
      <h2 className="calendar-header">Calendar View</h2>

      <div className="event-form">
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) =>
            setNewEvent({ ...newEvent, title: e.target.value })
          }
        />
        <input
          type="datetime-local"
          placeholder="Start Date"
          value={newEvent.start}
          onChange={(e) =>
            setNewEvent({ ...newEvent, start: e.target.value })
          }
        />
        <input
          type="datetime-local"
          placeholder="End Date"
          value={newEvent.end}
          onChange={(e) =>
            setNewEvent({ ...newEvent, end: e.target.value })
          }
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        style={{ height: 500, margin: "20px auto", width: "90%" }}
        onSelectEvent={(event) => alert(`Event: ${event.title}`)}
      />
    </div>
  );
};

export default CalendarView;
