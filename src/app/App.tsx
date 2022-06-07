import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/palette";
import { Box, useMediaQuery,CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../components/header/Header";
import Image from "../assets/background.png";
import Footer from "../components/footer/Footer";

function App() {
  const Home = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${Image})`,
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "fixed",
  }));
  const Info = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.primary.contrastText}`,
    width: "950px",
    margin: "auto",
    position: "relative",
    fontFamily: ["Open Sans"],
    "@media (min-width: 780px)": {
      width: "80%",
    },
    "@media (max-width: 780px)": {
      width: "80%",
    },
  }));

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
        <Suspense fallback={<CircularProgress />}>
          <BrowserRouter>
            <Info>
              <Header />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              pages <br />
              <Footer />
            </Info>
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
