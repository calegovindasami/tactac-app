import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, paddingBottom: "32px" }}>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            TacTac
          </Typography>
          <Button id="btnLogin" color="inherit" sx={{ fontSize: "16px" }}>
            Login
          </Button>
          <Button id="btnRegister" color="inherit" sx={{ fontSize: "16px" }}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
