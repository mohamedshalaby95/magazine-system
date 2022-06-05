import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/palette";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../components/header/Header";
import Image from "../assets/background.png";

function App() {
  const Home = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${Image})`,
    width: "100%",
    height: "678px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "fixed",
  }));
  const Info = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.primary.contrastText}`,
    width: "950px",
    height: "1000px",
    margin: "auto",
    position: "relative",
    fontFamily: ["Open Sans"],
  }));
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home>
          <Suspense fallback={<div>Loaaaaaading.....</div>}>
            <BrowserRouter>
              <Info>
                <Header />
               
                pages
                {/* <Footer/> */}
              </Info>
            </BrowserRouter>
          </Suspense>
        </Home>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
