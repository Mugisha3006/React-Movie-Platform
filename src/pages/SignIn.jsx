import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import { storeUser } from "../UserHelper";


function SignIn() {
    const [input, setInput] = useState({
        identifier: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        identifier: "",
        password: "",
    });

    const validateEmail = (identifier) => {
        if (!validator.isEmail(identifier)) {
            setErrors({ ...errors, identifier: "Invalid email format." });
            return false;
        }
        setErrors({ ...errors, identifier: "" });
        return true;
    };

    const validatePassword = (password) => {
        if (password.length < 8) {
            setErrors({
                ...errors,
                password: "Password must be at least 8 characters long.",
            });
            return false;
        }
        setErrors({ ...errors, password: "" });
        return true;
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid =
            validateEmail(input.identifier) && validatePassword(input.password);
        if (!isValid) {
            return;
        }

        try {
            const response = await axios.post(
                "https://react-movie-backend-ksa4.onrender.com/api/auth/local",
                input
            );

            if (!response.data.jwt) {
                setErrors({
                    ...errors,
                    identifier: "Invalid email password combination.",
                });
                throw new Error("Invalid email password combination.");
            }
            storeUser(response.data);
            navigate("/booking");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <section className=" p-8 mt-20">
                <div className="bg-[#2F4454] rounded-2xl border-[] w-full md:w-[50%] m-auto pt-[5em] pb-[5em] text-white">
                    
                    <h2 className="text-center text-3xl font-bold text-">
                        Sign In
                    </h2>
                    <div className="mt-4">
                        <form onSubmit={handleSubmit}>
                            <div className="flex w-[80%] m-auto justify-center">
                                <label htmlFor="email" className="text-lg m-[0] font-normal" />
                                <input
                                    id="identifier"
                                    type="email"
                                    className="w-4/5 rounded p-2 mt-4 placeholder-[#061f77] border border-gray-300 text-[#061f77] focus:outline-none"
                                    placeholder="Email"
                                    onChange={(e) => {
                                        setInput({ ...input, identifier: e.target.value });
                                        validateEmail(e.target.value);
                                    }}
                                    value={input.identifier}
                                />
                            </div>
                            {errors.identifier && (
                                <p className="text-center text-red-500">{errors.identifier}</p>
                            )}
                            <div className="relative flex w-[80%] m-auto justify-center">
                                <label htmlFor="password" className="text-lg m-[0] font-normal" />
                                <input
                                    id="password"
                                    type="password"
                                    className="w-4/5 rounded p-2 mt-4 placeholder-[#061f77] border border-gray-300 text-[#061f77] focus:outline-none"
                                    placeholder="Password"
                                    onChange={(e) => {
                                        setInput({ ...input, password: e.target.value });
                                        validatePassword(e.target.value);
                                    }}
                                    value={input.password}
                                />
                                <span className="absolute top-[55%] transform -translate-y-1/4 right-[15%] text-[#061f77] text-[20px]">
                                    <i className="bx bx-low-vision"></i>
                                </span>
                            </div>
                            {errors.password && (
                                <p className="text-center text-red-500">{errors.password}</p>
                            )}
                            <div className="mt-8 flex justify-center">
                                <div>
                                    <p className="text-center text-blue-500">Forgot password?</p>
                                </div>
                            </div>
                            <div className="flex justify-center m-auto w-[80%]">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 mt-4  font-bold text-base rounded py-2 px-4 "
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        {errors.general && <p className="text-red-500">{errors.general}</p>}
                        <div>
                            <p className="mt-4 text-white text-center">
                                Don't have an account?{" "}
                                <Link to="/signup" className="text-blue-500">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SignIn;
