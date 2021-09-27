import React from "react";
import mainimage1 from "./images/mainimage1.png";
import Mainfooter from "./Mainfooter";
import drone01 from "./images/drone01.gif";
const Main = () => {
  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <img className="drone-image" src={mainimage1} alt="Drone Picture" />
          </div>
        </div>
      </div>

      <div className="container-fluid main">
        <div className = "d-flex justify-content-center align-items-center">
        <h1 className="text-center text-captialize main-heading display-1">
          MEGAPHONE DRONE
        </h1>
        <img className = "drone-img" src = {drone01} alt = "drone picture"/>
        </div>
        <h4 className="text-center text-capitalize main-paragraph ">
          Always within Earshot
        </h4>
      </div>
      <Mainfooter />
    </>
  );
};

export default Main;
