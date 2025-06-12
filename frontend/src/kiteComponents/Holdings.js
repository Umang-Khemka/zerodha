import React, { useState, useEffect } from 'react';
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import { useNavigate } from "react-router-dom";

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
          navigate('/login'); // Redirect to login if no token
          return;
        }

        const response = await axios.get("http://localhost:3002/allHoldings", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        setAllHoldings(response.data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch holdings:", err);
        
        if (err.response?.status === 401) {
          // Token is invalid or expired
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

  // Calculate totals
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
    return <div className="loading">Loading holdings...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <>
      <h3 className='title'>Holdings ({allHoldings.length})</h3>

      <div className='order-table'>
        <table>
          <thead>
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
                <td colSpan="8" style={{ textAlign: 'center' }}>No holdings found</td>
              </tr>
            ) : (
              allHoldings.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const pl = curValue - (stock.avg * stock.qty);
                const isProfit = pl >= 0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.day && stock.day.includes('-') ? "loss" : "profit";

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

      <div className='row'>
        <div className='col'>
          <h5>
            {totalInvestment.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h5>
          <p>Total investment</p>
        </div>
        <div className='col'>
          <h5>
            {currentValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h5>
          <p>Current value</p>
        </div>
        <div className='col'>
          <h5>
            {totalPL >= 0 ? '+' : ''}{totalPL.toFixed(2)} 
            ({totalPL >= 0 ? '+' : ''}{totalPLPercentage.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      
      {allHoldings.length > 0 && <VerticalGraph data={data} />}
    </>
  );
}

export default Holdings;