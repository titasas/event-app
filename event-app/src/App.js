import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Header } from "./components/Header";
import { AttendeeForm } from "./components/AttendeeForm";
import { AttendeeList } from "./components/AttendeeList";
import { AttendeeData } from "./data/AttendeeData";

export function App() {
  const [attendeeInfo, setAttendeeInfo] = useState(AttendeeData);

  const addAttendee = (newAttendee) => {
    newAttendee.id = uuidv4();
    setAttendeeInfo([newAttendee, ...attendeeInfo]);
  };

  const deleteAttendee = (id) => {
    if (window.confirm("Do you want to delete this attendee?")) {
      setAttendeeInfo(attendeeInfo.filter((attendee) => attendee.id !== id));
    }
  };

  return (
    <>
      <Header />
      <AttendeeForm handleAdd={addAttendee} />
      <AttendeeList handleDelete={deleteAttendee} attendees={attendeeInfo} />
    </>
  );
}
