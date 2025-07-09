import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="container py-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-10">
          <img
            src="media/images/homeHero.png"
            alt="Hero Banner"
            className="img-fluid mb-4"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
          <h1 className="mt-4 fw-bold">Invest in everything</h1>
          <p className="lead text-muted">
            Online platform to invest in stocks, derivatives, mutual funds, and more
          </p>
          <button
            className="btn btn-primary px-4 py-2 fs-5 mt-3"
            style={{ minWidth: '200px' }}
            onClick={handleSignupClick}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
