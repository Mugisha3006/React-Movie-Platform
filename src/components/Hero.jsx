import React from "react";

function Hero(props) {
    return (
        <div className="m-auto w-[75%]">
            <h1 className="font-sans text-white text-6xl p-8 text-center">{props.title }</h1>
            <p className="text-white text-xl p-4 font-serif text-center">{props.definition }</p>
        <div>
                
        </div>
            <img src={props.image} alt="hero-section-image" />
        </div>
    )
}

export default Hero;