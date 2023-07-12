import React from "react";
import { useOutletContext } from "react-router-dom";
export function HostVanPricing() {
  const { hostData } = useOutletContext();
  return hostData.length > 0 ? (
    <div className="hostvan--price">
    ${hostData[0].price} <span>/day</span>
  </div>
  ) : (
    <h2>Loading...</h2>
  );
}
