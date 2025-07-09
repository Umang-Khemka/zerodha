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
      <div className="row align-items-center">
        {/* Left Image Section */}
        <div className="col-md-6 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        {/* Right Text Section */}
        <div className="col-md-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          {/* Links */}
          <div className="my-3">
            {tryDemo && (
              <a href={tryDemo} className="text-decoration-none me-4">
                Try demo <i className="fa-solid fa-arrow-right-long ms-1"></i>
              </a>
            )}
            {learnMore && (
              <a href={learnMore} className="text-decoration-none">
                Learn more <i className="fa-solid fa-arrow-right-long ms-1"></i>
              </a>
            )}
          </div>

          {/* App badges */}
          <div className="mt-3">
            {googlePlay && (
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Google Play"
                  className="me-3"
                />
              </a>
            )}
            {appStore && (
              <a href={appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="App Store"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
