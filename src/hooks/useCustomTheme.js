import { createTheme } from "@mui/material";

const useCustomTheme = () => {
  // theme
  const theme = createTheme(
    {
      palette: {
        mode: "dark",
        primary: {
          main: "#0b1126",
        },
        secondary: {
          main: "#141a30",
        },
        tertiary: {
          main: "#DC41AE",
        },
        background: {
          default: "#03091f",
          paper: "#03091f",
          primary: "#0b1126",
          secondary: "#141a30",
        },
        text: {
          primary: "#ffffff",
          secondary: "#DC41AE",
          tertiary: "#00E0C4",
          muted: "#B0B0B0",
        },
        common: {
          black: "#111111",
          white: "#ffffff",
        },
      },
      typography: {
        fontFamily: "'Poppins', sans-serif",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
      },
    },
    []
  );

  return { theme };
};

export default useCustomTheme;
