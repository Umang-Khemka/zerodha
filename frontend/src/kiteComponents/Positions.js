import React, { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allPositions")
      .then((res) => {
        console.log("Fetched Positions:", res.data);
        setPositions(res.data);
      })
      .catch((err) => {
        console.error("Error fetching positions:", err);
      });
  }, []);

  return (
    <div className="p-4">
      <h3 className="mb-4 fw-semibold">
        Positions ({positions.length})
      </h3>

      <div className="table-responsive">
        <table className="table table-striped table-bordered shadow-sm">
          <thead className="table-dark">
            <tr>
              <th scope="col" style={{ width: "12%" }}>Product</th>
              <th scope="col" style={{ width: "24%" }}>Instrument</th>
              <th scope="col" style={{ width: "10%" }}>Qty.</th>
              <th scope="col" style={{ width: "12%" }}>Avg.</th>
              <th scope="col" style={{ width: "12%" }}>LTP</th>
              <th scope="col" style={{ width: "15%" }}>P&L</th>
              <th scope="col" style={{ width: "15%" }}>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, index) => {
              const currentValue = stock.price * stock.qty;
              const totalInvested = stock.avg * stock.qty;
              const isProfit = currentValue - totalInvested >= 0.0;

              const profitLossClass = isProfit ? "text-success fw-semibold" : "text-danger fw-semibold";
              const dayChangeClass = stock.isLoss ? "text-danger" : "text-success";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profitLossClass}>
                    {(currentValue - totalInvested).toFixed(2)}
                  </td>
                  <td className={dayChangeClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
