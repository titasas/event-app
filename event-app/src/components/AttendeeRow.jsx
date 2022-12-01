import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { AttendeeContext } from "../context/AttendeeContext";

export function AttendeeRow({ attendee }) {
  const { deleteAttendee } = useContext(AttendeeContext);

  return (
    <div className="attendeeRow">
      <p>
        {attendee.name} {attendee.surname}, {attendee.age}.
      </p>
      <div className="rowActions">
        <button className="editBtn">
          <FaEdit />
        </button>
        <button
          onClick={() => deleteAttendee(attendee.id)}
          className="deleteBtn"
        >
          <FaTimes />
        </button>
      </div>
      <p className="emailBox">{attendee.email}</p>
    </div>
  );
}
