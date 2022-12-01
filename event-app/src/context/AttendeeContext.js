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

  const addAttendee = (newAttendee) => {
    newAttendee.id = uuidv4();
    setAttendees([newAttendee, ...attendees]);
  };

  const deleteAttendee = (id) => {
    if (window.confirm("Do you want to delete this attendee?")) {
      setAttendees(attendees.filter((attendee) => attendee.id !== id));
    }
  };

  return (
    <AttendeeContext.Provider
      value={{ attendees, deleteAttendee, addAttendee }}
    >
      {children}
    </AttendeeContext.Provider>
  );
};
