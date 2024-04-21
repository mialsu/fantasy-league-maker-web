import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2b2d42",
      light: "#717280",
      dark: "#1f202f",
    },
    secondary: {
      main: "#8d99ae",
      light: "#b3bbc9",
      dark: "#646d7c",
    },
    success: {
      main: "#3e8914",
      light: "#7eb062",
      dark: "#2c610e",
    },
    error: {
      main: "#e15554",
      light: "#eb8d8c",
      dark: "#a03c3c",
    },
    background: {
      default: "#f9fbfc",
      paper: "#f9fbfc",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
