import "../styles/globals.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { background } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
      divider: "#ffffff",
      background: {
        default: "#000",
        paper: "#000",
      },
      text: {
        primary: "#fff",
        secondary: "#fff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
      <footer>
        <p class="text-gray-200 text-center text-xs">&copy; SAWA. All Rights Reserved. </p>
      </footer>
    </ThemeProvider>
  );
}

export default MyApp;
