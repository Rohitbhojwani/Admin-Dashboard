import {useNavigate} from "react-router-dom";
import "../manufacturer_afterlogin.css";
import "./navbarcss/navcss.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Pending({state}){

    const [data,setData]=useState("");

    const getData=async()=>{
        const response=await axios.get("http//localhost:3500/pending");
        setData(response.data);
    }

    useEffect(()=>{
        getData();
    },[])
    // console.log(request.userid);
    return (
        <h1 style={{textAlign:'center'}}>
            Pending Requests
            <div>
                {data}
            </div>
        </h1>
    );

}
export default Pending;