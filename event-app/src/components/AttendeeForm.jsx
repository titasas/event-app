import { useState } from "react";
import { Button } from "./Button";

export function AttendeeForm(props) {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <form>
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
          <input type="text" name="lname" placeholder="Last name"></input>
          <input type="email" name="email" placeholder="Email"></input>
          <input type="text" name="age" placeholder="Age"></input>
          <Button type="submit">Submit</Button>
        </div>
      </fieldset>
    </form>
  );
}
