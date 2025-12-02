import MockTest from "../../pages/MockTest";
import { ThemeProvider } from "../ThemeProvider";

export default function MockTestExample() {
  return (
    <ThemeProvider>
      <MockTest />
    </ThemeProvider>
  );
}
