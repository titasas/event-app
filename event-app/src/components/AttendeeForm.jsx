import { useState, useContext, useEffect } from "react";
import { Button } from "./Button";
import { AttendeeContext } from "../context/AttendeeContext";

export function AttendeeForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const { addAttendee, attendeeEdit, updateAttendee } =
    useContext(AttendeeContext);

  useEffect(() => {
    if (attendeeEdit.edit === true) {
      setName(attendeeEdit.attendee.name);
      setSurname(attendeeEdit.attendee.surname);
      setEmail(attendeeEdit.attendee.email);
      setAge(attendeeEdit.attendee.age);
    }
  }, [attendeeEdit]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newAttendee = {
      name,
      surname,
      email,
      age,
    };
    if (name === "" || surname === "" || email === "" || age === "") {
      setMessage("All attendee info fields must be filled in");
      return;
    }
    if (attendeeEdit.edit === true) {
      updateAttendee(attendeeEdit.attendee.id, newAttendee);
    } else {
      addAttendee(newAttendee);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset>
        <legend>Create Attendee</legend>
        <div className="formInputs">
          <input
            onChange={handleNameChange}
            value={name}
            type="text"
            name="fname"
            placeholder="First name"
          ></input>
          <input
            onChange={handleSurnameChange}
            value={surname}
            type="text"
            name="lname"
            placeholder="Last name"
          ></input>
          <input
            onChange={handleEmailChange}
            value={email}
            type="email"
            name="email"
            placeholder="Email"
          ></input>
          <input
            onChange={handleAgeChange}
            value={age}
            type="text"
            name="age"
            placeholder="Age"
          ></input>
          <Button type="submit">Submit</Button>
        </div>
      </fieldset>
      {message && <div className="message">{message}</div>}
    </form>
  );
}
