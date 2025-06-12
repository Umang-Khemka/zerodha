import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const TradeActionWindow = ({ uid, mode, closeWindow }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isLoading, setIsLoading] = useState(false);

  const { refreshHoldings } = useContext(GeneralContext);

  const handleSubmitClick = async () => {
    if (!stockPrice || stockPrice <= 0) {
      alert("Please enter a valid price");
      return;
    }

    if (!stockQuantity || stockQuantity <= 0) {
      alert("Please enter a valid quantity");
      return;
    }

    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("❌ No token found");
        alert("You are not logged in. Please log in again.");
        return;
      }

      await axios.post(
        "http://localhost:3002/newOrder",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: mode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await refreshHoldings();
      closeWindow();
    } catch (error) {
      console.error(`Error placing ${mode} order:`, error);
      alert(`Failed to place ${mode} order. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelClick = () => {
    closeWindow();
  };

  const marginRequired = (stockQuantity * stockPrice).toFixed(2);
  const isBuyMode = mode === "BUY";

  return (
    <div className="position-fixed top-50 start-50 translate-middle" style={{ zIndex: 1050 }}>
      {/* Backdrop */}
      <div 
        className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
        onClick={handleCancelClick}
        style={{ zIndex: -1 }}
      ></div>
      
      {/* Modal Card */}
      <div className="card shadow-lg border-0" style={{ width: "400px", maxWidth: "90vw" }}>
        {/* Header */}
        <div className={`card-header text-white ${isBuyMode ? 'bg-success' : 'bg-danger'}`}>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-bold">
              <i className={`bi ${isBuyMode ? 'bi-arrow-up-circle' : 'bi-arrow-down-circle'} me-2`}></i>
              {mode} {uid}
            </h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={handleCancelClick}
              disabled={isLoading}
            ></button>
          </div>
        </div>

        {/* Body */}
        <div className="card-body p-4">
          <div className="row g-3">
            {/* Quantity Input */}
            <div className="col-6">
              <label htmlFor="qty" className="form-label fw-semibold text-muted">
                <i className="bi bi-hash me-1"></i>Quantity
              </label>
              <input
                type="number"
                className="form-control form-control-lg"
                id="qty"
                name="qty"
                min="1"
                step="1"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
                disabled={isLoading}
                placeholder="Enter qty"
              />
            </div>

            {/* Price Input */}
            <div className="col-6">
              <label htmlFor="price" className="form-label fw-semibold text-muted">
                <i className="bi bi-currency-rupee me-1"></i>Price
              </label>
              <input
                type="number"
                className="form-control form-control-lg"
                id="price"
                name="price"
                min="0.01"
                step="0.05"
                value={stockPrice}
                onChange={(e) => setStockPrice(e.target.value)}
                disabled={isLoading}
                placeholder="Enter price"
              />
            </div>
          </div>

          {/* Margin Required */}
          <div className="mt-4 p-3 bg-light rounded">
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-muted fw-medium">
                <i className="bi bi-calculator me-2"></i>Margin Required
              </span>
              <span className="fw-bold text-primary fs-5">
                ₹{marginRequired}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="card-footer bg-transparent border-0 p-4 pt-0">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg me-md-2"
              onClick={handleCancelClick}
              disabled={isLoading}
            >
              <i className="bi bi-x-circle me-2"></i>Cancel
            </button>
            <button
              type="button"
              className={`btn btn-lg ${isBuyMode ? 'btn-success' : 'btn-danger'}`}
              onClick={handleSubmitClick}
              disabled={isLoading || !stockPrice || !stockQuantity}
            >
              {isLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Processing...
                </>
              ) : (
                <>
                  <i className={`bi ${isBuyMode ? 'bi-cart-plus' : 'bi-cart-dash'} me-2`}></i>
                  {mode}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeActionWindow;