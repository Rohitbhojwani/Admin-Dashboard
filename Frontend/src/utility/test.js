const Test = () => {
    
    const jk = () => {
        const roles = {
            "Manufacturer":1000
        } 
        console.log("HELLO")
        console.log(JSON.stringify(roles))
    }
    
    return (
        
        <div>
            <button onClick={jk()}>LOL</button>
        </div>
    );
}

export default Test