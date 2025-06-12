import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate(); // React Router hook

  const handleSignupClick = () => {
    navigate('/signup'); // Go to /signup route
  };

  return (
    <div className='container p-5 mb-5 page-content'>
      <div className='row text-center'>
        <img src='media/images/homeHero.png' alt='hero-Image' className='mb-5' />
        <h1 className='mt-5'>Invest in everything</h1>
        <p>Online Platform to Invest in stocks, derivatives, mutual funds, and more</p>
        <button
          className='btn btn-primary p-2 fs-5 mb-5'
          style={{ width: '20%', margin: '0 auto' }}
          onClick={handleSignupClick}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;