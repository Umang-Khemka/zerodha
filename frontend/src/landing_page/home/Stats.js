import React from 'react';

function Stats() {
  return (
    <div className="container my-5">
      <div className="row align-items-center g-4">
        {/* Text Section */}
        <div className="col-12 col-lg-6">
          <div className="p-3 p-lg-5">
            <h2 className="mb-4">Trust With Confidence</h2>

            <div className="mb-4">
              <h4 className="mb-2">Customer-first always</h4>
              <p className="text-muted">
                That’s why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="mb-2">No spam or gimmicks</h4>
              <p className="text-muted">
                No gimmicks, spam, “gamification”, or annoying push notifications. High quality apps that you use at your pace.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="mb-2">The Zerodha universe</h4>
              <p className="text-muted">
                Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer tailored services specific to your needs.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="mb-2">Do better with money</h4>
              <p className="text-muted">
                With initiatives like Nudges and Kill Switch, we don’t just facilitate transactions, but help you do better with your money.
              </p>
            </div>
          </div>
        </div>

        {/* Image and Links Section */}
        <div className="col-12 col-lg-6 text-center">
          <img src="media/images/ecosystem.png" alt="Ecosystem" className="img-fluid mb-4" style={{ maxWidth: '80%' }} />
          <div className="d-flex justify-content-center flex-wrap gap-4">
            <a href="#" className="text-decoration-none">
              Explore our products <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </a>
            <a href="#" className="text-decoration-none">Try Kite demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
