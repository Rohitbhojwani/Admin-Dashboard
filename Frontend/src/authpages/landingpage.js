import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
//import logo from "../logo.png"
import backgroundImage from '../authpages/image.png';
const LOGIN_URL = "/auth";

const Landingpage = () => {

  let navigate = useNavigate();
  const mfg = () => {
    let path = "./AdminLogin";
    navigate(path,{replace:true});
  };
  const ret = () => {
    let path = "./UserLogin";
    navigate(path,{replace:true});
  };
  const cust = () => {
    let path = "../Cust_LoginSuccess";
    navigate(path,{replace:true});
  };
  return (
    // <div style={{display:"flex", backgroundImage: "CRPF.avaif"}}>
    <div
      className="landingpage-container"
      style={{
        opacity: 0.4,
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
    {/* <img  style={{height:'10rem',marginTop:'10rem',marginLeft:'4rem'}}/> */}
    {/* <img src="D:\SIH\login-new\login\src\CRPF_Logo.svg.png" style={{height: '20pxl'}} ></img> */}
    <div className="form-div" style={{marginTop:'7rem'}}>
      <h2 style={{textAlign:'center', padding:'1rem'}}>Please Select a Role</h2>
      <div >
      <button className="btn" onClick={mfg} style={{margin:'0.5rem'}}>Admin</button>
      <button className="btn" onClick={ret} style={{margin:'0.5rem'}}>CRPF</button>
      {/* <button onClick={cust}>Customer</button> */}
      </div>
    </div>
    </div>
  );
};
export default Landingpage;