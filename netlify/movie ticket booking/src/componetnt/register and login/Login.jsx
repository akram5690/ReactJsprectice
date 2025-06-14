import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [logdata, setlogdata] = useState({
    email: "",
    pass: ""
  })

  const handlechange = (e) => {
    setlogdata({ ...logdata, [e.target.name]: e.target.value })
  }

  const handlesubmite = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("https://raw.githubusercontent.com/akram5690/ReactJsprectice/refs/heads/main/movie%20ticket%20booking/src/api/registerdata.json");  //fetch all registered users from JSON server
      const users = await response.json()

      const matchuser = users.find( //users is the whole array of user objects.
        // check if user credentials match those of a registered user 
        (user) => user.email === logdata.email && user.pass === logdata.pass   //user is each object in the array during the .find() iteration.
      )

      if (matchuser) {
        alert("Login successfull") 
        sessionStorage.setItem("userdata", JSON.stringify(matchuser))  // userdata is a key that we give away ourselves
        setlogdata({
          email: "",
          pass: ""
        })
        navigate("/") // Upon login you will be directed to the home page
      } else {
        alert("Invalid email or password")
      }

    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-white">
        <div className="container p-4 shadow rounded bg-white rounded-2" style={{ maxWidth: '400px' }}>
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handlesubmite}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input onChange={handlechange} value={logdata.email} name='email' type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input onChange={handlechange} value={logdata.pass} name='pass' type="password" className="form-control" id="password" required />
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

export default Login
