import React from "react";
import Nav from './Navbar';
import './Newcomp.css';
import { useLocation, useNavigate} from 'react-router-dom';
import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Editcomp(){

    var [ name , setName] = useState({name: []})
    var [ description , setDescription] = useState({description : []})
    var [ address , setAddress] = useState({address : []})
    var [ municipality , setMunicipality] = useState({municipality : []})
    var [ district , setDistrict] = useState({district : []})
    
    var [comp , setComp] = useState({});
    const location = useLocation();
    const { id } = location.state;
    const geturl = "https://municipalcfs.herokuapp.com/viewcomp/"+id;
    console.log(geturl)
    // const geturl = "https://localhost:/"+id;
    const posturl = "https://municipalcfs.herokuapp.com/editcomp"+id;

    async function ini(){
        console.log(geturl)
        try{
        await axios
          .get(geturl)
          .then(res => {
              setComp((comp)=(res.data))
              setName((name)=(res.data.name))
              setDescription((description)=(res.data.description))
              setAddress((address)=(res.data.address))
              setMunicipality((municipality)=(res.data.municipality))
              setDistrict((district)=(res.data.district))
          })
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        ini()
        },[]
        );
        const eleid = comp._id
        const navigate = useNavigate();

    async function post(e){
        e.preventDefault()
        const inputs={
            name,
            description,
            address,
            municipality,
            // city,
            district
        };
        try{
            navigate("/viewcomp",{state : {id:eleid}})
            await axios.post(posturl,inputs)
            
        }
        catch{
            console.log(Error);
        }
        
    }
    
    return(
    <div>
        <Nav/>
        <div className="container" style={{marginTop:"50px",marginBottom:"50px"}}>
        <div className="row">
            <div className="col-md-6 offset-md-3 col-xl-6 offset-xl-3">
                <div className="card shadow">
                <div><p className="card-title logind">Edit Complaint</p></div>
                <div className="card-body">

                    <form onSubmit={post} method="POST" className="validated-form" noValidate>
                        <div className="mb-3">
                            <label className="form-label" for="cmpname">Complaint Name</label>
                            <input className="form-control" type="text" id="cmpname" 
                                value={name} onChange={(e)=>setName(e.target.value)}
                                 name="cmpname" autoFocus required/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="form-label" for="description">Description</label>
                            <textarea className="form-control" type="text" value={description} onChange={(e)=>setDescription(e.target.value)} id="description" name="description" required></textarea>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="form-label" for="addresscmp">Address of the Problem</label>
                            <textarea className="form-control" type="text" value={address} onChange={(e)=>setAddress(e.target.value)} id="addresscmp" name="addresscmp" required></textarea>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="municipality">Municipality</label>
                            <input className="form-control" type="text" value={municipality} onChange={(e)=>setMunicipality(e.target.value)} id="municipality" name="municipality" autoFocus required/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="district">District</label>
                            <input className="form-control" type="text" value={district} onChange={(e)=>setDistrict(e.target.value)} id="district" name="district" autoFocus required/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="form-label" for="cmpimg">Upload Image</label>
                            <input className="form-control" type="file" id="cmpimg" name="cmpimg" required/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <button className="btn btn-success w-100" type="submit">Edit Complaint</button>
                        {/* <Link to={'/viewcomp'} state={{id:eleid}} className="btn btn-success w-100">Edit Complaint</Link> */}
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    ) 
}

export default Editcomp;