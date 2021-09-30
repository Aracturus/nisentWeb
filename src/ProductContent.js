import React from "react";

const ProductContent = (props) => {
  return (
    <div className="container-fluid bg-light h-100 pt-lg-5 pb-lg-5">
      <h1
        className="text-center text-capitalize text-danger pt-lg-5 display-5"
        style={{ fontWeight: "400" }}
      >
        {props.text}
      </h1>
      <hr
        width="70%"
        style={{ height: "1px", borderRadius: "90%" }}
        className="pb-3 mx-auto"
      />

      <p className="text-center text-capitalize container pt-lg-2 pe-lg-5 pb-lg-5 ps-lg-5 pContent">
        {props.content}
      </p>
    </div>
  );
};

export default ProductContent;
