import React from "react";
import ProductImg from "./ProductImg";
import pImage from "./images/pImage.jpg";
import ProductContent from "./ProductContent";
import ProductSImg from "./ProductSImg";
import mainimage from "./images/mainimage3.png";
const Products = () => {
  return (
    <>
      {/* <ProductImg src={pImage} /> */}
      <ProductSImg
        heading4="Condition Monitor"
        heading1="CMX 300/300EP"
        content="Designed and developed by industry’s top-notch machinery and vibration experts, CMX 300/300EP is an advanced and compact wireless condition monitor meeting functional requirment of API 670 and ISO 10816."
        btn="Data Sheet"
        img={mainimage}
      />
      <ProductContent
        content="Our advanced and cutting-edge devices are designed and built for digital
        transformation of your assets helping you detect anomalies, initiate
        alerts, perform analytics, eliminate unplanned downtime and reduce
        maintainance costs."
        text="Products"
      />
    </>
  );
};

export default Products;
