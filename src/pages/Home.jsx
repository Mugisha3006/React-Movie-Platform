import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
function Home() {
    let [genres, setGenres] = useState(null);

    function fetchData() {
        let apiUrl = "http://localhost:1337/api/genres?populate=*";
        fetch(apiUrl)
        .then((response) => {
            return response.json();
        })
        .then((dataObject) => {
            let genreData = dataObject.data
            setGenres(genreData)  
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

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

                {
                    genres !== null ?(
                        genres.map((item) => {
                            return (
                                <CategoryCard
                                    key={item.id}
                                    genre={item.attributes.title}
                                    image={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`}
                                    // image={"http://localhost:1337/uploads/thumbnail_action_8977fca826.png"}
                                />
                            );
                        })
                        
                    ) : (
                            <p>Loading...</p>
                    )
                        
                }
                   
            </section>

            
        </div>
    )
}

export default Home;