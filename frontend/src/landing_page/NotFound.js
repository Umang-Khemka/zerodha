import React from 'react';

function NotFound() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-4 text-danger">404 - Page Not Found</h1>
        <p className="lead mt-3 text-muted">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="btn btn-primary mt-4">
          Go back to Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
