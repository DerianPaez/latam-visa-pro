import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#3C3B6E",
    },
    secondary: {
      main: "#7B809A",
    },
    accent: {
      main: "#CC1931",
      contrastText: "#FFFFFF",
    },
    white: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;
