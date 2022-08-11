import "../styles/globals.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main:"#000000"
      },
      divider: "#ffffff",
      background: {
        default: "#000000",
        paper: "#000000",
      },
      text: {
        primary: "#fff",
        secondary: "#000000",
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
