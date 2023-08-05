import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import NavBar from "./navigation/navbar";
import "./App.css";
import IPost from "./interfaces/post/IPost";
import { createApi } from "unsplash-js";
import Post from "./components/post/post";
import Feed from "./components/feed/feed";
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
      <Feed></Feed>
    </ThemeProvider>
  );
}

export default App;
