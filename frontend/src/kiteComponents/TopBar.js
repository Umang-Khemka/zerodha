import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="bg-white shadow-sm py-2 px-4 d-flex justify-content-between align-items-center border-bottom">
      {/* Indices Section */}
      <div className="d-flex gap-4 align-items-center">
        <div className="d-flex flex-column text-success">
          <small className="fw-bold text-muted">NIFTY 50</small>
          <span className="fw-semibold">₹100.2</span>
          <small className="text-muted">+0.45%</small>
        </div>
        <div className="d-flex flex-column text-success">
          <small className="fw-bold text-muted">SENSEX</small>
          <span className="fw-semibold">₹100.2</span>
          <small className="text-muted">+0.52%</small>
        </div>
      </div>

      {/* Menu Section */}
      <Menu />
    </div>
  );
};

export default TopBar;
