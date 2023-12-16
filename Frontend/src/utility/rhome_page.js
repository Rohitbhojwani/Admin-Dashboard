import {useNavigate} from "react-router-dom";
import "../manufacturer_afterlogin.css";
import "./navbarcss/navcss.css";
import Navlogo from "../nav-logo.png"

function RHome_page() {
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
            
            
            
        </div>
    );
}

export default RHome_page;
