import React from "react";
import OverviewData from "./OverviewData"

const Overview = () => {
  return (
    <>
      <div className="container-fluid"  style = {{background : "#dfe4ea"}}  >
        <nav className = "navbar-nav navbar-expand-lg">
          <ul className = "navbar navbar-nav w-75 mx-auto py-3 nav-text-white">
            <li>Overview</li>
            <li>Tech Specs</li>
            <li>Features</li>
            <li>Outputs</li>
            <li>Payloads</li>
            <li>GCS</li>
            <li>Applications</li>
            <li>FAQs</li>
            <li>Downloads</li>
          </ul>
        </nav>
      </div>

      <OverviewData/>
    </>
  );
};

export default Overview;
