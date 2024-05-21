import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
function Home() {
    return (
        <div className="bg-[#2F4454]">
            <Navbar />
            <Hero
                title="My Exciting Movie Ranking Platform!"
                definition="This is my enticing movie ranking site delivers an immersive and interactive platform that combines user-generated content and comprehensive film information. it aims to bring the excitement and thrill of the cinema to users screens, making movie exploration and discussion and engaging and enjoyable experience."
                image="https://html-css-movie-site.netlify.app/snaps/yellowstone.png"
            />
            
        </div>
    )
}

export default Home;