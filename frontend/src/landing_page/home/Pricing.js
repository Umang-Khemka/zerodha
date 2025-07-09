import React from 'react';

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-lg-5 mb-4 mb-lg-0">
          <h2 className="mb-4">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none text-primary">
            See pricing <i className="fa-solid fa-arrow-right-long ms-1"></i>
          </a>
        </div>

        {/* Spacer (optional) */}
        <div className="col-lg-1 d-none d-lg-block"></div>

        {/* Pricing Boxes */}
        <div className="col-lg-6">
          <div className="row text-center g-3">
            <div className="col-12 col-md-6">
              <div className="border rounded p-4 h-100">
                <h1 className="mb-3">&#8377; 0</h1>
                <p className="mb-0">Free equity delivery<br />& direct mutual funds</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="border rounded p-4 h-100">
                <h1 className="mb-3">&#8377; 20</h1>
                <p className="mb-0">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
