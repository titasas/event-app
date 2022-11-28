export function AttendeeForm() {
  return (
    <form>
      <fieldset>
        <legend>Create Attendee</legend>
        <div className="formInputs">
          <input type="text" name="fname" placeholder="First name"></input>
          <input type="text" name="lname" placeholder="Last name"></input>
          <input type="text" name="email" placeholder="Email"></input>
          <input type="text" name="age" placeholder="Age"></input>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}
