import React from "react";
import Accordion from "./Accordion";

const TechSpecs = () => {
  return (
    <>
      <div className="container-fluid bg-light">
        <h1 className="display-5 text-center text-capitalize pt-lg-0 pb-2">
          Tech Specs
        </h1>
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="row">
              <p className="over-text">
                India is a vast and diverse country. Frigid mountainous regions,
                hot deserts, humid plains and wetlands with torrential rains,
                the country has regions that represent every weather pattern and
                terrain conditions. Proudly Made in India, RYNO UAV has been
                built to withstand these demanding conditions and deliver
                stellar performance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Accordion />
    </>
  );
};

export default TechSpecs;
