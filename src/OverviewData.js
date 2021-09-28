import React from "react";
import mainimage2 from "./images/mainimage2.png";
import TechSpecs from "./TechSpecs";

const OverviewData = () => {
  return (
    <>
      <div className="container-fluid bg-light">
        <h1 className="display-5 text-center text-capitalize pt-lg-5 pb-2">
          Overview
        </h1>
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="row">
              <p className="over-text">
                RYNO is ideaForge’s micro category survey-grade drone designed
                and specialized for mapping applications. It is equipped with an
                advanced mapping payload and ideaForge’s state-of-the-art- PPK
                module to deliver superior results. Due to its high accuracy in
                mapping applications, it is the only micro category drone that
                has been approved by the Survey of India (SOI) towards the
                Swamitva Yojana, which is set to be one of the largest
                drone-powered mapping projects in the world.
              </p>
            </div>
          </div>
        </div>

        <img
          src={mainimage2}
          alt="Drone"
          className="my-5"
          style={{ position: "relative", left: "7%" }}
        />
      </div>
      <TechSpecs />
    </>
  );
};

export default OverviewData;
