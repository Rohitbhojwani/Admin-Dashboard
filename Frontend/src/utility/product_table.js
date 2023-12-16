import {useEffect, useState} from 'react';
import '../manufacturer_afterlogin.css'

const Product_table = (props) => {

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
               <h3 className='details'>
                    <span>Product Name :</span>{props.product_name}<br></br>
                    <span>Date:</span>{new Date(props.product_date * 1000).toLocaleString()}
                    <br></br>
                    <span>Reailer id:</span>{props.retailer}</h3>
                <table>
                    {
                        (loading || props.value==null) 
                            ? "loading...."
                            : (
                              <>
                              <tr><th>Location</th>{ props.value.map((n, index) => <td key={index}>{n}</td>)}</tr>
                              <tr><th>Retailer id</th>{props.retailer.map((n, index) => <td key={index}>{n}</td>)}</tr>
                              <tr><th>Quantity</th>{props.countval.map((n, index) => <td key={index}>{n}</td>)}</tr>
                              </>
                        )
                    }
                </table>
                {props.children}
            </div>
        )
        : ""
};

export default Product_table;
