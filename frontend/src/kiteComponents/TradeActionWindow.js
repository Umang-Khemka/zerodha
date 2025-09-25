import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import axiosInstance from "../api/axiosInstance";

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
        alert("You are not logged in. Please log in again.");
        return;
      }

      await axiosInstance.post(
        "/orders",
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
      alert(`Failed to place ${mode} order. Please try again.`);
      console.error(`Error placing ${mode} order:`, error);
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
    <>
      {/* Backdrop */}
      <div 
        className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
        style={{ zIndex: 1040 }}
        onClick={handleCancelClick}
      ></div>

      {/* Modal Container */}
      <div className="position-fixed top-50 start-50 translate-middle" style={{ zIndex: 1050 }}>
        <div className="card shadow border-0" style={{ width: "90vw", maxWidth: "450px" }}>
          
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
          <div className="card-body">
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label htmlFor="qty" className="form-label fw-semibold text-muted">
                  <i className="bi bi-hash me-1"></i>Quantity
                </label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="qty"
                  min="1"
                  value={stockQuantity}
                  onChange={(e) => setStockQuantity(e.target.value)}
                  disabled={isLoading}
                  placeholder="Qty"
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="price" className="form-label fw-semibold text-muted">
                  <i className="bi bi-currency-rupee me-1"></i>Price
                </label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="price"
                  min="0.01"
                  step="0.05"
                  value={stockPrice}
                  onChange={(e) => setStockPrice(e.target.value)}
                  disabled={isLoading}
                  placeholder="Price"
                />
              </div>
            </div>

            <div className="mt-4 p-3 bg-light rounded d-flex justify-content-between">
              <span className="text-muted fw-medium">
                <i className="bi bi-calculator me-2"></i>Margin Required
              </span>
              <span className="fw-bold text-primary fs-5">
                ₹{marginRequired}
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="card-footer bg-transparent border-0 d-flex justify-content-end gap-2 p-3">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={handleCancelClick}
              disabled={isLoading}
            >
              <i className="bi bi-x-circle me-2"></i>Cancel
            </button>
            <button
              className={`btn btn-sm ${isBuyMode ? 'btn-success' : 'btn-danger'}`}
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
    </>
  );
};

export default TradeActionWindow;
