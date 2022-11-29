import { FaTimes } from "react-icons/fa";

export function AttendeeRow({ attendees }) {
  return (
    <div className="listOfAttendees">
      {attendees.map((attendee, index) => (
        <div key={index} className="attendeeRow">
          <p>
            {attendee.fname} {attendee.lname}, {attendee.age}.
          </p>
          <div className="rowActions">
            <button
              onClick={() => console.log(attendee.id)}
              className="deleteBtn"
            >
              <FaTimes />
            </button>
          </div>
          <p className="emailBox">{attendee.email}</p>
        </div>
      ))}
    </div>
  );
}
