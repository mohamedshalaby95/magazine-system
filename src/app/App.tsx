import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/palette";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Suspense fallback={<div>Loaaaaaading.....</div>}>
            <BrowserRouter>sjfjbcdejbv</BrowserRouter>
          </Suspense>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
