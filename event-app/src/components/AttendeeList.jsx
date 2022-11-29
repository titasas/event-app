import { FaTimes } from "react-icons/fa";
import { AttendeeListHeading } from "./AttendeeListHeading";

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
      <div className="listOfAttendees">
        {attendees.map((attendee, index) => (
          <div key={index} className="attendeeRow">
            <p>
              {attendee.fname} {attendee.lname}, {attendee.age}.
            </p>
            <div className="rowActions">
              <button className="deleteBtn">
                <FaTimes />
              </button>
            </div>
            <p className="emailBox">{attendee.email}</p>
          </div>
        ))}
      </div>
    </>
  ) : (
    <AttendeeListHeading attendees={`The attendees list is currently empty`} />
  );
}
