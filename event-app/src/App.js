import { Header } from "./components/Header";
import { AttendeeForm } from "./components/AttendeeForm";
import { AttendeeList } from "./components/AttendeeList";
import { AttendeeProvider } from "./context/AttendeeContext";

export function App() {
  return (
    <AttendeeProvider>
      <Header />
      <AttendeeForm />
      <AttendeeList />
    </AttendeeProvider>
  );
}
