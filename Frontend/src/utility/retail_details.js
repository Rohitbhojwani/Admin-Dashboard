import {useEffect, useState} from 'react';
import '../manufacturer_afterlogin.css'

const Details = (props) => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])
    return (props.trigger)
        ? (
            <div className='form-div'>
            <h2 style={{padding:"0.2rem"}}>Product Details</h2>
            <hr></hr>
            <p> <span>Product_name: </span>{props.product_name}</p>
            <p><span>Product Source:</span> {props.source}</p>
            <p><span>Product Manufactoring date:</span> {new Date(props.date  * 1000).toLocaleString()}</p>
                {props.children}
            </div>
        )
        : ""
};

export default Details;
