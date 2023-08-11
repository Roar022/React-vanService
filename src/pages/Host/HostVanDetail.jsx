import React from "react";
import { useParams } from "react-router-dom";
// import Data from "../pages/Data";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { getHostVans } from "../../api";
import { useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils";



export async function loader({params}){
  // console.log(params)
  await requireAuth()
return getHostVans(params.id)
}

export function HostVanDetail() {
  // const { id } = useParams()
  // const [hostData, setHostData] = React.useState([]);
  // const hostParam = useParams();
  // React.useEffect(
  //   () =>
  //     setHostData(
  //       Data.filter((prev) => {
  //         if (prev.id === hostParam.id) {
  //           return prev;
  //         }
  //       })
  //     ),
  //   [hostParam.id]
  // );
//   React.useEffect(() => {
//     fetch(`/api/host/vans/${id}`)
//         .then(res => res.json())
//         .then(data => setHostData(data.vans))
// }, [])

// if (!hostData) {
//     return <h1>Loading...</h1>
// }


const hostData=useLoaderData();
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "black",
  };
  // console.log(hostData)
  return (
    <>
      <Link to=".." relative="path" className="back--link">
        <BiArrowBack /> Back to van list
      </Link>
      <div className="hostvan-detail--container">
        {hostData ? (
          <div className="hostvan--detail">
            <img src={hostData.imageUrl} />
            <div className="hostvan--data">
              <i className={`van-type ${hostData.type} selected`}>
                {hostData.type}
              </i>
              <div className="hostvan--name"> {hostData.name} </div>
              <div className="hostvan--price">
                ${hostData.price} <span>/day</span>
              </div>
            </div>
          </div>
        ) : (
          <h2>Loading ...</h2>
        )}

        <div className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Photos
          </NavLink>
        </div>
        <Outlet context={{ hostData}} />
      </div>
    </>
  );
}
