import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <h1 className="mt-5">Open a Zerodha Account</h1>
          <p className="mt-3 fs-5 text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          <button
            className="btn btn-primary mt-4 px-4 py-2 fs-5"
            style={{ minWidth: "200px" }}
            onClick={handleSignupClick}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
