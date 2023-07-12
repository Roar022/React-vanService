import React from "react";
import { Outlet } from "react-router-dom";
import { Dashboard } from "../pages/Host/Dashboard";
import { NavLink } from "react-router-dom";
export function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "black",
  };
  return (
    <>
    <div className="host--layout">
      <NavLink
        to="."
        // tell react router to end matching here, if not applied then 
        // dashbord is also active when we select income and reviews or
        //  any nested route
        end
        className={({ isActive }) => (isActive ? "my-Navlink" : null)}
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="income"
        className={({ isActive }) => (isActive ? "my-Navlink" : null)}
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Income
      </NavLink>
      <NavLink
        to="vans"
        className={({ isActive }) => (isActive ? "my-Navlink" : null)}
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Vans
      </NavLink>
      <NavLink
        // to="/host/reviews"
        // because in route its absolute path is already been set up by nested route
        to="reviews"
        className={({ isActive }) => (isActive ? "my-Navlink" : null)}
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Reviews
      </NavLink>
    </div>
      <Outlet />
      </>
  );
}
