import React from "react";

function CategoryCard(props) {
    return (
        <div className="m-auto w-[75%] text-center bg-[#376E6F] rounded-lg ">
            <img className="w-full rounded-lg h-48 " src={props.image} />
            <h2 className="text-2xl font-bold text-white">{props.genre}</h2>
        </div>
    )
}
export default CategoryCard;