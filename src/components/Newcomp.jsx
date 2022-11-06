import React from "react";
import { useState } from "react";
import axios from 'axios';
import Nav from './Navbar';
import { useNavigate } from 'react-router-dom';
import './Newcomp.css';

function Newcomp() {

    const [name, setName] = useState({ name: "" })
    const [description, setDescription] = useState({ description: "" })
    const [address, setAddress] = useState({ address: "" })
    const [municipality, setMunicipality] = useState({ municipality: "" })
    const [district, setDistrict] = useState({ district: "" })
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")
    const [imageurl, setImageurl] = useState("")

    const navigate = useNavigate();

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'muncipalcfs')
        setLoading(true)
        const res = await fetch("https://api.cloudinary.com/v1_1/djylwtcvn/image/upload",
            {
                method: 'POST',
                body: data
            })

        const file = await res.json()
        console.log(file)
        console.log(file.url)
        setImageurl(file.url)
        setImage(file.secure_url)
        setLoading(false)

    }

    async function post(e) {
        e.preventDefault()
        const inputs = {
            name,
            description,
            address,
            municipality,
            district,
            imageurl
        };
        try {
            await axios.post("https://municipalcfs.herokuapp.com/post", inputs)
            .then(
                    navigate("/complaints")
            )
        }
        catch {
            console.log(Error);
        }

    }

    
    return (
        <div>
            <Nav />
            <div className="container" style={{ marginTop: "50px", marginBottom: "50px" }}>
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xl-6 offset-xl-3">
                        <div className="card shadow">
                            <div><p className="card-title logind">New Complaint</p></div>
                            <div className="card-body">
                                <form onSubmit={post} method="post" className="validated-form" noValidate>
                                    <div className="mb-3">
                                        <label className="form-label" for="name">Complaint Name</label>
                                        <input className="form-control" type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} autofocus required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label" for="description">Description</label>
                                        <textarea className="form-control" type="" id="description" name="description" onChange={(e) => setDescription(e.target.value)} required></textarea>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label" for="addresscmp">Address of the Problem</label>
                                        <textarea className="form-control" type="" id="addresscmp" name="addresscmp" onChange={(e) => setAddress(e.target.value)} required></textarea>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" for="municipality">Municipality</label>
                                        <input className="form-control" type="text" id="municipality" name="municipality" onChange={(e) => setMunicipality(e.target.value)} autofocus required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    {/* <div className="mb-3">
                            <label className="form-label" for="city">City</label>
                            <input className="form-control" type="text" id="city" name="city"onChange={(e)=>setCity(e.target.value)} autofocus required/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div> */}
                                    <div className="mb-3">
                                        <label className="form-label" for="district">District</label>
                                        <input className="form-control" type="text" id="district" name="district" onChange={(e) => setDistrict(e.target.value)} autofocus required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label" for="cmpimg">Upload Image</label>
                                        <input className="form-control" type="file" onChange={uploadImage} id="cmpimg" name="cmpimg" required />
                                        {
                                            loading ? (
                                                <h5>Loading..</h5>
                                            ) : (
                                                <img src={image} style={{ width: '300px' }} alt=".." />
                                            )

                                        }
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <button className="btn btn-success w-100" type="submit">Post Complaint</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newcomp;