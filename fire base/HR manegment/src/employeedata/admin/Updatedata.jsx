import { setDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../../firebase';

const Updatedata = () => {
    const [update, setupdate] = useState({
        id: "",
        fullname: "",
        salary: "",
        designation: "Select",
        joindate: "",
    });

    const hendelchange = (e) => {
        setupdate({ ...update, [e.target.name]: e.target.value });
    };

    const hendelsubmite = async (e) => {
        e.preventDefault();
        if (update.fullname !== "" && update.salary !== "" && update.designation !== "Select" && update.joindate !== "") {
            const docref = doc(db, "Empdata", update.id); // use this for custom id
            await setDoc(docref, {
                fullname: update.fullname,
                salary: update.salary,
                designation: update.designation,
                joindate: update.joindate,
            });
            alert("Employee data added");
            setupdate({
                id: "",
                fullname: "",
                salary: "",
                designation: "Select",
                joindate: "",
            });
        }
    };

    return (
        <>
            <div className="container-fluid w-50 vh-100 d-flex justify-content-center align-items-center bg-light">
                <div className="row w-100 shadow-lg rounded overflow-hidden">
                    <form className='p-3' onSubmit={hendelsubmite}>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">Id</label>
                            <input onChange={hendelchange} value={update.id} name='id' className="form-control" placeholder="id" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Name</label>
                            <input onChange={hendelchange} value={update.fullname} name='fullname' className="form-control" id="Name" placeholder="Enter your Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Salary" className="form-label">Salary</label>
                            <input onChange={hendelchange} value={update.salary} name='salary' className="form-control" id="Salary" placeholder="Enter your Salary" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="designation" className="form-label">Designation</label>
                            <select onChange={hendelchange} value={update.designation} name='designation' className='form-select' id="designation">
                                <option value="Select">Select</option>
                                <option value="HR">HR</option>
                                <option value="Frontend Developer">Frontend Developer</option>
                                <option value="Backend Developer">Backend Developer</option>
                                <option value="Full Stack Developer">Full Stack Developer</option>
                                <option value="DevOps Engineer">DevOps Engineer</option>
                                <option value="UI/UX Designer">UI/UX Designer</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="QA Engineer">QA Engineer</option>
                                <option value="Data Scientist">Data Scientist</option>
                                <option value="Business Analyst">Business Analyst</option>
                                <option value="Software Tester">Software Tester</option>
                                <option value="Network Engineer">Network Engineer</option>
                                <option value="Product Manager">Product Manager</option>
                                <option value="Technical Support">Technical Support</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="joindate" className="form-label">Joining Date</label>
                            <input onChange={hendelchange} value={update.joindate} name='joindate' type="date" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Add Employee</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Updatedata;
