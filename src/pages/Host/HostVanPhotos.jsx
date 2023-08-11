import React from "react";
import { useOutletContext } from "react-router-dom";
export function HostVanPhotos() {
  const { hostData } = useOutletContext();

  return hostData ? (
    <div className="info--image" >
      <img src={`${hostData.imageUrl}`} alt="" />
    </div>
  ) : (
    <h2>Loading...</h2>
  );
}
