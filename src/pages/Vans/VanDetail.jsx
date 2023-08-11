// why is use data[0]
// because it is giving me an array of length 1
// similarly you can use map it will also return an array and use array_name[params.id] instead

import React from "react";
import { useParams } from "react-router-dom";
// import Data from "../Data";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "../../api";
import { getVans } from "../../api";
import { useLoaderData } from "react-router-dom";

export function loader({params}){
return getVans(params.id);
}



export function VanDetail() {
  // const params = useParams();
  // const [data, setData] = React.useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const data = useLoaderData()
  // const [van, setVan] = React.useState(null)

  // React.useEffect(() => {
  //     fetch(`/api/vans/${params.id}`)
  //         .then(res => res.json())
  //         .then(data => setData(data.vans))
  // }, [params.id])
  // if location.search is not empty then access search property otherwise null
  const search = location.state?.search || "";
  //  const search = location.state && location.state.search || ""

  // for conditional1 rendering back button
  const type = location.state?.type || "all";

  // console.log(data)

  return (
    <div className="van-detail-container">
      {/* problem:- when we apply filter and move to vanDetail page and go back, it will remove filter */}

      {/* <Link to=".." relative="path" className="back--link">
        <BiArrowBack /> Back to van list
      </Link> */}
      <Link to={`..?${search}`} relative="path" className="back--link">
        <BiArrowBack /> Back to {type} van
      </Link>
      {/* {data ? ( */}
        <div className="van-detail">
          <img src={data.imageUrl} />
          <i className={`van-type ${data.type} selected`}>{data.type}</i>
          <h2>{data.name}</h2>
          <p className="van-price">
            <span>${data.price}</span>/day
          </p>
          <p>{data.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      {/* ) : (<h2>Loading...</h2>)} */}
    </div>
  );
}
