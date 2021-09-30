import React from "react";

let ProductImg = {
  background: "#000",
  border: "2px solid red",
};

let ProductSImg = (props) => {
  return (
    <>
      <div className="container-fluid my-lg-5 py-lg-5" style={{ ProductImg }}>
        <div className="row d-flex justify-content-center align-items-end">
          <div className="col-md-6 mx-auto ps-lg-5 py-lg-5">
            <div className="row">
              <h4 className="ProductHeading4 ps-lg-5">{props.heading4}</h4>
              <h1 className="ps-lg-5 text-white display-4 ProductHeading1">
                {props.heading1}
              </h1>
              <p className="ProductPara px-lg-5 pt-lg-3 py-lg-5">{props.content}</p>
              <button
                className="btn btn-outline-danger ms-5 mt-lg-4"
                style={{ width: "15%" }}    
              >
                {props.btn}
              </button>
            </div>
          </div>
          <div className="col-md-6 mx-auto">
            <div className="row">
              <img src={props.img} alt="side Image" className = "mb-lg-5"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSImg;
