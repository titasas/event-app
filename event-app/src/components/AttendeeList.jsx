import { AttendeeListHeading } from "./AttendeeListHeading";
import { AttendeeRow } from "./AttendeeRow";
import { useContext } from "react";
import { AttendeeContext } from "../context/AttendeeContext";
import { Loading } from "./extras/Loading";

export function AttendeeList() {
  const { attendees, isLoading } = useContext(AttendeeContext);

  if (!isLoading && (!attendees || attendees.length === 0)) {
    <AttendeeListHeading attendees={`The attendees list is currently empty`} />;
  }

  return isLoading ? (
    <>
      <AttendeeListHeading attendees={`Attendees (${attendees.length})`} />
      <Loading />
    </>
  ) : (
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
  );
}
