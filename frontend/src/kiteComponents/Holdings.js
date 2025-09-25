import React, { useState, useEffect } from 'react';
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance.js";

function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError("Please login to view holdings");
          navigate('/login');
          return;
        }

        const response = await axiosInstance.get("/holdings/allHoldings", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setAllHoldings(response.data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch holdings:", err);
        if (err.response?.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setError("Session expired. Please login again.");
          navigate('/login');
        } else {
          setError(err.response?.data?.message || "Failed to fetch holdings");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, [navigate]);

  const calculateTotals = () => {
    let totalInvestment = 0;
    let currentValue = 0;

    allHoldings.forEach(stock => {
      totalInvestment += stock.avg * stock.qty;
      currentValue += stock.price * stock.qty;
    });

    const totalPL = currentValue - totalInvestment;
    const totalPLPercentage = totalInvestment > 0 ? ((totalPL / totalInvestment) * 100) : 0;

    return {
      totalInvestment,
      currentValue,
      totalPL,
      totalPLPercentage
    };
  };

  const { totalInvestment, currentValue, totalPL, totalPLPercentage } = calculateTotals();

  const labels = allHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  if (loading) {
    return <div className="text-center mt-5">Loading holdings...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center mt-5">Error: {error}</div>;
  }

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Holdings ({allHoldings.length})</h3>

      {/* Holdings Table */}
      <div className="table-responsive mb-4">
        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.length === 0 ? (
              <tr>
                <td colSpan="8">No holdings found</td>
              </tr>
            ) : (
              allHoldings.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const pl = curValue - (stock.avg * stock.qty);
                const isProfit = pl >= 0;
                const profClass = isProfit ? "text-success" : "text-danger";
                const dayClass = stock.day && stock.day.includes('-') ? "text-danger" : "text-success";

                return (
                  <tr key={stock._id || index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{curValue.toFixed(2)}</td>
                    <td className={profClass}>
                      {isProfit ? '+' : ''}{pl.toFixed(2)}
                    </td>
                    <td className={profClass}>{stock.net}</td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Summary Row */}
      <div className="row text-center mb-5">
        <div className="col-md-4 col-sm-12 mb-3">
          <h5 className="mb-1">
            ₹{totalInvestment.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col-md-4 col-sm-12 mb-3">
          <h5 className="mb-1">
            ₹{currentValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col-md-4 col-sm-12 mb-3">
          <h5 className={`mb-1 ${totalPL >= 0 ? "text-success" : "text-danger"}`}>
            {totalPL >= 0 ? '+' : ''}{totalPL.toFixed(2)} ({totalPL >= 0 ? '+' : ''}{totalPLPercentage.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>

      {/* Vertical Graph */}
      {allHoldings.length > 0 && (
        <div className="mb-5">
          <VerticalGraph data={data} />
        </div>
      )}
    </div>
  );
}

export default Holdings;
