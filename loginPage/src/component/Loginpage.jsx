import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

const Loginpage = () => {
    let navigat = useNavigate();
    let [logindata, setlogindata] = useState({
        email: "",
        pass: ""
    });

    let [loginError, setloginError] = useState("");

    let change = (e) => {
        setlogindata({ ...logindata, [e.target.name]: e.target.value });
        setloginError("");
    };

    let setlogin = (e) => {
        e.preventDefault();
        let storedata = JSON.parse(localStorage.getItem("userdata")) || [];

        let getdata = storedata.find(
            (email => logindata.email === email.email) && (pass => logindata.pass === pass.pass)
        );

        if (getdata) {
            localStorage.setItem("logdata", logindata.email);
            navigat("/Home");
        } else {
            setloginError("Invalid email or password.");
        }
        setlogindata({ email: "", pass: "" });

    };

    return (
        <>
        <Navbar />
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={setlogin}>
                        {loginError && (
                            <div className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded-md border border-red-300">
                                {loginError}
                            </div>
                        )}

                        <div>
                            <input
                                type="text"
                                name="email"
                                value={logindata.email}
                                onChange={change}
                                placeholder="Enter Email"
                                className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="pass"
                                value={logindata.pass}
                                onChange={change}
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

                        <div className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{" "}
                            <NavLink
                                to="/Register"
                                className="font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                Register
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Loginpage;
