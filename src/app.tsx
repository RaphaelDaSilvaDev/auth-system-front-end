import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { Routes } from "./routes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
