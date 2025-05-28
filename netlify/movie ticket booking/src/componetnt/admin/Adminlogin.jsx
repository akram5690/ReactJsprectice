import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Adminlogin = () => {
    const navigate = useNavigate()
    const [addlog, setaddlog] = useState({
        addemail: "",
        addpass: ""
    })

    const handlechange = (e) => {
        setaddlog({ ...addlog, [e.target.name]: e.target.value })
    }

    const handlesubmite = (e) => {
        e.preventDefault()

        if (addlog.addemail === "shaikhakram5690@gmail.com" && addlog.addpass === "56903586") {
            sessionStorage.setItem("adminlog", JSON.stringify(addlog))
            navigate("/Addmovies")
        } else {
            alert('Enter correct email and password');
        }

        setaddlog({
            addemail: "",
            addpass: ""
        })
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-white">
                <div className="container p-4 shadow rounded bg-white rounded-2" style={{ maxWidth: '400px' }}>
                    <h2 className="text-center mb-4">Admin Login</h2>
                    <form onSubmit={handlesubmite}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input onChange={handlechange} value={addlog.addemail} name='addemail' type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onChange={handlechange} value={addlog.addpass} name='addpass' type="password" className="form-control" id="password" required />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="check" required />
                            <label className="form-check-label" htmlFor="check">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Adminlogin
