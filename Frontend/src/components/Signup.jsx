import React from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

import { useAuth } from '../Context/AuthProvider'

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate(); // ✅ useNavigate hook

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        };

        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    alert("Signup successfully");
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                    navigate("/"); // ✅ Redirect to home after successful signup
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    alert("Signup error: " + err.response.data.message);
                }
            });
    };

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div id="my_modal_3" className='shadow-2xl shadow-slate-700 rounded-lg p-8'>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* Close button if needed */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                            <h3 className="font-bold text-xl mb-7 text-center">Signup</h3>

                            {/* Full Name */}
                            <div>
                                <span className="mt-4">Name</span><br />
                                <input
                                    type="text"
                                    placeholder="Enter your fullname"
                                    className="w-80 px-4 py-1 mt-4 border border-black hover:bg-gray-950 hover:text-lg rounded text-base"
                                    {...register("fullname", { required: true })}
                                />
                                {errors.fullname && <span className="text-red-500">Fullname is required</span>}
                            </div>
                            <br />

                            {/* Email */}
                            <div>
                                <span className="mt-4">Email</span><br />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-80 px-4 py-1 mt-4 border border-black hover:bg-gray-950 hover:text-lg rounded text-base"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <br />

                            {/* Password */}
                            <div>
                                <span>Password</span><br />
                                <input
                                    type="text"
                                    placeholder="Enter your password"
                                    className="w-80 px-4 py-1 mt-4 border border-black hover:bg-gray-950 hover:text-lg rounded text-base"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className="text-red-500">Password is required</span>}
                            </div>

                            {/* Signup Button & Login Link */}
                            <div className="flex justify-around mt-12">
                                <button type="submit" className="badge badge-outline cursor-pointer p-4 hover:font-extrabold hover:text-teal-400 bg-black text-cyan-400 hover:bg-zinc-950 duration-200 mr-28">
                                    Signup
                                </button>
                                <p>
                                    Already have an account?{" "}
                                    <Link to="/" className="underline text-rose-500 cursor-pointer hover:text-red-400">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
