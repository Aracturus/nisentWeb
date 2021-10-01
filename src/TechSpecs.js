import React from "react";

const TechSpecs = () => {
  return (
    <>
      <div className="container-fluid ">
        <h1
          className="display-5 text-center text-capitalize pt-lg-0 pb-2"
          style={{
            font: "20px",
            color: "whitesmoke",
            marginTop: "100px",
            fontWeight: "bold",
            color: "#ff0000",
          }}
        >
          Applications
        </h1>
        <div className="row">
          <div className="col-md-9 mx-auto">
            <div className="row">
              <p
                className="over-text"
                style={{
                  font: "24px",
                  color: "whitesmoke",
                  fontFamily: "Georgia, 'Times New Roman', Times, serif",
                }}
              >
                Trendius® CMX is best suitable condition monitoring of a wide
                range of process and utility rotating equipment including -
                <table
                  className="col-md-6 mx-auto"
                  style={{ marginTop: "20px", marginBottom: "80px" }}
                >
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td style={{ color: "black" }}>Agitator</td>
                      <td style={{ color: "black" }}>Compressor</td>
                    </tr>

                    <tr>
                      {" "}
                      <td>Diesel Engine</td>
                      <td>Extruder</td>
                    </tr>

                    <tr>
                      {" "}
                      <td style={{ color: "black" }}>Gearbox</td>
                      <td style={{ color: "black" }}>Hydraulic coupling</td>
                    </tr>

                    <tr>
                      <td> Mill</td>
                      <td>Motor</td>
                    </tr>
                    <tr>
                      <td style={{ color: "black" }}>Roller</td>
                      <td style={{ color: "black" }}>Turboexpander</td>
                    </tr>

                    <tr>
                      <td> Blower</td>
                      <td>Chiller</td>
                    </tr>

                    <tr>
                      <td style={{ color: "black" }}>Expander</td>
                      <td style={{ color: "black" }}>Fan</td>
                    </tr>

                    <tr>
                      <td> Generator</td>
                      <td>Hydraulic press</td>
                    </tr>

                    <tr>
                      <td style={{ color: "black" }}>Mixer</td>
                      <td style={{ color: "black" }}>Pump</td>
                    </tr>

                    <tr>
                      <td>Steam turbine</td>
                      <td>Wind turbine</td>
                    </tr>
                  </tbody>
                </table>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechSpecs;
