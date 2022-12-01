import { AttendeeListHeading } from "./AttendeeListHeading";
import { AttendeeRow } from "./AttendeeRow";
import { useContext } from "react";
import { AttendeeContext } from "../context/AttendeeContext";

export function AttendeeList() {
  const { attendees } = useContext(AttendeeContext);

  return attendees.length ? (
    <>
      <AttendeeListHeading attendees={`Attendees (${attendees.length})`} />
      <div className="listOfAttendees">
        {attendees.map((attendee) => (
          <AttendeeRow
            className="listOfAttendees"
            attendee={attendee}
            key={attendee.id}
          />
        ))}
      </div>
    </>
  ) : (
    <AttendeeListHeading attendees={`The attendees list is currently empty`} />
  );
}
