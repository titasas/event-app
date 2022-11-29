import { Header } from "./components/Header";
import { AttendeeForm } from "./components/AttendeeForm";
import { AttendeeList } from "./components/AttendeeList";

export function App() {
  const deleteAttendee = (id) => console.log("App", id);

  return (
    <>
      <Header />
      <AttendeeForm />
      <AttendeeList handleDelete={deleteAttendee} />
    </>
  );
}
