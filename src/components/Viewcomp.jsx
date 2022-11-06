import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nave from './Navbar';
import { useLocation , useNavigate} from 'react-router-dom';
import { useRef } from "react";
import locationimg from '../assets/placeholder.png';
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Popup
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Viewcomp() {
  
  var [comp , setComp ] = useState({})
  const location = useLocation();
  const { id } = location.state;
  const url = "https://municipalcfs.herokuapp.com/viewcomp/"+id;
  const posturl = "https://municipalcfs.herokuapp.com/delete/"+id;

  const [lng, setLng] = useState(78.136614);
  const [lat, setLat] = useState(9.915756);

  // const showPosition = (position) => {
  //   setLng(position.coords.longitude);
  //   setLat(position.coords.latitude);
  // };

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(showPosition);
  // } else {
  //   console.log("Geolocation is not supported by this browser.");
  // }

  const navigate = useNavigate();

  useEffect(async()=>{
    await axios
      .get(url)
      .then(res => {
          setComp((comp)=(res.data))
          console.log(comp.address)
      })
      await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${comp.address}.json?access_token=pk.eyJ1IjoibG9rZXNoazE4IiwiYSI6ImNsYTJtczR4ZDBlaGozeG8zaDkxZGdmcWcifQ.f9fL_LWYzwdRl_sM_zZE9w`)
      .then(res=>{
          console.log(res.data)
          setLng(res.data.features[0].geometry.coordinates[0])
          setLat(res.data.features[0].geometry.coordinates[1])
      }
      )
    },[]
    );

    async function post(){
      navigate("/complaints");
      axios.post(posturl);
    }

  return (
  <div>
        <Nave/>
          <div className='container m-5'>
          <div className="row">
          <div className="col-6">
          
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
          <div class="carousel-item active">
          <img src={comp.imageurl} height={"310px"} class="d-block w-100" alt="..."/>
          </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
          </button>
          </div>
          </div>
          <div className='col-6'>
          <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{comp.name}</h5>
                <p className="card-text">{comp.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{comp.address}</li>
                <li className="list-group-item">{comp.municipality} Municipality , {comp.district}</li>
                <li className="list-group-item">Complaint Status  : Pending</li>
            </ul>
            
            <div className="card-body">
                <Link className="card-link btn btn-info" style={{marginRight:"10px"}} to={'/editcomp'} state={{id:id}}>Edit</Link>
                <form className="d-inline" action="">
                    <button onClick={post} className="btn btn-danger">Delete</button>
                </form>
            </div>
        </div>
        </div> 
      </div>
      </div>
      {/* <div className="col d-flex justify-content-center">
        <div id='map' style={{marginBottom:"40px"}}> <iframe title='map' width="620" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20KonguEngineeringCollege+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=980b46dd245105b23e6e5b748bed3ed884a3ede9'></script></div>
      </div> */}
  <div className="col d-flex justify-content-center mb-5">
    <Map
        mapboxAccessToken="pk.eyJ1IjoibG9rZXNoazE4IiwiYSI6ImNsYTJtczR4ZDBlaGozeG8zaDkxZGdmcWcifQ.f9fL_LWYzwdRl_sM_zZE9w"
        style={{
          width: "60vw",
          height: "60vh",
          overflow:"hidden",
          align:"center"
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 5,
        }}
        // center={{
        //   longitude:-118.242766,
        //   latitude:34.053691
        // }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={lng} latitude={lat} anchor="bottom">
          <img src={locationimg} height="20px" width="20px " />
        </Marker>
      </Map> </div>
      </div>
  )
}

