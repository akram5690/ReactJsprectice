import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Loginpage = () => {
    let navigat = useNavigate()
    let [logindata, setlogindata] = useState({
        email : "",
        pass : ""
    })

    let change = () => {
        setlogindata({ ...logindata, [e.target.name]: e.target.value });
    }

    let setlogin = (e) => {
        e.preventDefault();
        let storedata = JSON.parse(localStorage.getItem("userdata")) || []

    }

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={setlogin} action="#" method="POST">
                        <div>
                            <div className="mt-2">
                                <input type="text" onChange={change} placeholder='Enter Email' className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <div className="mt-2">
                                <input type="password" onChange={change} placeholder='Enter password' className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                        <div className="mt-10 text-center text-sm/6 text-gray-500">
                            Not a member?
                            <NavLink to="/Register" className="font-semibold text-indigo-600 hover:text-indigo-500">Register</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Loginpage
