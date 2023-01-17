import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { Routes } from "./routes";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CookiesProvider>
        <Routes />
      </CookiesProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
