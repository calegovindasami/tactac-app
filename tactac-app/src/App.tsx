import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import NavBar from "./navigation/navbar";
import "./App.css";
import Post from "./components/post/post";
import IPost from "./interfaces/post/IPost";

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

  const post: IPost = {
    userId: 0,
    username: "Cale",
    description: "This is a description.",
    image_url: "",
    avatar_url: "",
    tag: "Tag. . . "

  }

  return (
    <ThemeProvider theme={theme}>
      <NavBar></NavBar>
      <Post {...post}/>
    </ThemeProvider>
  );
}

export default App;

