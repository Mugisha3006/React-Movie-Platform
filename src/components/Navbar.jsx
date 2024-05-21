import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <section>
                <h1>M%M</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Categories</Link>
                    </li>
                    <li>
                        <Link to="/">favourites</Link>
                    </li>
                    <li>
                        <Link to="/">Aboutus</Link>
                    </li>
                    
                </ul>

                <ul>
                    <li>
                        <Link to="/">Sign In</Link>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Navbar;