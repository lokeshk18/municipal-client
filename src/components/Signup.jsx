import React from "react";
import './Signup.css';
import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom";
import Nave from "./Navbar";
function Signup() {

    const [name, setName] = useState({ name: "" })
    const [mobileno, setMobileno] = useState({ mobileno: "" })
    const [email, setEmail] = useState({ email: "" })
    const [aadhaar, setAadhaar] = useState({ aadhaar: "" })
    const [dob, setDob] = useState({ dob: "" })
    const [address, setAddress] = useState({ address: "" })
    const [password, setPassword] = useState({ password: "" })
    const [municipality, setMunicipality] = useState({ municipality: "" })

    async function post(e) {
        e.preventDefault()
        const inputs = {
            name,
            mobileno,
            email,
            aadhaar,
            municipality,
            dob,
            address,
            password
        };
        try {
            const res = await axios.post("https://municipalcfs.herokuapp.com/signup", inputs);
            res.data && window.location.replace("/login");
        }
        catch (err) {
            
            console.log(err);
        }

    };


    return (

        <div>
            <Nave />
            <div className="container" style={{ marginTop: "50px", marginBottom: "50px" }}>
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xl-6 offset-xl-3">
                        <div className="card shadow">
                            <div><p className="card-title creatd">Create Account</p></div>
                            <div className="card-body" >
                                <form onSubmit={post} method="post" className="validated-form" noValidate>
                                    <div className="mb-3">
                                        <label className="form-label" for="username">Name</label>
                                        <input className="form-control" type="text" onChange={(e) => setName(e.target.value)} id="name" name="name" autofocus required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label" for="mobile">Mobile No</label>
                                        <input className="form-control" type="text" onChange={(e) => setMobileno(e.target.value)} id="mobile" name="mobile" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label" for="email">Email</label>
                                        <input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} id="email" name="email" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label" for="aadhaar">Aadhaar No</label>
                                        <input className="form-control" type="text" onChange={(e) => setAadhaar(e.target.value)} id="adhaar" name="aadhaar" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label" for="aadhaar">Municipality</label>
                                        <input className="form-control" type="text" onChange={(e) => setMunicipality(e.target.value)} id="municipality" name="municipality" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label" for="dob">D.O.B</label>
                                        <input className="form-control" type="date" onChange={(e) => setDob(e.target.value)} id="dob" name="dob" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label" for="address">Address</label>
                                        <textarea className="form-control" type="date" onChange={(e) => setAddress(e.target.value)} id="address" name="address" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label" for="password">Password</label>
                                        <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} id="password" name="password" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-success w-100">Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center" style={{ marginTop: "-40px", marginBottom: "20px" }}>Already having an account ? <Link to="/login" classNameName="signa">Login</Link></div>
        </div>
    )
}

export default Signup;