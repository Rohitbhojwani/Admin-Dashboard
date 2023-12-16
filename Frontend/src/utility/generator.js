import {useState} from 'react';
import '../manufacturer_afterlogin.css'

const Generator = (props) => {

  return (props.trigger)?
    (<div className='generator'>

      <h2>Download Your QR-CODE</h2>
          <img src={'http://api.qrserver.com/v1/create-qr-code/?data=' + props.value + '&size=100x100'} />
          <button onClick={()=>{props.setTrigger(false)}}> Close the Box</button>
          {props.children}
    </div>):""
};

export default Generator;
