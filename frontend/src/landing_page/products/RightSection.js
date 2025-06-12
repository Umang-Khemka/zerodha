import React from "react";

function RightSection({productName,productDescription,link,imageURL}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={link} className="text-decoration-none">
              {link}
              {link && <i className="fa-solid fa-arrow-right-long ms-2"></i>}
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;