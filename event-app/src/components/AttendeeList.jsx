import { AttendeeListHeading } from "./AttendeeListHeading";
import { AttendeeRow } from "./AttendeeRow";

export function AttendeeList({ handleDelete, attendees }) {
  return attendees.length ? (
    <>
      <AttendeeListHeading attendees={`Attendees (${attendees.length})`} />
      <div className="listOfAttendees">
        {attendees.map((attendee) => (
          <AttendeeRow
            className="listOfAttendees"
            attendee={attendee}
            key={attendee.id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  ) : (
    <AttendeeListHeading attendees={`The attendees list is currently empty`} />
  );
}
