import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import Data from "./Data";

export function Vans() {
  // const [data, setData] = React.useState(Data);
  const elementsdata = Data.map((prev) => (
    <div className="van--tile">
      <Link to={`${prev.id}`} >
      <img className="vans--image" src={prev.imageUrl} />
      <div className="van--info">
        <h3>{prev.name}</h3>
        <p>
          ${prev.price}
          <span>/day</span>
        </p>
      </div>
      {/* <button >{prev.type}</button> */}
      <i className={`van-type ${prev.type} selected`}>{prev.type}</i>
      </Link>
    </div>
  ));

  return (
    <>
      <Navbar />
      <div className="vans--container">
        <h1>Explore our van option</h1>
        <div className="filter--buttons">
          <button>Simple</button>
          <button>Luxury</button>
          <button>Rugged</button>
          <Link to="/vans">Clear filters</Link>
        </div>
        <div className="box--container">{elementsdata}</div>
      </div>
    </>
  );
}
