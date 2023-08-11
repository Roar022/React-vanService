import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useLoaderData,
} from "react-router-dom";
// import Data from "../Data";
import { useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
  return getVans();
}

export function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = React.useState(null)
  // to get data from api
  const Data = useLoaderData();
  // const [Data, setData] = React.useState([])
  // React.useEffect(() => {
  //     fetch("/api/vans")
  //         .then(res => res.json())
  //         .then(data => setData(data.vans))
  // }, [])
// console.log(Data);
  // getting type like luxury, rugged
  const typeFilter = searchParams.get("type");

  const searchData = typeFilter
    ? Data.filter((vari) => vari.type.toLowerCase() === typeFilter)
    : Data;

  // const [data, setData] = React.useState(Data);
  const elementsdata = searchData.map((prev) => (
    <div className="van--tile">
      <Link
        to={`${prev.id}`}
        // storing current state like
        state={{ search: searchParams.toString(), type: typeFilter }}
      >
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

  // to set param in url
  function handleFilterChange(key, value) {
    setSearchParams((prevParam) => {
      if (value === null) {
        prevParam.delete(key);
      } else {
        prevParam.set(key, value);
      }
      return prevParam;
    });
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
}
  return (
    <>
      <div className="vans--container">
        <h1>Explore our van option</h1>
        <div className="filter--buttons">
          {/* <button onClick={() => setSearchParams({type:"simple"})}>Simple</button>
          <button onClick={() => setSearchParams({type:"luxury"})}>Luxury</button>
          <button onClick={() => setSearchParams({type:"rugged"})}>Rugged</button>
          <button className="clear--filters" onClick={() => setSearchParams({})}>Clear filters</button> */}

          <button
            className={`van-type simple ${
              typeFilter === "simple" ? "selected" : ""
            }`}
            onClick={() => handleFilterChange("type", "simple")}
          >
            Simple
          </button>
          <button
            className={`van-type luxury ${
              typeFilter === "luxury" ? "selected" : ""
            }`}
            onClick={() => handleFilterChange("type", "luxury")}
          >
            Luxury
          </button>
          <button
            className={`van-type rugged ${
              typeFilter === "rugged" ? "selected" : ""
            }`}
            onClick={() => handleFilterChange("type", "rugged")}
          >
            Rugged
          </button>

          {/* conditional rendering if filter is applied */}
          {typeFilter && (
            <button
              className="clear--filters"
              onClick={() => handleFilterChange("type", null)}
            >
              Clear filters
            </button>
          )}
        </div>
        <div className="box--container">{elementsdata}</div>
      </div>
    </>
  );
}
