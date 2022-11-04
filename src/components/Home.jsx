import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Review from '../assets/review.png';
import Status from '../assets/project-status.png';
import Account from '../assets/follow.png';
import './Home.css';
import homeimg from '../assets/homeimg.avif';
import { Link, Navigate } from 'react-router-dom';

function Home() {

    const getEmail = localStorage.getItem("email")
    const getPassword = localStorage.getItem("password")
    console.log(getEmail)

    const [redirsignup, setredirsignup] = React.useState(false);

    if (redirsignup) {
        return <Navigate to="/signup" />
    }

    return (
        <div className="main">
            <Navbar />
            <div className="body">
                <img src={homeimg} alt="img" className="img1" />
                <div className="container about">
                    <h2>MUNICIPAL COMPLAINT FILING</h2>
                    <hr className="hr1" />
                    <p className="p1">
                        <p> Hey Citizens ! Welcome to the Municipal Complaint Filing System.</p>
                        <p> Here you can post your various complaints such as Road Complaints , Water Complaints , Electricity Complaints etc in your areas .</p>
                        <p> These Complaints are sent to the respective Municipality and in turn they receive your Complaints and they will take a look at that problem .</p>
                        <p> They can respond to your problem in this website itself .</p>
                        <p>Don't Hesitate to post your Complaints . Municipal Complaint filing is easy Now!!</p>
                    </p>

                    {!getEmail && !getPassword ?
                        (<Link to='/login' className="btn btn-md btn-dark btn1 text-center"> Get Started  <i style={{marginLeft:"5px"}} class="fas fa-arrow-right"></i></Link>) :
                        (
                            <Link className="btn btn-md btn-dark btn1 text-center" to="/newcomp" style={{ marginLeft: "10px" }}>Get Started  <i  style={{marginLeft:"5px"}} class="fas fa-arrow-right"></i></Link>
                        )
                    }
                </div>
            </div>

            <div className="container">
                <div className="row row1">
                    <div className="col-8 divcol2">
                        <h3>Post your Complaints here</h3>
                        <hr className="hr1" />
                        <p style={{ marginTop: "20px" }}> Post your complaints by clicking and uploading photos of the complaint . Also here you can mention the brief description about the complaints . Specify your address and post your complaint . </p>
                        <button className="btn btn2" >
                            {
                                !getEmail&&!getPassword?(
                                    <Link to='/login' className="l1">New Complaint</Link>
                                ):(
                                    <Link to='/newcomp' className="l1">New Complaint</Link>
                                )
                                
                            }
                        </button>
                    </div>
                    <div className="col-4 divcol1">
                        <img src={Review} alt="homecomp" className="img2" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row row2">
                    <div className="col-4 divcol1">
                        <img src={Status} alt="homecomp" className="img3" />
                    </div>
                    <div className="col-8 divcol2">
                        <h3>View your Complaint Status</h3>
                        <hr className="hr1" />
                        <p style={{ marginTop: "20px" }}>Here you got your Complaint status . You can view your posted complaints . There you can check your status of your complaints whether it is yet to be responded . The Municipality can also give a response for your complaint</p>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row row3">
                    <div className="col-8 divcol2">
                        <h3>Create your Account</h3>
                        <hr className="hr1" />
                        <p style={{ marginTop: "20px" }}>Didn't have an Account . Just create it using your Mobile or Phone Number . Don't hesitate to Post your Complaints . Municipal Complaint filing is easy now with MCFS !!</p>
                        <button className="btn btn2"><Link to="/Signup" className="create">Create Account</Link></button>
                    </div>
                    <div className="col-4 divcol1">
                        <img src={Account} alt="homecomp" className="img4" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home;