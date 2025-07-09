import React from 'react';

function Education() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Market education"
            className="img-fluid"
            style={{ maxWidth: "70%" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="mb-3">Free and open market education</h2>

          <p>
            <strong>Varsity</strong>, the largest online stock market education book in the world,
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none text-primary d-inline-block mb-4">
            Varsity <i className="fa-solid fa-arrow-right-long ms-1"></i>
          </a>

          <p className="mt-4">
            <strong>TradingQ&A</strong>, the most active trading and investment community in India
            for all your market-related queries.
          </p>
          <a href="#" className="text-decoration-none text-primary d-inline-block">
            TradingQ&A <i className="fa-solid fa-arrow-right-long ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
