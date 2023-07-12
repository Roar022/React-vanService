import React from "react";
import Data from "../pages/Data";
import { Link } from "react-router-dom";
export function HostVans() {
  // const [data,setData]=React.useState([]);

  const elements = Data.map((prev) => (
    <div className="hostvans--data">
      <Link to={`${prev.id}`}>
        <div className="hostvan--tile">
          <img src={prev.imageUrl} />
          <div className="hostvan--info">
            <h3>{prev.name}</h3>
            <p>
              ${prev.price}
              <span>/day</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <>
      <h1 className="heading">Your listed vans</h1>

      {elements}
    </>
  );
}
