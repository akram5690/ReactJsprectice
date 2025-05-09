import React, { useState } from 'react'
import Showempdata from './Showempdata'
import { useDispatch } from 'react-redux'
import { addemployee } from './crudappSlice'

const Crudapplication = () => {
    const [employee, setemployee] = useState({
        id: "",
        name: "",
        salary: "",
        designation: "",
        joindate: ""
    })

    const dispatch = useDispatch()

    const handelchange = (e) => {
        setemployee({ ...employee, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addemployee(employee));
        alert("add employee")

        setemployee({
            id: "",
            name: "",
            salary: "",
            designation: "",
            joindate: ""
        })
    }

    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-lg rounded">
                            <div className="card-header bg-primary text-white text-center">
                                <h5 className="mb-0">Add New Employee</h5>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="id" className="form-label">Employee ID</label>
                                        <input onChange={handelchange} value={employee.id} name='id' type="number" className="form-control" id="id" placeholder="Enter Employee ID" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Name" className="form-label">Name</label>
                                        <input onChange={handelchange} value={employee.name} name='name' type="text" className="form-control" id="Name" placeholder="Enter Full Name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Salary" className="form-label">Salary</label>
                                        <input onChange={handelchange} value={employee.salary} name='salary' type="number" className="form-control" id="Salary" placeholder="Enter Salary" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="designation" className="form-label">Designation</label>
                                        <select onChange={handelchange} value={employee.designation} name='designation' className="form-select" id="designation">
                                            <option value="Select">Select</option>
                                            <option value="Frontend Developer">Frontend Developer</option>
                                            <option value="Backend Developer">Backend Developer</option>
                                            <option value="Full Stack Developer">Full Stack Developer</option>
                                            <option value="DevOps Engineer">DevOps Engineer</option>
                                            <option value="UI/UX Designer">UI/UX Designer</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="joindate" className="form-label">Joining Date</label>
                                        <input onChange={handelchange} value={employee.joindate} name='joindate' type="date" className="form-control" id="joindate" />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Add Employee</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <Showempdata />
            </div>

        </>
    )
}

export default Crudapplication
