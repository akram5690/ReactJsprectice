import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Register = () => {
    let navigat = useNavigate()
    let [reg, setreg] = useState({
        firstname: "",
        lastname: "",
        DOB: "",
        email: "",
        pass: "",
        Rpass: "",
        gender: "",

    })

    let [error, seterror] = useState("")


    let handleChange = (e) => {
        setreg({ ...reg, [e.target.name]: e.target.value });
        seterror("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (reg.pass !== reg.Rpass) {
            seterror("Passwords don't match!");
            return
        }

        let ptn = /^[a-zA-Z0-9]+[\.@#$&%]+[a-zA-Z0-9]+$/

        if (!ptn.test(reg.pass)) {
            seterror("Password must be at least 6 characters, contain a letter, number, and a special character.")
            return
        }


        let getuserdata;
        try {
            const storedData = JSON.parse(localStorage.getItem("userdata"));
            getuserdata = Array.isArray(storedData) ? storedData : [];
        } catch (e) {
            getuserdata = [];
        }

        // let getuserdata = JSON.parse(localStorage.getItem("userdata")) || [] // not working in crome

        let newdata = [...getuserdata, reg]
        localStorage.setItem("userdata", JSON.stringify(newdata))
        alert("Registration successful!")
        setreg({
            firstname: "",
            lastname: "",
            DOB: "",
            email: "",
            pass: "",
            Rpass: "",
            gender: "",
        })
        navigat("/")
    };

    return (
        <>
            <Navbar />
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                        Create your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {error && (
                        <div className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded-md border border-red-300">
                            {error}
                        </div>
                    )}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input id="firstname" type="text" placeholder='First name' value={reg.firstname} name='firstname' onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" required />
                            </div>
                            <div>
                                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <input id="lastname" type="text" placeholder='Last name' value={reg.lastname} name='lastname' onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" required />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Gender
                            </label>
                            <div className="mt-2 flex gap-4">
                                <label className="inline-flex items-center">
                                    <input type="radio" name="gender" value="male" checked={reg.gender === "male"} onChange={handleChange} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500" required
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Male</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" name="gender" value="female" checked={reg.gender === "female"} onChange={handleChange} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Female</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                                Date of Birth
                            </label>
                            <input id="dob" type="date" value={reg.DOB} name='DOB' onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input id="email" type="email" placeholder='Enter Email' value={reg.email} name='email' onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input id="password" type="password" placeholder='Enter password (min 6 characters)' value={reg.pass} name='pass' onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" minLength="6" required
                            />
                        </div>

                        <div>
                            <label htmlFor="Retypepassword" className="block text-sm font-medium text-gray-700">
                                Confarm Password
                            </label>
                            <input type="password" placeholder='Enter password (min 6 characters)' value={reg.Rpass} name='Rpass' onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" minLength="6" required
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Create account
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?
                        <NavLink to="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Login here
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Register
