import {useNavigate} from "react-router-dom";
import "../manufacturer_afterlogin.css";
import "./navbarcss/navcss.css";
import Navlogo from "../nav-logo.png"

function Home_page() {
    let navigate = useNavigate();
    const addDest = () => {
        let path = "../mfg_add_dest";
        navigate(path, {replace: true});
    };
    const dest = () => {
        let path = "../Admin_LoginSuccess";
        navigate(path, {replace: true});
    };
    const dest1 = () => {
        let path = "../Home_page";
        navigate(path, {replace: true});
    };
    const dest2 = () => {
        let path = "../manufactor_search";
        navigate(path, {replace: true});
    };
    return (
        <div>
            {/* <nav>
                <div
                    className="navibar"
                    style={{
                        backgroundColor: '#003056'
                    }}>
                    <img src={Navlogo} className="nav-logo"></img>
                    <br></br>
                    <a onClick={dest1}>HomePage</a>
                    <a onClick={dest}>Add Product</a>
                    <a onClick={addDest}>Add Destination</a>
                    <a onClick={dest2}>Search Product</a>
                    <a>About us</a>
                    <a href="/">Logout</a>
                </div>
            </nav> */}
            
            
            {/* <footer>
              <h3>
                Contact us:-
              </h3>
              <div style={{display:'flex'}}>
              <p>Email - abc@gmail.com</p>
              <p>Phone Number-123456798</p>
              </div>
            </footer> */}
        </div>
    );
}

export default Home_page;
