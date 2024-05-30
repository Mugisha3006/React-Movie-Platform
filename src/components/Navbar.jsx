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
                <nav className={`absolute md:relative md:left-auto md:top-auto bg-[#1F2833] md:bg-transparent block md:flex flex-col md:flex-row md:items-center md:w-full top-10 md:top-5 right-0 left-0  pt-20 md:pt-0 pb-20 md:pb-0 mt-5 md:mt-0 ${menuOpen ? 'block' : 'hidden'} md:flex transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 `}>
                    <ul className="flex gap-8 text-lg flex-col md:flex-row m-auto font-bold text-center">
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

                    <ul className="flex flex-col md:flex-row justify-center mt-8 md:mt-0 gap-8 font-bold text-lg items-center">
                        <li>
                            <Link to="/">Sign In</Link>
                        </li>
                        <li className="text-white bg-[#2F4454] p-2 rounded-full ">
                            <Link to="/">Sign Up</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}

export default Navbar;