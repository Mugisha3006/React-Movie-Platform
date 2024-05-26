import React from "react";

function Trending(props) {
    return (
        <div className="w-[20%] text-center bg-[#376E6F] rounded-lg ">
            <h2 className="text-2xl font-bold text-white">{props.movie}</h2>
            <img className="w-full rounded-lg h-48 " src={props.image} />
        </div>
    )
}
export default Trending;