import { ThemeProvider } from "styled-components";
import { AddNewTask } from "./components/AddNewTask";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Header />
      <AddNewTask />
      <Tasks />
    </ThemeProvider>
  );
}
