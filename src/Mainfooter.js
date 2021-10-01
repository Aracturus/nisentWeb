import React from "react";
import feature1 from "./images/feature1.png";
import feature3 from "./images/feature3.png";
import feature4 from "./images/feature4.png";
import feature5 from "./images/feature5.png";
import feature6 from "./images/feature6.png";
const Mainfooter = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-10 mx-auto">
          <div className="row d-flex flex-wrap mx-auto">
            <div className="feature-card gy-lg-3">
              <img
                src={feature1}
                alt="picture"
                style={{ width: "100%", position: "relative", bottom: "35px" }}
              />
              <div>Plug-and-play wireless condition monitoring solution</div>
            </div>

            <div className="feature-card gy-lg-3">
              <img
                src={feature3}
                alt="picture"
                style={{ width: "100%", position: "relative", bottom: "35px" }}
              />
              <div>
                Real-time data analytics, anomalies detection and alerts.
              </div>
            </div>

            <div className="feature-card gy-lg-3">
              <img
                src={feature4}
                alt="picture"
                style={{ width: "100%", position: "relative", bottom: "35px" }}
              />
              <div style={{ border: "none" }}>
                Actionable insights for health and predictive maintenance.
              </div>
            </div>

            <div className="feature-card gy-lg-3">
              <img
                src={feature5}
                alt="picture"
                style={{ width: "100%", position: "relative", bottom: "35px" }}
              />
              <div>Reduces significantly downtime and maintenance cost</div>
            </div>

            <div className="feature-card gy-lg-3">
              <img
                src={feature6}
                alt="picture"
                style={{ width: "100%", position: "relative", bottom: "35px" }}
              />
              <div>
                Extends predictive maintenance to non-critical equipment.
              </div>
            </div>

            <div className="feature-card gy-lg-3">
              <img
                src={feature1}
                alt="picture"
                style={{ width: "100%", position: "relative", bottom: "35px" }}
              />
              <div style={{ border: "none" }}>
                • 126-bit AES encryption-based data transmission security.
              </div>
            </div>

            <div className="py-lg-2 feature-card gy-lg-3">
              <img
                src={feature4}
                alt="picture"
                style={{ width: "100%", position: "relative", bottom: "35px" }}
              />
              <div>
                Quick and sclable deployment without plant modification.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainfooter;
