import { AttendeeListHeading } from "./AttendeeListHeading";
import { AttendeeRow } from "./AttendeeRow";

export function AttendeeList({ handleDelete, attendees }) {
  return attendees.length ? (
    <>
      <AttendeeListHeading attendees={`Attendees (${attendees.length})`} />
      <div className="listOfAttendees">
        {attendees.map((attendee, index) => (
          <AttendeeRow
            className="listOfAttendees"
            attendee={attendee}
            key={index}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  ) : (
    <AttendeeListHeading attendees={`The attendees list is currently empty`} />
  );
}
