import React from "react";
import { Link } from "react-router-dom";

function Trending(props) {
    return (
        <div className=" text-center bg-[#376E6F] rounded-lg ">
            <h2 className="text-2xl font-bold text-white">{props.movie}</h2>
            <img className="w-full rounded-lg h-48 " src={props.image} />
            <Link to={props.trailer} className="text-xl font-bold">Trailer</Link>
        </div>
    )
}
export default Trending;