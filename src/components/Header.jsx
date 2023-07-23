import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { DashBoard } from "../pages/Host/Dashboard";
import {CgProfile} from "react-icons/cg"
export function Header() {


  const activeStyle={
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#8a4819"
  }
  return (
    <>
      <nav className="main--nav">
        <NavLink
        style={({isActive})=>isActive?activeStyle:null}
         to="/" 
         className="nav--logo">
          #VANLIFE
        </NavLink>


        <div className="nav--navigation">

          <NavLink
          to="host"
          className={({isActive}) => isActive ? "my-link" : null }
          style={({isActive})=> isActive?activeStyle:null}
          >
            Host
          </NavLink>

          <NavLink
          to="about"
          className={({isActive}) => isActive ? "my-link" : null }
          style={({isActive})=> isActive?activeStyle:null}
          >
            About
          </NavLink>


          <NavLink
          to="Vans"
          className={({isActive}) => isActive ? "my-link" : null }
          style={({isActive})=> isActive?activeStyle:null}
          >
            Vans
          </NavLink>
          <NavLink to="login" className="login-link">
          <CgProfile/>
                </NavLink>
        </div>
      </nav>
    </>
  );
}
