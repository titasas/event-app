import { useState } from "react";
import { Header } from "./components/Header";
import { AttendeeForm } from "./components/AttendeeForm";
import { AttendeeList } from "./components/AttendeeList";
import { AttendeeData } from "./data/AttendeeData";

export function App() {
  const [attendeeInfo, setAttendeeInfo] = useState(AttendeeData);

  const deleteAttendee = (id) => {
    if (window.confirm("Do you want to delete this attendee?")) {
      setAttendeeInfo(attendeeInfo.filter((attendee) => attendee.id !== id));
    }
  };

  return (
    <>
      <Header />
      <AttendeeForm />
      <AttendeeList handleDelete={deleteAttendee} attendees={attendeeInfo} />
    </>
  );
}
