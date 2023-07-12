import React from "react";
import { useParams } from "react-router-dom";
import Data from "../pages/Data";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export function HostVanDetail() {
  const [hostData, setHostData] = React.useState([]);
  const hostParam = useParams();
  React.useEffect(
    () =>
      setHostData(
        Data.filter((prev) => {
          if (prev.id === hostParam.id) {
            return prev;
          }
        })
      ),
    [hostParam.id]
  );
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "black",
  };
  return (
    <>
      <Link to=".." relative="path" className="back--link">
        <BiArrowBack /> Back to van list
      </Link>
      <div className="hostvan-detail--container">
        {hostData[0] ? (
          <div className="hostvan--detail">
            <img src={hostData[0].imageUrl} />
            <div className="hostvan--data">
              <i className={`van-type ${hostData[0].type} selected`}>
                {hostData[0].type}
              </i>
              <div className="hostvan--name"> {hostData[0].name} </div>
              <div className="hostvan--price">
                ${hostData[0].price} <span>/day</span>
              </div>
            </div>
          </div>
        ) : (
          <h2>Loading ...</h2>
        )}

        <div className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Photos
          </NavLink>
        </div>
        <Outlet context={{hostData}} />
      </div>
    </>
  );
}
