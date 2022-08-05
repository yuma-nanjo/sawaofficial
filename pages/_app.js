import "../styles/globals.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#aeea00",
        light: "#e4ff54",
        dark: "#79b700",
      },
      secondary:{
        main: "#6a1b9a",
        light: "#9c4dcc",
        dark: "#38006b",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
