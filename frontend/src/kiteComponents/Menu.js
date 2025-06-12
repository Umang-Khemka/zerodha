import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      
      if (token) {
        await fetch('http://localhost:3002/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
      }
      
      // Remove token from storage
      localStorage.removeItem('token');
      
      // Close dropdown
      setIsProfileDropdownOpen(false);
      
      // Redirect to home page
      navigate('/');
      
    } catch (error) {
      console.error('Logout error:', error);
      // Still remove token even if server request fails
      localStorage.removeItem('token');
      navigate('/');
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/media/images/logo (1).png" style={{ width: "50px" }} />  
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        
        {/* Bootstrap Profile Dropdown */}
        <div className="dropdown" ref={dropdownRef}>
          <div 
            className="profile d-flex align-items-center" 
            onClick={handleProfileClick}
            style={{ cursor: 'pointer' }}
          >
            <div className="avatar me-2">ZU</div>
            <p className="username mb-0">USERID</p>
            <i className={`bi bi-chevron-${isProfileDropdownOpen ? 'up' : 'down'} ms-2`}></i>
          </div>
          
          {/* Dropdown Menu */}
          <div className={`dropdown-menu ${isProfileDropdownOpen ? 'show' : ''}`} 
               style={{ 
                 position: 'absolute', 
                 top: '100%', 
                 left: '0', 
                 zIndex: 1000,
                 minWidth: '160px'
               }}>
            <Link 
              className="dropdown-item" 
              to="/"
              onClick={() => {
                setIsProfileDropdownOpen(false);
                setSelectedMenu(-1); // Reset menu selection when going to home
              }}
            >
              <i className="bi bi-house me-2"></i>
              Home
            </Link>
            <Link 
              className="dropdown-item" 
              to="/profile"
              onClick={() => setIsProfileDropdownOpen(false)}
            >
              <i className="bi bi-person me-2"></i>
              Profile
            </Link>
            <Link 
              className="dropdown-item" 
              to="/settings"
              onClick={() => setIsProfileDropdownOpen(false)}
            >
              <i className="bi bi-gear me-2"></i>
              Settings
            </Link>
            <div className="dropdown-divider"></div>
            <button 
              className="dropdown-item text-danger" 
              onClick={handleLogout}
              style={{ border: 'none', background: 'none', textAlign: 'left' }}
            >
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;