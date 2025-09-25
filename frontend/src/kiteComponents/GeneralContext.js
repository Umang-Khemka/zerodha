import React, { useState, useEffect } from 'react';
import TradeActionWindow from "./TradeActionWindow";
import axios from 'axios';
import axiosInstance from '../api/axiosInstance';

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (uid) => {},
  closeWindow: () => {},
  refreshHoldings: () => {}, // ✅ NEW
});

export const GeneralContextProvider = (props) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [mode, setMode] = useState("BUY");
  const [holdings, setHoldings] = useState([]);

  const handleOpenBuyWindow = (uid) => {
    setIsWindowOpen(true);
    setSelectedStockUID(uid);
    setMode("BUY");
  };

  const handleOpenSellWindow = (uid) => {
    setIsWindowOpen(true);
    setSelectedStockUID(uid);
    setMode("SELL");
  };

  const handleCloseWindow = () => {
    setIsWindowOpen(false);
    setSelectedStockUID("");
    setMode("BUY");
  };

 const refreshHoldings = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found");
      return;
    }
    
  const res = await axiosInstance.get("/holdings/allHoldings", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setHoldings(res.data);
  } catch (err) {
    console.error("Failed to refresh holdings", err);
  }
};

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeWindow: handleCloseWindow,
        refreshHoldings, // ✅ provide in context
      }}
    >
      {props.children}
      {isWindowOpen && (
        <TradeActionWindow
          uid={selectedStockUID}
          mode={mode}
          closeWindow={handleCloseWindow}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;