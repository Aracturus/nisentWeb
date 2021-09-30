import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import DroneHome from "./DroneHome";
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <DroneHome />
      </BrowserRouter>
    </>
  );
};

export default App;
