import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../api/axiosInstance.js"

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("No authentication token found");
          setLoading(false);
          return;
        }

        const response = await axiosInstance.get("/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setOrders(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching orders:", err.response?.data?.message || err.message);
        setError(err.response?.data?.message || "Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Calculate totals
  const calculateTotals = () => {
    const totalOrders = orders.length;
    const buyOrders = orders.filter(order => order.mode === "BUY").length;
    const sellOrders = orders.filter(order => order.mode === "SELL").length;
    const totalValue = orders.reduce((sum, order) => sum + (order.qty * order.price), 0);

    return { totalOrders, buyOrders, sellOrders, totalValue };
  };

  const { totalOrders, buyOrders, sellOrders, totalValue } = calculateTotals();

  if (loading) {
    return (
      <div className="container-fluid py-4">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <div className="spinner-border text-primary mb-3" style={{ width: "3rem", height: "3rem" }}>
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-muted">Loading your orders...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-fluid py-4">
        <div className="alert alert-danger d-flex align-items-center" role="alert">
          <i className="bi bi-exclamation-triangle me-2"></i>
          <div>
            <strong>Error:</strong> {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">
      {orders.length === 0 ? (
        // Empty State
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm text-center py-5">
              <div className="card-body">
                <div className="mb-4">
                  <i className="bi bi-clipboard-x display-1 text-muted"></i>
                </div>
                <h4 className="card-title text-muted mb-3">No Orders Today</h4>
                <p className="card-text text-muted mb-4">
                  You haven't placed any orders today. Start trading to see your orders here.
                </p>
                <Link to="/dashboard" className="btn btn-primary btn-lg">
                  <i className="bi bi-plus-circle me-2"></i>
                  Start Trading
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Header with Stats */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h2 className="mb-1">
                    <i className="bi bi-list-check me-2 text-primary"></i>
                    Today's Orders
                  </h2>
                  <p className="text-muted mb-0">Track all your trading activity</p>
                </div>
                <div className="text-end">
                  <small className="text-muted d-block">Total Value</small>
                  <h4 className="text-primary mb-0">₹{totalValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h4>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="row g-3 mb-4">
                <div className="col-6 col-md-3">
                  <div className="card bg-primary bg-opacity-10 border-primary border-opacity-25">
                    <div className="card-body text-center py-3">
                      <i className="bi bi-list-ul fs-4 text-primary mb-2"></i>
                      <h5 className="card-title text-primary mb-1">{totalOrders}</h5>
                      <small className="text-muted">Total Orders</small>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="card bg-success bg-opacity-10 border-success border-opacity-25">
                    <div className="card-body text-center py-3">
                      <i className="bi bi-arrow-up-circle fs-4 text-success mb-2"></i>
                      <h5 className="card-title text-success mb-1">{buyOrders}</h5>
                      <small className="text-muted">Buy Orders</small>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="card bg-danger bg-opacity-10 border-danger border-opacity-25">
                    <div className="card-body text-center py-3">
                      <i className="bi bi-arrow-down-circle fs-4 text-danger mb-2"></i>
                      <h5 className="card-title text-danger mb-1">{sellOrders}</h5>
                      <small className="text-muted">Sell Orders</small>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="card bg-info bg-opacity-10 border-info border-opacity-25">
                    <div className="card-body text-center py-3">
                      <i className="bi bi-currency-rupee fs-4 text-info mb-2"></i>
                      <h5 className="card-title text-info mb-1">
                        ₹{(totalValue / totalOrders).toFixed(0)}
                      </h5>
                      <small className="text-muted">Avg. Value</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Orders Table */}
          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  <div className="table-responsive">  
                    <table className="table table-hover mb-0">
                      <thead className="table-dark">
                        <tr>
                          <th scope="col" className="text-center" style={{ width: "60px" }}>
                            <i className="bi bi-hash"></i>
                          </th>
                          <th scope="col">
                            <i className="bi bi-building me-2"></i>Stock
                          </th>
                          <th scope="col" className="text-center">
                            <i className="bi bi-arrow-left-right me-2"></i>Mode
                          </th>
                          <th scope="col" className="text-center">
                            <i className="bi bi-123 me-2"></i>Quantity
                          </th>
                          <th scope="col" className="text-end">
                            <i className="bi bi-currency-rupee me-2"></i>Price
                          </th>
                          <th scope="col" className="text-end">
                            <i className="bi bi-calculator me-2"></i>Total Value
                          </th>
                          <th scope="col" className="text-center">
                            <i className="bi bi-clock me-2"></i>Time
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order, index) => {
                          const totalOrderValue = order.qty * order.price;
                          const isBuy = order.mode === "BUY";
                          
                          return (
                            <tr key={order._id || index} className="align-middle">
                              <td className="text-center">
                                <span className="badge bg-light text-dark fw-normal">
                                  {index + 1}
                                </span>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="me-3">
                                    <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" 
                                         style={{ width: "40px", height: "40px" }}>
                                      <i className="bi bi-graph-up text-primary"></i>
                                    </div>
                                  </div>
                                  <div>
                                    <h6 className="mb-0 fw-semibold">{order.name}</h6>
                                    <small className="text-muted">Stock Symbol</small>
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">
                                <span className={`badge ${isBuy ? 'bg-success' : 'bg-danger'} fs-6 px-3 py-2`}>
                                  <i className={`bi ${isBuy ? 'bi-arrow-up' : 'bi-arrow-down'} me-1`}></i>
                                  {order.mode}
                                </span>
                              </td>
                              <td className="text-center">
                                <span className="fw-semibold fs-6">{order.qty}</span>
                              </td>
                              <td className="text-end">
                                <span className="fw-semibold">₹{order.price.toFixed(2)}</span>
                              </td>
                              <td className="text-end">
                                <span className="fw-bold text-primary">
                                  ₹{totalOrderValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                                </span>
                              </td>
                              <td className="text-center">
                                <small className="text-muted">
                                  <i className="bi bi-clock me-1"></i>
                                  {new Date().toLocaleTimeString('en-IN', { 
                                    hour: '2-digit', 
                                    minute: '2-digit' 
                                  })}
                                </small>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;