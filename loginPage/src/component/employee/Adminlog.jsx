import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar';

const Adminlog = () => {
    let navigate = useNavigate();
    let [addlog, setAddlog] = useState({
        email: "",
        pass: ""
    })

    let hendelchange = (e) => {
        setAddlog({ ...addlog, [e.target.name]: e.target.value });
    }

    let hendelsubmit = (e) => {
        e.preventDefault();
        if (addlog.email === "shaikhakram5690@gmail.com" && addlog.pass === "a@12345") {
            localStorage.setItem("logindata", JSON.stringify(addlog));
            navigate("/Home");
        } else {
            alert("Invalid email and password");
        }
    }

    return (
        <>
        <Navbar />
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                        Admin account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={hendelsubmit}>
                        <div>
                            <input
                                type="text"
                                name="email"
                                value={addlog.email}
                                onChange={hendelchange}
                                placeholder="Enter Email"
                                className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="pass"
                                value={addlog.pass}
                                onChange={hendelchange}
                                placeholder="Enter password"
                                className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Adminlog
