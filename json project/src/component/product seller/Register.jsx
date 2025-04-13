import React, { useState } from 'react'
import { NavLink } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [regaccount, setregaccount] = useState({
        username: "",
        email: "",
        pass: ""
    })

    const hendelchange = (e) => {
        setregaccount({ ...regaccount, [e.target.name]: e.target.value })
    }

    const hendelsubmit = async (e) => {
        e.preventDefault();
        let result = await fetch("http://localhost:8000/register", {
            method: "post",
            body: JSON.stringify(regaccount)
        })

        if (result) {
            alert("register successfully");
            navigate("/Login")
            setregaccount({
                username: "",
                email: "",
                pass: ""
            })
        }
    }
    return (
        <>
            <div className="container">
                <form className='w-50 mx-auto shadow p-4 mt-5' onSubmit={hendelsubmit}>
                    <h2>Register Account</h2>
                    <div className="row g-2">
                        <div className="col-12">
                            <input type="text" value={regaccount.username} onChange={hendelchange} placeholder='Username' className='form-control' name='username' required />
                        </div>
                        <div className="col-12">
                            <input type="text" value={regaccount.email} onChange={hendelchange} placeholder='Email' className='form-control' name='email' required />
                        </div>
                        <div className="col-12">
                            <input type="password" value={regaccount.pass} onChange={hendelchange} placeholder='Password' className='form-control' name='pass' required />
                        </div>
                        <div className="col-12">
                            <button className='btn btn-primary' type="submit">Register Account</button>
                        </div>
                        <div className="col-12">
                            <span>Already Register ?</span>
                            <NavLink to="/Login">Login</NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register
