import React from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import Nave from "./Navbar";

function Login() {

    const [email, setEmail] = useState({ email: "" })
    const [password, setPassword] = useState({ password: "" })
    const navigate = useNavigate();
    
    async function post(e) {
        e.preventDefault()
        const inputs = {
            email,
            password
        };

        try {
            await axios
                .post("https://municipalcfs.herokuapp.com/login",inputs)
                .then(res => {
                    localStorage.setItem("email", res.data.email)
                    // localStorage.setItem("password", res.data.password)
                    console.log(res)
                    alert("Login successful..!!");
                    navigate("/home")
                }
                )
        }
        catch (err) {
            console.log(Error);
        }

    }

    return (
        <div>
            <Nave />
            <div className="container" style={{ marginTop: "80px" }}>
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
                        <div className="card shadow">
                            <div><p className="card-title logind">Login</p></div>
                            <div className="card-body">
                                <form onSubmit={post} method="POST" className="validated-form" novalidate>
                                    <div className="mb-3">
                                        <label className="form-label" for="username">Email</label>
                                        <input className="form-control" type="text" onChange={(e) => setEmail(e.target.value)} id="email" name="email" autofocus required />
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
                                    <button type="submit" className="btn btn-success  w-100">Login </button>
                                </form>
                            </div>
                        </div>
                        <div className="text-center" style={{ marginTop: "10px" }}>Don't have an account ? <Link to="/Signup" classNameName="signa">Signup</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;