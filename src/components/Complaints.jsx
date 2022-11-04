import React from 'react'
import Nave from './Navbar'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import plus from '../assets/plus.png';
import './Complaints.css';
export default function Complaints() {

    var [comps , setComps] = useState([])
    localStorage.getItem("email");
    localStorage.getItem("password");
    const isAdmin = localStorage.getItem("isAdmin")
    const municipality = localStorage.getItem("municipality")

    useEffect(()=>{
        if(isAdmin){
            axios
            .get(`https://municipalcfs.herokuapp.com/admin/${municipality}`)
            .then(res=>{  
                console.log(res.data)
                setComps((comps)=(res.data)) 
            }) 
        }
        else{
        axios
        .get("https://municipalcfs.herokuapp.com/showcomplaints")
        .then(res=>{               
            setComps((comps)=(res.data)) 
            
        })}
    } ,[]
    );

  return (
     <div className='main'>
        <Nave/>
        <p style={{marginBottom:"40px"}}></p>
    <div class="card mb-3" style={{border:"none"}}>

    {comps.map(ele=>{

        const id = ele._id; 

        return <div style={{paddingLeft:"100px",paddingRight:"100px"}}> 
        <div class="card mb-3">
    <div class="row">
        <div class="col-md-4">
            <img class="img-fluid" alt="road" src={ele.imageurl}/>
        </div>
        <div class="col-md-8" >
            <div class="card-body" >
                <h4 class="card-title">{ele.name}</h4>
                <p class="card-text">{ele.municipality} Municipality</p>
                <p class="card-text">{ele.district} District</p>
                {/* <p class="card-text">Complaint Status : Pending</p> */}
                {/* <p class="card-text">
                    <small class="text-muted">3 days ago</small>
                </p> */}
                <Link to={'/viewcomp'} state={{id:id}} className="btn btn-success">View Complaint</Link>
            </div>
        </div>
    </div> 
    </div>
    </div> })}
    </div>
    <button className='plus'><img src={plus} alt="plus" className='img11'/></button>
</div>
)
}
