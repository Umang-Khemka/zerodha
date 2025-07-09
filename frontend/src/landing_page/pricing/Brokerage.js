import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5">
      <div className="row py-5 border-top text-center text-lg-start">
        {/* Brokerage Calculator Section */}
        <div className="col-12 col-lg-8 p-4">
          <a href="#" className="text-decoration-none">
            <h3 className="fs-5 mb-4">Brokerage calculator</h3>
          </a>
          <ul className="text-muted" style={{ lineHeight: "2", fontSize: "14px" }}>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS): 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS): 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20.
            </li>
          </ul>
        </div>

        {/* List of Charges Section */}
        <div className="col-12 col-lg-4 p-4 d-flex flex-column justify-content-center align-items-center">
          <a href="#" className="text-decoration-none">
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
