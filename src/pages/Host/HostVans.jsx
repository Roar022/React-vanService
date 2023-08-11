import React from "react";
// import Data from "../pages/Data";
import { Link } from "react-router-dom";
import   {getHostVans} from   "../../api";
import { useLoaderData } from "react-router-dom";
import {requireAuth} from "../../utils"

export async function loader(){
// console.log(params)
  await requireAuth()
  return getHostVans()
}

export function HostVans() {
  // const [data,setData]=React.useState([]);
  // const [Data, setData] = React.useState([])
    
  // React.useEffect(() => {
  //     fetch("/api/host/vans")
  //         .then(res => res.json())
  //         .then(data => setData(data.vans))
  // }, [])

const Data=useLoaderData();
// console.log(Data)
  const elements = Data.map((prev) => (
    <div className="hostvans--data">
      <Link to={prev.id}>
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
