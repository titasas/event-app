import { AttendeeListHeading } from "./AttendeeListHeading";
import { AttendeeRow } from "./AttendeeRow";

export function AttendeeList() {
  const attendees = [
    {
      id: 1,
      fname: "Titas",
      lname: "Petrauskas",
      email: "titas.petrauskas@gmail.com",
      age: "25",
    },
    {
      id: 2,
      fname: "Vardas",
      lname: "Pavardas",
      email: "var.pavar@gmail.com",
      age: "29",
    },
    {
      id: 3,
      fname: "Vardenis",
      lname: "Pavardenis",
      email: "salalala@gmail.com",
      age: "18",
    },
  ];

  return attendees.length ? (
    <>
      <AttendeeListHeading attendees={`Attendees (${attendees.length})`} />
      <AttendeeRow attendees={attendees} />
    </>
  ) : (
    <AttendeeListHeading attendees={`The attendees list is currently empty`} />
  );
}
