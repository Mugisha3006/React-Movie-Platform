import React from "react";
import "boxicons"


function Footer() {
    return (
        <div>
            <section className=" bg-[#DA7B93] text-white flex justify-around items-center p-8 font-sans">
                <h3 className="text-5xl font-bold hover:cursor-pointer text-[#2F4454]">
                    M%M
                </h3>
                <ul className="flex justify-around">
                    <li>
                        <i className="bx bxl-facebook-circle text-2xl social-icons"></i>
                    </li>
                    <li>
                        <i className="bx bxl-twitter text-2xl social-icons pl-4"></i>
                    </li>
                    <li>
                        <i className="bx bxl-linkedin-square text-2xl social-icons pl-4"></i>
                    </li>
                </ul>
                <div>
                    <h4 className="text-xl font-medium">Contact Info</h4>
                    <p>@Copyright by narcisstic 141101</p>
                    <p>+256 4932780923</p>
                    <p>All Rights Reserved.</p>
                </div>
            </section>
        </div>
    )
}

export default Footer;