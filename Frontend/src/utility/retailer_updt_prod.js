import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import '../manufacturer_afterlogin.css'
import "./navbarcss/navcss.css";
import Navlogo from "../nav-logo.png"

const LOGIN_URL = "/auth";


const Retailer_updt_prod = ({state}) => {

let navigate = useNavigate();
const updtprod = () => {
  let path = "../RHome_page";
  navigate(path, { replace: true });
};
const dest1 = () => {
  let path = "../retailer_updt_prod";
  navigate(path, { replace: true });
};
const dest = () => {
  let path = "../Ret_LoginSuccess";
  navigate(path, { replace: true });
};
    
  return (
    <div>
    {/* Navbar */}
    <nav>
        <div className="navibar"style={{
                        backgroundColor: '#003056'
                    }}>
                    <img src={Navlogo} className="nav-logo"></img>
          <a onClick={updtprod}>HomePage</a>
          <a onClick={dest}>Search Product</a>
          <a onClick={dest1}>Update Product</a>
          <a href="/">Logout</a>
        </div>
      </nav>
      <div className="form-div">
           <form>
              <label htmlFor="batchid">Batch id:</label>
              <input
                type="text"
                id="batchid"
                //ref={batchidRef}
                //autoComplete="off"
                //onChange={(e) => setBatchid(e.target.value)}
                //value={batchid}
                required
              />
              <label htmlFor="retailerid">Retailer id:</label>
          <input
            type="text"
            id="retailerid"
            //ref={batchidRef}
            //autoComplete="off"
            //onChange={(e) => setBatchid(e.target.value)}
            //value={batchid}
            required
          />
              <label htmlFor="location">Location :</label>
              <input
                type="text"
                id="location"
                // onChange={(e) => setLocation(e.target.value)}
                // value={location}
                required
              />
              <label htmlFor="item_count">Item Count:</label>
              <input
                type="number"
                id="item_count"
                // onChange={(e) => setItem_count(e.target.value)}
                // value={item_count}
                required
              />
              <button
              type="submit"
              className="btn btn-primary"
              disabled={!state.contract}
            >
              Update Product
            </button>
  
           
            </form>
      </div>
      </div>
  );
  };
export default Retailer_updt_prod
