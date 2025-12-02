import Pomodoro from "../../pages/Pomodoro";
import { ThemeProvider } from "../ThemeProvider";

export default function PomodoroExample() {
  return (
    <ThemeProvider>
      <Pomodoro />
    </ThemeProvider>
  );
}
