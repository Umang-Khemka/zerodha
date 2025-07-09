import React from "react";

function RightSection({ productName, productDescription, link, imageURL }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Text Content on the Left */}
        <div className="col-md-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          {link && (
            <a href={link} className="text-decoration-none">
              Learn more <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>
          )}
        </div>

        {/* Image on the Right */}
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
