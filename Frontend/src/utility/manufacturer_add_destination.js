import { useRef, useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import "./navbarcss/navcss.css";
import Navlogo from "../nav-logo.png"

const LOGIN_URL = "/auth";

const Manufacturer_add_destination = ({ state }) => {

   const clear_filed=()=> {
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
      );
    };
   let navigate = useNavigate();
   const addAnotherDest = () => {
     let path = "../mfg_add_dest";
     navigate(path, { replace: true });
   };
   const search_product = () => {
     let path = "../manufactor_search";
     navigate(path, { replace: true });
   };
   const addDest = () => {
     let path = "../mfg_add_dest";
     navigate(path, { replace: true });
   };
   const dest = () => {
     let path = "../Admin_LoginSuccess";
     navigate(path, { replace: true });
   };
   const dest1 = () => {
     let path = "../mHome_page";
     navigate(path, { replace: true });
   };
   const dest2 =()=>{
     let path = "../manufactor_search";
     navigate(path, { replace: true });
  }
  
  return (
    <div>
      {/* Navbar */}
      <nav>
        <div className="navibar" style={{
                        backgroundColor: '#003056'
                    }}>
                    <img src={Navlogo} className="nav-logo"></img>
          <a onClick={dest1}>HomePage</a>
          <a onClick={dest}>Add Product</a>
          <a onClick={addDest}>Add Destination</a>
          <a onClick={dest2}> Search Product</a>
          <a href="#">About us</a>
          <a href="/">Logout</a>
        </div>
      </nav>

      <div className="form-div">
        <form required>
          <label htmlFor="batchid">Batch id:</label>
          <input
            type="text"
            id="batchid"
            required
          />
          <label htmlFor="retailerid">Retailer id:</label>
          <input
            type="text"
            id="retailerid"
            required
          />
          <label htmlFor="location">Location :</label>
          <input
            type="text"
            id="location"
            required
          />
          <label htmlFor="item_count">Item Count:</label>
          <input
            type="number"
            id="item_count"
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Add Destination
          </button>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
            onClick={clear_filed}
          >
            Add Another Destination
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
            onClick={search_product}
          >
            Search Product
          </button>
        </form>
      </div>
    </div>
  );

};
export default Manufacturer_add_destination;
