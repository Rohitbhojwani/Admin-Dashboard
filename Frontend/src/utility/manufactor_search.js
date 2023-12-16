import {useRef, useState, useEffect, useContext} from "react";
import {ethers} from "ethers";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import {useNavigate} from "react-router-dom";
import Product_table from "./product_table";
import Navlogo from "../nav-logo.png"
const LOGIN_URL = "/auth";

const Manufactor_search = ({state}) => {

    const [productTable, setProductTable] = useState(false)

    const [destination, setDestination] = useState()
    const [destinationRec, setDestinationRec] = useState()
    const [count, setCount] = useState([])
    const [prod_name, setProd_name] = useState("")
    const [date, setDate] = useState("")

    const [retailerid,setretailerid]=useState("")

    let navigate = useNavigate();
    const updtprod = () => {
        let path = '../retailer_updt_prod';
        navigate(path, {replace: true});
    }
  const addDest = () => {
    let path = "../mfg_add_dest";
    navigate(path, { replace: true });
  };
  const dest = () => {
    let path = "../manufacturer_afterlogin";
    navigate(path, { replace: true });
  };
  const dest1 = () => {
    let path = "../mhome_page";
    navigate(path, { replace: true });
  };
  const dest2 = () => {
    let path = "../manufactor_search";
    navigate(path, { replace: true });
  };
    return (
        <div>
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
                <form>
                    <label htmlFor="batchid">Batch id:</label>
                    <input type="text" id="batchid" required="required"/>
                    <button onClick={() => setProductTable(true)}>Search Product</button>
                </form>
                <button onClick={updtprod}>
                    Update Product</button>
            </div>
            <Product_table
                trigger={productTable}
                setTrigger={setProductTable}
                value={destination}
                countval={count}
                product_name={prod_name}
                product_date={date}
                retailer={retailerid}></Product_table>
        </div>
    );

}
export default Manufactor_search;
