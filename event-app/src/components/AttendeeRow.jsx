import { FaTimes } from "react-icons/fa";

export function AttendeeRow({ attendee }) {
  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div className="attendeeRow">
      <p>
        {attendee.fname} {attendee.lname}, {attendee.age}.
      </p>
      <div className="rowActions">
        <button onClick={() => handleClick(attendee.id)} className="deleteBtn">
          <FaTimes />
        </button>
      </div>
      <p className="emailBox">{attendee.email}</p>
    </div>
  );
}
