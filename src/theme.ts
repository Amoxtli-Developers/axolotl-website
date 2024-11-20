// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-transformasans-regular)",
    h1: {
      fontFamily: "var(--font-transformasans-bold)",
      fontSize: "64px"
    },
    h2: {
      fontFamily: "var(--font-transformasans-bold)",
      fontSize: "40px"
    },
    h3: {
      fontFamily: "var(--font-transformasans-bold)",
      fontSize: "24px"
    },
    h4: {
      fontFamily: "var(--font-transformasans-bold)",
      fontSize: "20px"
    },
    h5: {
      fontFamily: "var(--font-transformamix-regular)",
    },
    h6: {
      fontFamily: "var(--font-transformamix-semibold)",
    },
    body1: {
      fontFamily: "var(--font-transformasans-regular)",
    },
    body2: {
      fontFamily: "var(--font-transformasans-regular)",
      fontSize: "12px"
    },
    button: {
      fontFamily: "var(--font-transformasans-bold)",
      textTransform: "none",
    },
    caption: {
      fontFamily: "var(--font-transformasans-regular)",
    },
    overline: {
      fontFamily: "var(--font-transformasans-regular)",
    },
  },
});

export default theme;
