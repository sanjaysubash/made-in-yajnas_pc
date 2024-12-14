import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Made in Yajnas</h1>
      <p>Your one-stop solution for custom PC builds and repair services.</p>
      <Link to="/build-pc" className="btn-primary">Start Building</Link>
    </div>
  );
};

export default HomePage;
