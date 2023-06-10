// why is use data[0]
// because it is giving me an array of length 1
// similarly you can use map it will also return an array and use array_name[params.id] instead


import React from "react";
import { useParams } from "react-router-dom";
import Data from "../Data";
export function VanDetail() {
  const params = useParams();

  const [data, setData] = React.useState([]);

  React.useEffect(
    () =>
      setData(
        Data.filter((prev) => {
          if (prev.id === params.id) {
            return prev;
          }
        })
      ),
    [params.id]
  );

  // console.log(data[0].name)

  return (
    <div className="van-detail-container">
      {data[0] ? (
        <div className="van-detail">
          <img src={data[0].imageUrl} />
          <i className={`van-type ${data.type} selected`}>{data[0].type}</i>
          <h2>{data[0].name}</h2>
          <p className="van-price">
            <span>${data[0].price}</span>/day
          </p>
          <p>{data[0].description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
