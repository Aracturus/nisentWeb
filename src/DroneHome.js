import React from "react";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import Main from "./Main";
import Mainfooter from "./Mainfooter";
import Overview from "./Overview";
import OverviewData from "./OverviewData";
import TechSpecs from "./TechSpecs";
import Specification from "./Specification";
import Accordion from "./Accordion";
import Products from "./Products";

const DroneHome = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact />
        <Route path="/Products" exact component={Products} />
        <Route path="/Engineering" />
        <Route path="/Plant_Services" />
        <Route path="/Perspectives" />
        <Route path="/Company" />
      </Switch>
      <Main />
      <Mainfooter />
      <Overview />
      <OverviewData />
      <TechSpecs />
      <Specification />
      <Accordion />
    </>
  );
};

export default DroneHome;
