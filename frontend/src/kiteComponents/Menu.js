import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance.js";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        await axiosInstance.post("/auth/logout", {},
          {
            headers: 
            {Authorization: `Bearer ${token}`},
          },
        );
      }
    } catch (error) {
      console.error("Logout error:", error);
      localStorage.removeItem("token");
      navigate("/");
    } finally{
       localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsProfileDropdownOpen(false);
      navigate("/");
    }
  };

  const menuItems = [
    { name: "Dashboard", to: "/dashboard" },
    { name: "Orders", to: "/dashboard/orders" },
    { name: "Holdings", to: "/dashboard/holdings" },
    { name: "Positions", to: "/dashboard/positions" },
    { name: "Funds", to: "/dashboard/funds" },
  ];

  return (
    <div className="d-flex align-items-center gap-4 ms-auto position-relative">
      <img
        src="/media/images/logo (1).png"
        alt="Logo"
        style={{ width: "48px", height: "48px" }}
      />

      <ul className="list-unstyled d-flex gap-3 mb-0 align-items-center">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              onClick={() => handleMenuClick(index)}
              className={`fw-medium text-decoration-none ${
                selectedMenu === index ? "text-primary" : "text-dark"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Profile Dropdown */}
      <div className="dropdown" ref={dropdownRef}>
        <div
          className="d-flex align-items-center ms-4"
          onClick={handleProfileClick}
          style={{ cursor: "pointer" }}
        >
          <div className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-2" style={{ width: "32px", height: "32px", fontSize: "0.9rem" }}>
            ZU
          </div>
          <span className="fw-semibold">USERID</span>
          <i className={`bi bi-chevron-${isProfileDropdownOpen ? "up" : "down"} ms-2`}></i>
        </div>

        <div
          className={`dropdown-menu mt-2 shadow-sm ${isProfileDropdownOpen ? "show" : ""}`}
          style={{
            position: "absolute",
            right: 0,
            zIndex: 999,
            minWidth: "180px",
            backgroundColor: "#fff",
            borderRadius: "0.5rem",
          }}
        >
          <Link className="dropdown-item" to="/" onClick={() => setIsProfileDropdownOpen(false)}>
            <i className="bi bi-house me-2"></i> Home
          </Link>
          <Link className="dropdown-item" to="/profile" onClick={() => setIsProfileDropdownOpen(false)}>
            <i className="bi bi-person me-2"></i> Profile
          </Link>
          <Link className="dropdown-item" to="/settings" onClick={() => setIsProfileDropdownOpen(false)}>
            <i className="bi bi-gear me-2"></i> Settings
          </Link>
          <div className="dropdown-divider"></div>
          <button
            className="dropdown-item text-danger"
            onClick={handleLogout}
            style={{ border: "none", background: "none", textAlign: "left" }}
          >
            <i className="bi bi-box-arrow-right me-2"></i> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
