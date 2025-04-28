import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase'; // make sure auth is exported from firebase.js
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const [regdata, setregdata] = useState({
        fullname: "",
        Email: "",
        pass: "",
        cpass: "",
    });

    const hendelchange = (e) => {
        setregdata({ ...regdata, [e.target.name]: e.target.value });
    };

    const hendelsubmite = async (e) => {
        e.preventDefault();
        if (regdata.pass === regdata.cpass) {
            try {
                //Firebase Authentication function that allows a new user to register using an email and password.
                const userCredential = await createUserWithEmailAndPassword(auth, regdata.Email, regdata.pass);
                const user = userCredential.user;

                //creates a reference to a document inside the 'regdata' collection where the document ID is the user.uid
                await setDoc(doc(db, 'regdata', user.uid), {
                    fullname: regdata.fullname,
                    Email: regdata.Email,
                });

                alert("Registered successfully ✅");
                navigate("/")
            } catch (error) {
                console.error("Registration error:", error.message);
                alert("Registration failed ❌");
            }

            setregdata({
                fullname: "",
                Email: "",
                pass: "",
                cpass: "",
            });
        } else {
            alert("Passwords do not match ❗");
        }
    };

    return (
        <>
        <div className="container-fluid w-50 vh-100 d-flex justify-content-center align-items-center bg-light">
            <div className="row w-100 shadow-lg rounded overflow-hidden">
                <div className="col-md-6 d-none d-md-flex bg-success text-white justify-content-center align-items-center flex-column p-4">
                    <h2>Hello, Friend!</h2>
                    <p>Create your account and start your journey</p>
                </div>

                <div className="col-md-6 bg-white p-5">
                    <h3 className="mb-4 text-center">Register</h3>
                    <form onSubmit={hendelsubmite}>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input onChange={hendelchange} value={regdata.fullname} name='fullname' type="text" className="form-control" placeholder="Enter your full name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input onChange={hendelchange} value={regdata.Email} name='Email' type="email" className="form-control" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input onChange={hendelchange} value={regdata.pass} name='pass' type="password" className="form-control" placeholder="Create a password" />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Confirm Password</label>
                            <input onChange={hendelchange} value={regdata.cpass} name='cpass' type="password" className="form-control" placeholder="Confirm your password" />
                        </div>
                        <button type="submit" className="btn btn-success w-100">Register</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Register;
