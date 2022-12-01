import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

export const AttendeeContext = createContext();

export const AttendeeProvider = ({ children }) => {
  const [attendees, setAttendees] = useState([
    {
      id: 1,
      name: "Titas",
      surname: "Petrauskas",
      email: "titas.petrauskas@gmail.com",
      age: "25",
    },
    {
      id: 2,
      name: "Vardas",
      surname: "Pavardas",
      email: "var.pavar@gmail.com",
      age: "29",
    },
    {
      id: 3,
      name: "Vardenis",
      surname: "Pavardenis",
      email: "salalala@gmail.com",
      age: "18",
    },
  ]);

  const [attendeeEdit, setAttendeeEdit] = useState({
    item: {},
    edit: false,
  });

  // Add new attendee
  const addAttendee = (newAttendee) => {
    newAttendee.id = uuidv4();
    setAttendees([newAttendee, ...attendees]);
  };

  // Delete attendee
  const deleteAttendee = (id) => {
    if (window.confirm("Do you want to delete this attendee?")) {
      setAttendees(attendees.filter((attendee) => attendee.id !== id));
    }
  };

  // Update attendee
  const updateAttendee = (id, updAttendee) => {
    setAttendees(
      attendees.map((attendee) =>
        attendee.id === id ? { ...attendee, ...updAttendee } : attendee
      )
    );
  };

  // Set the attendee to be updated
  const editAttendee = (attendee) => {
    setAttendeeEdit({
      attendee,
      edit: true,
    });
  };

  return (
    <AttendeeContext.Provider
      value={{
        attendees,
        attendeeEdit,
        deleteAttendee,
        addAttendee,
        editAttendee,
        updateAttendee,
      }}
    >
      {children}
    </AttendeeContext.Provider>
  );
};
