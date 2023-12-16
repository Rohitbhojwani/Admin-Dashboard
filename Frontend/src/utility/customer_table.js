import {useEffect, useState} from 'react';
import '../manufacturer_afterlogin.css'

const Customer_table = (props) => {

    const [loading, setLoading] = useState(false)
    const [checkloading, setCheckloading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setCheckloading(true)
        setTimeout(() => {
            setLoading(false)
            setCheckloading(false)
        }, 5000)
    }, [])
    return (props.trigger)
        ? (
            <div className='product_table'>
                <h3 className='details'>
                    <span>Product Name :</span>{props.product_name}<br></br>
                    <span>Date:</span>{new Date(props.product_date * 1000).toLocaleString()}
                    <br></br>
                    <span>Source:</span>{props.source}
                    </h3>
                <hr></hr>
                <p
                    style={{
                        textAlign: 'center',
                        fontSize: '1.4rem'
                    }}>Destination Distributed</p>
                <table>
                    {
                        (loading || props.value == null)
                            ? "loading...."
                            : (<> < tr > <th>Location</th>
                                {
                                props
                                    .value
                                    .map((n, index) => <td key={index}>{n}</td>)
                            }</tr> < tr > <th>Quantity</th>

                                {
                                props
                                    .countval
                                    .map((n, index) => <td key={index}>{n}</td>)
                            }</tr> 
                            < tr > <th>Vaild Reailer id</th>
                                {
                                props
                                    .retailer
                                    .map((n, index) => <td key={index}>{n}</td>)
                            }</tr> 
                            </>
                        )
                    }
                </table>
                <p
                    style={{
                        textAlign: 'center',
                        fontSize: '1.4rem'
                    }}>Destination Received</p>
                <table>
                    {
                        (loading || props.destinationRec == null)
                            ? "loading...."
                            : (<> < tr > <th>Location</th>
                                {
                                props
                                    .destinationRec
                                    .map((n, index) => <td key={index}>{n}</td>)
                            }</tr> 
                            < tr > <th>Retailer id</th>

                                {
                                props
                                    .validretailer
                                    .map((n, index) => <td key={index}>{n}</td>)
                            }</tr>
                             </>)
                    }
                </table>
                <section>
                    {
                        (checkloading || props.value == null || props.retailer==null )
                            ? "loading...."
                            : <> {
                                props
                                    .retailer
                                    .map((val,index) => {
                                        if (props.validretailer.indexOf(val) === -1) {
                                            return (
                                                <p>{val} with {props.value[index]}&nbsp;
                                                    is not present in the Supply Chain, therefore it is counterfit product</p>
                                            )
                                        }
                                        else{
                                            <h2>askdjnasdjk</h2>
                                           {/* props.validretailer.map((val)=>{
                                            if (props.retailer.indexOf(val) === -1) {
                                            return (
                                                <p>{val}&nbsp;
                                                    is not present in the distributed system, therefore it is counterfit product</p>
                                            )
                                            }
                                           })  */}
                                        }
                                    })
                            }</>
                    }
                </section>

                {props.children}
            </div>
        )
        : ""

};

export default Customer_table;
