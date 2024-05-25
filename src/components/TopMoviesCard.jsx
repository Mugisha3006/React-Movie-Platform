import React from "react";

function TopMoviesCard(props) {
    return (
        <div className="w-[20%] text-center bg-[#DA7B93] rounded-lg ">
            <h2 className="text-2xl font-bold text-white">{props.rank}</h2>
            <h2 className="text-xl font-bold text-white">{props.topmovie}</h2>
            <img className="w-full rounded-lg h-48 " src={props.image} />
        </div>
    )
}
export default TopMoviesCard;