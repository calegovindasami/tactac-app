import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import NavBar from "./navigation/navbar";
import "./App.css";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: blue[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <NavBar></NavBar>
    </ThemeProvider>
  );
}

export default App;
