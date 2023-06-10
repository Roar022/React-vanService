import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { DashBoard } from "../pages/Host/Dashboard";
export function Header() {
  return (
    <>
      <nav className="main--nav">
        <Link to="/" className="nav--logo">
          #VANLIFE
        </Link>
        <div className="nav--navigation">
          <Link to="/host">Host</Link>

          <Link to="/about" className="nav--about">
            About
          </Link>
          <Link to="/Vans" className="nav--vans">
            Vans
          </Link>
        </div>
      </nav>
    </>
  );
}
