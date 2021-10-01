import React from "react";
import feature1 from "./images/feature1.png";
import feature3 from "./images/feature3.png";
import feature4 from "./images/feature4.png";
import feature5 from "./images/feature5.png";
import feature6 from "./images/feature6.png";

const Accordion = () => {
  return (
    <>
      <div className="container-fluid bg-light pt-lg-3 pb-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="row">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Vibration measurement
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <table class="table table-dark">
                        <tbody>
                          <tr>
                            <th scope="row">Axis of measurement </th>
                            <td>
                              User selectable uniaxial and triaxial (X, Y and Z)
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Frequency range</th>
                            <td>10 – 6500 Hz</td>
                          </tr>
                          <tr>
                            <th scope="row">Amplitude range</th>
                            <td>selectable ±2/±4/±8/±16 g</td>
                          </tr>
                          <tr>
                            <th scope="row">Accuracy</th>
                            <td>±5% full scale, uniaxial </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Temperature measurement
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <table class="table table-dark">
                        <tbody>
                          <tr>
                            <th scope="row">Measurement range </th>
                            <td>-40 to +105 0C</td>
                          </tr>
                          <tr>
                            <th scope="row">Resolution</th>
                            <td>16 bit </td>
                          </tr>
                          <tr>
                            <th scope="row">Accuracy</th>
                            <td>±2%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/*third collapse item */}

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Wireless protocol
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <table class="table table-dark">
                        <tbody>
                          <tr>
                            <th scope="row">Network / protocol </th>
                            <td>Bluetooth® 5.0 Low Energy / IEEE 802.15.1</td>
                          </tr>
                          <tr>
                            <th scope="row">Radio frequency band</th>
                            <td>2.4 GHz, open ISM band </td>
                          </tr>
                          <tr>
                            <th scope="row">Broadcast range</th>
                            <td>Upto 0.6 km (line of sight</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* fourth collapse item */}

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button
                        class="accordion-button collapsed bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Power
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <table class="table table-dark">
                        <tbody>
                          <tr>
                            <th scope="row">Battery type </th>
                            <td>
                              Non- rechargeable lithium polymer / ER26500{" "}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Rated voltage </th>
                            <td>3.6 V DC</td>
                          </tr>
                          <tr>
                            <th scope="row">Estimated battery life</th>
                            <td>6-year for default configuration</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* fifth collapse item */}

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                      <button
                        class="accordion-button collapsed bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Environmental
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <table class="table table-dark">
                        <tbody>
                          <tr>
                            <th scope="row">Operating temperature</th>
                            <td>-40 to +85 0C</td>
                          </tr>
                          <tr>
                            <th scope="row">Operating humidity </th>
                            <td>95%, non-condensing</td>
                          </tr>
                          <tr>
                            <th scope="row">Ingress protection</th>
                            <td>IP68, water and air-tight</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* sixth collapse item */}

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                      <button
                        class="accordion-button collapsed bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Physical
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <table class="table table-dark">
                        <tbody>
                          <tr>
                            <th scope="row">Material (base / enclosure) </th>
                            <td>
                              Stainless steel AISI 316 / Thermoplastic (PBT)
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Dimension</th>
                            <td>Diameter 34 mm / height 65 mm</td>
                          </tr>
                          <tr>
                            <th scope="row">Weight</th>
                            <td>260 gm</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* seventh collapse item */}

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSeven">
                      <button
                        class="accordion-button collapsed bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        Certifications
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <table class="table table-dark">
                        <tbody>
                          <tr>
                            <th scope="row">CE</th>
                            <td>LVD 2014/35/EU (pending)</td>
                          </tr>
                          <tr>
                            <th scope="row">Hazardous area</th>
                            <td>ATEX Directive (94/9/EC) (pending)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cards data */}

      <div className="container-fluid my-lg-5">
        <div className="col-md-10 mx-auto">
          <div className="row d-flex flex-wrap mx-auto">
            <div className="feature-card gy-lg-3">
              <img
                src={feature1}
                alt="picture"
                style={{ width: "100%", position: "relative", bottom: "35px" }}
              />
              <div>Industrial grade triaxial accelerometer</div>
            </div>

            <div className="feature-card gy-lg-3">
              <img
                src={feature3}
                alt="picture"
                style={{ width: "100%", position: "relative", bottom: "35px" }}
              />
              <div>Ultrahigh frequency measurement range upto 6.5kHz</div>
            </div>

            <div className="feature-card gy-lg-3">
              <img
                src={feature4}
                alt="picture"
                style={{ width: "100%", position: "relative", bottom: "35px" }}
              />
              <div style={{ border: "none" }}>
                Ultarwide temperature range from -40 ° C to +105 °C.
              </div>
            </div>

            <div className="feature-card gy-lg-3">
              <img
                src={feature5}
                alt="picture"
                style={{ width: "100%", position: "relative", bottom: "35px" }}
              />
              <div>
                Selectable wide vibration scale of ±2, ±4, ±8 and ±16 g.
              </div>
            </div>

            <div className="feature-card gy-lg-3">
              <img
                src={feature6}
                alt="picture"
                style={{ width: "100%", position: "relative", bottom: "35px" }}
              />
              <div>Microcontroller for edge computing and FFT analytics</div>
            </div>

            <div className="feature-card gy-lg-3">
              <img
                src={feature1}
                alt="picture"
                style={{ width: "100%", position: "relative", bottom: "35px" }}
              />
              <div style={{ border: "none" }}>
                Rugged stainless steel enclosure for harsh environment
              </div>
            </div>

            <div className="py-lg-2 feature-card gy-lg-3">
              <img
                src={feature4}
                alt="picture"
                style={{ width: "100%", position: "relative", bottom: "35px" }}
              />
              <div>
                Battery and expernal power options for wide applications
              </div>
            </div>
            <div className="feature-card gy-lg-3">
              <img
                src={feature1}
                alt="picture"
                style={{ width: "100%", position: "relative", bottom: "35px" }}
              />
              <div>
                10 year design life and +3 year maintenance-free service
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gy">
        <div class="flexbox">
          <div class="leftside">
            <h1>The Tale of the Heike</h1>
            <p>
              The sound of the Gion Shōja bells echoes the impermanence of all
              things; the color of the sāla flowers reveals the truth that the
              prosperous must decline. The proud do not endure, they are like a
              dream on a spring night; the mighty fall at last, they are as dust
              before the wind.
            </p>
          </div>
          <div class="rightside">
            <h1>The Tale of the Heike</h1>
            <p>
              The sound of the Gion Shōja bells echoes the impermanence of all
              things; the color of the sāla flowers reveals the truth that the
              prosperous must decline. The proud do not endure, they are like a
              dream on a spring night; the mighty fall at last, they are as dust
              before the wind.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light pt-lg-4">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="row">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Vehicles
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <table class="table table-dark">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Features
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <strong>
                          This is the second item's accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
