import React from "react";
import mainimage3 from "./images/mainimage3.png";

import drone01 from "./images/drone01.gif";
const Main = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
         
            <img className="drone-image "  src={mainimage3} alt="Drone Picture" />
          </div>
        </div>
      </div>

      <div className="container-fluid main mt-lg-3">
        <div className="d-flex justify-content-center align-items-center">
           <h1 className = "text-center text-capitalize text-white main-txt display-4">Trendius® CMX</h1>
          <img className="drone-img" src={drone01} alt="drone picture" />
        </div>
        <h4 className="text-center text-capitalize main-paragraph ">
          Always within Earshot
        </h4>
      </div>
    </>
  );
};

export default Main;
