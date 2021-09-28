import React from "react";

const Accordion = () => {
  return (
    <>
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


         <div className = "container d-flex justify-content-center align-items-center mt-lg-4">
                <p className = "p-5" className = "material-1">upto <br/> <span style = {{fontSize : "30px"}}>2Km</span> <br/> Operational Range</p> 
                <p className = "p-5" className = "material-2">upto <br/> <span style = {{fontSize : "30px"}}>30Min</span> <br/> Flight Time</p> 
                <p className = "p-5" className = "material-3">upto <br/> <span style = {{fontSize : "30px"}}>6Kg</span> <br/> Take-off Weight</p>
                
            </div>


            <div className = "container d-flex justify-content-center align-items-center mt-lg-4">
                <p className = "p-5" className = "material-1">upto <br/> <span style = {{fontSize : "30px"}}>2Km</span> <br/> Operational Range</p> 
                <p className = "p-5" className = "material-2">upto <br/> <span style = {{fontSize : "30px"}}>30Min</span> <br/> Flight Time</p> 
                <p className = "p-5" className = "material-3">upto <br/> <span style = {{fontSize : "30px"}}>6Kg</span> <br/> Take-off Weight</p>
                
            </div>
<div className="gy">
           <div class="flexbox">
  <div class="leftside">
    <h1>The Tale of the Heike</h1>
    <p>
      The sound of the Gion Shōja bells echoes the impermanence of all things; the color of the sāla flowers reveals the truth that the prosperous must decline. The proud do not endure, they are like a dream on a spring night; the mighty fall at last, they are as dust before the wind.
    </p>

  </div>
  <div class="rightside">
    <h1>The Tale of the Heike</h1>
    <p>
      The sound of the Gion Shōja bells echoes the impermanence of all things; the color of the sāla flowers reveals the truth that the prosperous must decline. The proud do not endure, they are like a dream on a spring night; the mighty fall at last, they are as dust before the wind.
    </p>
 
  </div>
</div></div>

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
