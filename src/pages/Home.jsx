import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
function Home() {
    return (
        <div className="bg-[#2F4454]">
            <Navbar />
            <Hero
                title="My Exciting Movie Ranking Platform!"
                definition="This is my enticing movie ranking site delivers an immersive and interactive platform that combines user-generated content and comprehensive film information. it aims to bring the excitement and thrill of the cinema to users screens, making movie exploration and discussion and engaging and enjoyable experience."
                image="https://html-css-movie-site.netlify.app/snaps/yellowstone.png"
            />

            <h1 className="font-sans text-white text-6xl p-8 mb-4 text-center">Movie Categories/Genres</h1>
            <section className="w-[75%] pb-8 m-auto flex justify-around gap-4">
                <CategoryCard
                    genre="Action"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9LBHpDDM202VdP_TI7m55Glh5Npz-4GvhvQ&s"
                />
                <CategoryCard
                    genre="Adventure"
                    image="https://html-css-movie-site.netlify.app/snaps/adventure.png"
                />
                <CategoryCard
                    genre="Sci-Fi"
                    image="https://html-css-movie-site.netlify.app/snaps/science-fiction.png"
                />
                <CategoryCard
                    genre="Thriller"
                    image="https://html-css-movie-site.netlify.app/snaps/thriller.png"
                />
                <CategoryCard
                    genre="Horror"
                    image="https://html-css-movie-site.netlify.app/snaps/horror.png"
                />
                
                
            </section>

            
        </div>
    )
}

export default Home;