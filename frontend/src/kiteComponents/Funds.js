import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="container mt-4">
      {/* Header Section */}
      <div className="text-center mb-4">
        <p className="fs-5">Instant, zero-cost fund transfers with UPI</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link className="btn btn-success">Add funds</Link>
          <Link className="btn btn-primary">Withdraw</Link>
        </div>
      </div>

      {/* Main Row */}
      <div className="row g-4">
        {/* Equity Column */}
        <div className="col-lg-8 col-md-7 col-sm-12">
          <div className="border rounded p-3 h-100">
            <h5 className="mb-3">Equity</h5>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <p>Available margin</p>
                <p className="fw-bold text-success">4,043.10</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Used margin</p>
                <p className="fw-bold">3,757.30</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Available cash</p>
                <p className="fw-bold">4,043.10</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Opening Balance</p>
                <p>4,043.10</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Opening Balance</p>
                <p>3736.40</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Payin</p>
                <p>4064.00</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>SPAN</p>
                <p>0.00</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Delivery margin</p>
                <p>0.00</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Exposure</p>
                <p>0.00</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Options premium</p>
                <p>0.00</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Collateral (Liquid funds)</p>
                <p>0.00</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Collateral (Equity)</p>
                <p>0.00</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Total Collateral</p>
                <p>0.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Commodity Column */}
        <div className="col-lg-4 col-md-5 col-sm-12">
          <div className="border rounded p-3 h-100 d-flex flex-column justify-content-between">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-primary mt-3 align-self-start">Open Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
