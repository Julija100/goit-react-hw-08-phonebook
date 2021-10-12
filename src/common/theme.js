import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#c2a28c",
      contrastText: "2e2c2b",
    },
    secondary: {
      main: "#e76f51",
      accent: "#f4a261",
    },
    background: {
      default: "#f7e9e1",
      paper: "#2a9d8f",
      light: "#fffffe",
    },
    text: {
      primary: "#264653",
      secondary: "#fffffe",
    },
  },
  typography: {
    fontFamily: "Oswald",
  },
});

export { theme };
