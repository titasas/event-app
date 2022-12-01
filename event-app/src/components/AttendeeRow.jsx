import { FaTimes, FaEdit } from "react-icons/fa";

export function AttendeeRow({ attendee, handleDelete }) {
  return (
    <div className="attendeeRow">
      <p>
        {attendee.name} {attendee.surname}, {attendee.age}.
      </p>
      <div className="rowActions">
        <button className="editBtn">
          <FaEdit />
        </button>
        <button onClick={() => handleDelete(attendee.id)} className="deleteBtn">
          <FaTimes />
        </button>
      </div>
      <p className="emailBox">{attendee.email}</p>
    </div>
  );
}
