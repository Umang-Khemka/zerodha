import React from 'react';
import { useNavigate } from 'react-router-dom';

const partnerPlatforms = [
  {
    img: 'media/images/smallcaseLogo.png',
    alt: 'Smallcase',
    description: 'Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.',
  },
  {
    img: 'media/images/goldenpiLogo.png',
    alt: 'GoldenPi',
    description: 'Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.',
  },
  {
    img: 'media/images/dittoLogo.png',
    alt: 'Ditto Insurance',
    description: 'Personalized advice on life and health insurance. No spam and no mis-selling.',
  },
  {
    img: 'media/images/smallcaseLogo.png',
    alt: 'Smallcase Duplicate',
    description: 'Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.',
  },
  {
    img: 'media/images/sensibullLogo.svg',
    alt: 'Sensibull',
    description: 'Options trading platform that lets you create strategies, analyze positions, and examine data points.',
  },
  {
    img: 'media/images/streakLogo.png',
    alt: 'Streak',
    description: 'Systematic trading platform that allows you to create and backtest strategies without coding.',
  },
];

function Universe() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="container">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="mt-3 mb-5">
          Extend your trading and investment experiences even further with our partner platforms
        </p>

        {partnerPlatforms.map((platform, index) => (
          <div className="col-md-4 col-sm-6 p-3" key={index}>
            <img src={platform.img} alt={platform.alt} style={{ width: '40%' }} />
            <p className="text-muted mt-3 fs-6">{platform.description}</p>
          </div>
        ))}

        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary p-2 fs-5 mb-5 mt-4"
            style={{ width: '200px' }}
            onClick={handleSignupClick}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
