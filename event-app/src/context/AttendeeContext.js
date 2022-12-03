import { createContext, useState, useEffect } from "react";

export const AttendeeContext = createContext();

export const AttendeeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [attendees, setAttendees] = useState([]);

  const [attendeeEdit, setAttendeeEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchAttendees();
  }, []);

  // Fetch attendees
  const fetchAttendees = async () => {
    const response = await fetch("/attendees?_sort=id&_order=desc");
    const data = await response.json();

    setAttendees(data);
    setIsLoading(false);
  };

  // Add new attendee
  const addAttendee = async (newAttendee) => {
    const response = await fetch("/attendees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAttendee),
    });
    const data = await response.json();

    setAttendees([data, ...attendees]);
  };

  // Delete attendee
  const deleteAttendee = async (id) => {
    if (window.confirm("Do you want to delete this attendee?")) {
      await fetch(`/attendees/${id}`, { method: "DELETE" });

      setAttendees(attendees.filter((attendee) => attendee.id !== id));
    }
  };

  // Update attendee
  const updateAttendee = async (id, updAttendee) => {
    const response = await fetch(`/attendees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updAttendee),
    });

    const data = await response.json();

    setAttendees(
      attendees.map((attendee) =>
        attendee.id === id ? { ...attendee, ...data } : attendee
      )
    );
  };

  // Set the attendee to be updated
  const editAttendee = (attendee) => {
    setAttendeeEdit({
      attendee,
      edit: true,
    });
  };

  return (
    <AttendeeContext.Provider
      value={{
        attendees,
        attendeeEdit,
        isLoading,
        deleteAttendee,
        addAttendee,
        editAttendee,
        updateAttendee,
      }}
    >
      {children}
    </AttendeeContext.Provider>
  );
};
