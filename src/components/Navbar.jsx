import React, {useState} from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div>
            <section className=" bg-[#DA7B93] text-white flex justify-around items-center p-8 font-sans uppercase">
                <h1 className="text-5xl font-bold hover:cursor-pointer text-[#2F4454]">M%M</h1>
                <div className="flex items-center w-full justify-end md:hidden ">
                    <Link onClick={toggleMenu} className="text-3xl">
                        <i className={`bx ${menuOpen ? 'bx-x font-bold' : 'bx-menu font-bold'}`}></i>
                    </Link>
                </div>
                <ul className="flex gap-8 text-lg">
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
                        <Link to="/">Contact Us</Link>
                    </li>
                    
                </ul>

                <ul className="flex justify-around gap-8 font-bold text-lg items-center">
                    <li>
                        <Link to="/">Sign In</Link>
                    </li>
                    <li className="text-white bg-[#2F4454] p-2 rounded-full ">
                        <Link to="/">Sign Up</Link>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Navbar;