import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import location from '../assets/location.png';
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Popup
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { NavLink } from "react-router-dom";
import Geocode from  "react-geocode"

function CustomMap() {
  const [lng, setLng] = useState(78.136614);
  const [lat, setLat] = useState(9.915756);
  // async function geo(req,res){
  // Geocode.fromAddress("Eiffel Tower").then(
  //   (response) => {
  //     const { lat, lng } = response.results[0].geometry.location;
  //     console.log(lat, lng);
  //   },
  //   (error) => {
  //     console.error(error);
  //   }

  // );
  // }

  
      // const result = await fetch(
      //   `https://maps.googleapis.com/maps/api/geocode/json?address=${"Tirunelveli"}&key=AIzaSyB4hApua9bcPH1G2WAcXVvzouovO8VkYDA`
      // )
      // console.log(result.json())

  // const showmap = ()=>{
  //   try{
  //   axios.get("https://municipalcfs.herokuapp.com/getadr/")
  //   .then(res =>{
  //       console.log("Hi")
  //       console.log(res)
  //   })
  //   }
  //   catch(err){
  //       console.log(err)
  //   }
   
  // }

//   axios({
//     method: "get",
//     url: "",
//   })
//     .then((res) => {
//       console.log(res);
//       localStorage.setItem("company", JSON.stringify(res.data));
//       setCompany(res);
//     })
    // .catch((err) => console.log(err));
    
  const showPosition = (position) => {
    setLng(position.coords.longitude);
    setLat(position.coords.latitude);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  return (
    <div>
      <Navbar />
      {/* <button onClick={geo}>Show</button> */}
      <Map
        mapboxAccessToken="pk.eyJ1IjoibG9rZXNoazE4IiwiYSI6ImNsYTJtczR4ZDBlaGozeG8zaDkxZGdmcWcifQ.f9fL_LWYzwdRl_sM_zZE9w"
        style={{
          width: "99vw",
          height: "99vh",
          overflow:"hidden"
        }}x
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 6,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={lng} latitude={lat} anchor="bottom">
          <img src={location} height="20px" width="20px " />
        </Marker>
        {/* {company.map((ele, index) => {
        //   const link=`/contact/${ele._id}`
          return (
            <NavLink to={'/'} className="pointer" key={index}>
              <Marker longitude={lat} latitude={lng} anchor="bottom">
                <img src={""} height="20px" width="20px " />
              </Marker>
            </NavLink>
          );
        }fdsfff        )
        } */}
      </Map>
      {/* <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        </div> */}
        
    </div>
  );
}
export default CustomMap;