import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { blue } from "@mui/material/colors";
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
      <Button variant="contained">Login</Button>
    </ThemeProvider>
  );
}

export default App;
