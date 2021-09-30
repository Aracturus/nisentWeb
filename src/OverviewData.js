import React from "react";
import mainimage2 from "./images/mainimage2.png";

const OverviewData = () => {
  return (
    <>
      <div className="container-fluid bg-light">
        <h1 className="display-5 text-center text-capitalize pt-lg-5 pb-2">
          Overview
        </h1>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="row">
              <p className="over-text">
                Trendius® CMX is an advanced wireless condition monitor designed
                for high performance with precision in harsh indusrtial
                environment. It detects equipment anomalies and incipient
                failures preventing unplanned downtime, reducing maintenance
                costs and improving productivity.
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
    </>
  );
};

export default OverviewData;
