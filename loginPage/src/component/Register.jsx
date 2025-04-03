import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Register = () => {
    let navigat = useNavigate()
    let [reg, setreg] = useState({
        username: "",
        email: "",
        pass: "",
    })

    let change = (e) => {
        setreg({ ...reg, [e.target.name]: e.target.value });
    }

    const setRegister = (e) => {
        e.preventDefault();
        let getuserdata = JSON.parse(localStorage.getItem("userdata")) || []

        let newdata = [...getuserdata, reg]
        localStorage.setItem("userdata", JSON.stringify(newdata))
        alert("Registration successful!")
        setreg({
            username: "",
            email: "",
            pass: "",
        })
        navigat("/")
    };
    
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={setRegister}>
                        <div>
                            <div className="mt-2">
                                <input type="text" placeholder='Usarname' value={reg.username} name='username' onChange={change} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <div className="mt-2">
                                <input type="text" placeholder='Enter Email' value={reg.email} name='email' onChange={change} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <div className="mt-2">
                                <input type="password" placeholder='Enter password' value={reg.pass} name='pass' onChange={change} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                        <div className="mt-10 text-center text-sm/6 text-gray-500">
                            Not a member?
                            <NavLink to="/" className="font-semibold text-indigo-600 hover:text-indigo-500">Login</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
