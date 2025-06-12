import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL}></img>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} className="text-decoration-none">
              {tryDemo}
              {tryDemo && <i className="fa-solid fa-arrow-right-long ms-2"></i>}
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px" }}
              className="text-decoration-none"
            >
              {learnMore}
              {learnMore && (
                <i className="fa-solid fa-arrow-right-long ms-2"></i>
              )}
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "20px" }}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;