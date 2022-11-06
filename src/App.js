import React from "react";
import Login from './components/Login';
import Home from './components/Home';
import Complaints from './components/Complaints';
import Signup from './components/Signup';
import {Routes , Route} from 'react-router-dom';
import Newcomp from './components/Newcomp';
import Viewcomp from './components/Viewcomp';
import Editcomp from './components/Editcomp';
import Admin from "./components/Admin";
import CustomMap from "./components/CustomMap";

function App() {
  return (
    <>
    
    <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="/complaints" element={<Complaints/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/newcomp" element={<Newcomp/>}/>
        <Route path="/viewcomp" element={<Viewcomp/>}/>
        <Route path="/editcomp" element={<Editcomp/>}/>
        <Route path="/admin" element={<Admin/>}/>
        {/* <Route path="/map" element={<CustomMap/>}/> */}
    </Routes>
    </>
  );
}

export default App;