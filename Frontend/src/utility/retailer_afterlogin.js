import { useRef, useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import Details from "./retail_details";
import { useNavigate } from "react-router-dom";
import Product_table from "./product_table";
import Navlogo from "../nav-logo.png"
import "./navbarcss/navcss.css";

const LOGIN_URL = "/auth";

const Retailer_afterlogin = ({ state }) => {
  const [productTable, setProductTable] = useState(false);

  const [destination, setDestination] = useState();
  const [destinationRec, setDestinationRec] = useState();
  const [count, setCount] = useState([]);
  const [prod_name, setProd_name] = useState("");
  const [date, setDate] = useState("");
  const [source, setSource] = useState("");

  let navigate = useNavigate();
  const addDest = () => {
    let path = "../mfg_add_dest";
    navigate(path, { replace: true });
  };
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
  const dest2 = () => {
    let path = "../userRequest";
    navigate(path, { replace: true });
  };

  return (
    <div>
      {/* Navbar */}
      <nav>
        <div className="navibar"
        style={{backgroundColor: '#003056', color: "white", height: "50px"}}
        >
            <a onClick={addDest}>HomePage</a>
            <a>Logs</a>
            <a>Pending requests</a>
            <a>New user</a>
            <a>Upcoming events</a>
        </div>
    </nav>
      
      <Details
        trigger={productTable}
        setTrigger={setProductTable}
        product_name={prod_name}
        product_date={date}
        source={source}
        date={date}
      ></Details>
    </div>
  );
};
export default Retailer_afterlogin;
