import React from "react";
import { useOutletContext } from "react-router-dom";
export function HostVanPhotos() {
  const { hostData } = useOutletContext();

  return hostData.length > 0 ? (
    <div className="info--image" >
      <img src={`${hostData[0].imageUrl}`} alt="" />
    </div>
  ) : (
    <h2>Loading...</h2>
  );
}
