import React from "react";
// import Data from "../pages/Data";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
export function HostVanInfo() {
  const { hostData } = useOutletContext();
  // const [data,setData]=React.useState(hostData);

  // console.log(hostData);
  return hostData ? (
    <div className="hostvan--info">
      <h4>
        Name: <span>{hostData.name}</span>
      </h4>
      <h4>
        Category: <span>{hostData.type}</span>
      </h4>
      <h4>
        Description: <span>{hostData.description}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
}



