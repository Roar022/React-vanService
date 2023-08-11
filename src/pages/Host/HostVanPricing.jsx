import React from "react";
import { useOutletContext } from "react-router-dom";
export function HostVanPricing() {
  const { hostData } = useOutletContext();
  return hostData ? (
    <div className="hostvan--price">
    ${hostData.price} <span>/day</span>
  </div>
  ) : (
    <h2>Loading...</h2>
  );
}
