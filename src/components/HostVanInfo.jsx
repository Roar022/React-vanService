import React from "react";
import Data from "../pages/Data";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
export function HostVanInfo() {

const  {hostData}  = useOutletContext();
// const [data,setData]=React.useState(hostData[0]);

console.log(hostData);
  return (

    <div className="hostvan--info">
      <h4>
        Name: <span>{hostData[0].name}</span>
      </h4>
      <h4>
        Category: <span>{hostData[0].type}</span>
      </h4>
      <h4>
        Description: <span>{hostData[0].description}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </div>
  );
}
