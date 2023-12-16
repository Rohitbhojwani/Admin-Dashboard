// import './css/Scanner.css';
import React, {useRef, useState} from "react";
// import QrReader from "react-qr-reader" 
import QrScanner from 'qr-scanner';

function Scanner() {
  const [data, setData] = useState(null);
  const [file,setFile]=useState(null) 
  const fileRef=useRef()
  const onScanFile=()=>{
    fileRef.current.click()
  }
  const handleChange=async(e)=>{
    const file=e.target.files[0]
    setFile(file)
    const result = await QrScanner.scanImage(file)
    setData(result)
  }
    return (
        <div className="Image form-div">
            <input type='file' accept='.png,.jpg,.jpeg'
            ref={fileRef}
            onChange={(handleChange
            )}></input>
            <div className='qr-code'>
              {file && (<img src={URL.createObjectURL(file)} alt='QR Code'></img>)}
            </div>
            <h2>Scanned Code: {data}</h2>
        </div>
    );
}
export default Scanner;