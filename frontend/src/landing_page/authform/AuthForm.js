import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const endpoint = isSignup ? "signup" : "login";
    const payload = isSignup
      ? { username: username.trim(), email: email.trim(), password }
      : { email: email.trim(), password };

    try {
      const res = await axios.post(`http://localhost:3002/${endpoint}`, payload);

      if (isSignup) {
        setMessage("Account created successfully! Please login.");
        setIsSignup(false);
        setUsername("");
        setEmail("");
        setPassword("");
      } else {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setMessage("Login successful! Redirecting...");
        setTimeout(() => navigate("/dashboard"), 1000);
      }
    } catch (error) {
      console.error("Auth error:", error);
      const errorMessage = error.response?.data?.message || "Request failed";
      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 page-content" style={{ maxWidth: "500px" }}>
      <div className="card p-4 shadow-sm border-0">
        <h2 className="mb-4 text-center">
          {isSignup ? "Create Account" : "Login"}
        </h2>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                id="username"
                type="text"
                className="form-control"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Processing..." : isSignup ? "Sign Up" : "Login"}
          </button>

          {message && (
            <div className={`mt-3 text-center ${message.includes('success') ? 'text-success' : 'text-danger'}`}>
              {message}
            </div>
          )}

          <p className="mt-3 text-center">
            {isSignup ? (
              <>
                Already a user?{" "}
                <span
                  className="text-primary"
                  role="button"
                  onClick={() => {
                    setIsSignup(false);
                    setMessage("");
                  }}
                >
                  Login here
                </span>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <span
                  className="text-primary"
                  role="button"
                  onClick={() => {
                    setIsSignup(true);
                    setMessage("");
                  }}
                >
                  Sign up
                </span>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
