import {useRef, useState, useEffect, useContext} from "react";
import {ethers} from "ethers";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import {useNavigate} from "react-router-dom";
import "../manufacturer_afterlogin.css";
import Scanner from "../utility/scanner"
import Customer_table from "./customer_table";

const LOGIN_URL = "/auth";

const Customer_afterlogin = ({state}) => {

    const [productTable, setProductTable] = useState(false)

    const [destination, setDestination] = useState()
    const [destinationRec, setDestinationRec] = useState()
    const [count, setCount] = useState([])
    const [prod_name, setProd_name] = useState("")
    const [date, setDate] = useState("")
    const [source,setSource]=useState("")
    const [retailerid,setretailerid]=useState("")
    const [validretailerid,setvalidretailerid]=useState("")

    let navigate = useNavigate();
    const addDest = () => {
        let path = "/Home_page";
        navigate(path, {replace: true});
    };
    return (
        <div>
            <nav>
                <div className="navibar">
                    <a onClick={addDest}>HomePage</a>
                    <a href="../Cust_Loginsuccess">Search Product</a>
                    <a href="#">About us</a>
                    <a href="/">User Selection</a>
                </div>
            </nav>
            <Scanner/>
            <div className="form-div">
                <form>
                    <label htmlFor="batchid">Batch id:</label>
                    <input type="text" id="batchid" required="required"/>
                    <button onClick={() => setProductTable(true)}>Search Product</button>
                </form>
                <hr></hr>
                <Customer_table
                    trigger={productTable}
                    setTrigger={setProductTable}
                    value={destination}
                    countval={count}
                    product_name={prod_name}
                    product_date={date}
                    destinationRec={destinationRec}
                    source={source}
                    retailer={retailerid}
                    validretailer={validretailerid}>
                </Customer_table>
            </div>
        </div>
    );

};
export default Customer_afterlogin;
