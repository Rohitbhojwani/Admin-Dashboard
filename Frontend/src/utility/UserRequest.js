import React ,{useState,useEffect} from 'react';
//import { useNavigate} from 'react-router-dom';
import axios from '../api/axios';


const UserRequest = ({state}) => {

  //const history = useNavigate();
  const [user,setUser] = useState({
    state:"",userid:"",noOfTroops:"",location:"",description:""
  });


  let name,value;
  const handleInput = (e) =>{
    console.log(e);
    name = e.target.name; //stores the name attribute from the input tag. 
    value = e.target.value;

    setUser({...user, [name]:value});
  }

const PostData = async (e) =>{
  e.preventDefault();
  const {userid, noOfTroops, location, description} = user;
  console.log(user);
 

  const url="http://localhost:3500/userRequest";
  await axios.post(url, user);

}

  return (
    <>
    <div style={{display:'grid',gridTemplateColumns: '1fr 1fr'}}>  
        {/* <div >
          <img src={temp} style={{height:'450px',paddingLeft:'2rem',paddingTop:'10rem'}}/>
        </div> */}
    <div >
      <section className='signup'>
        <div className='container mt-5'>
          <div className='signup-content'>
            <div className='signup-form'>
              <h2 className='form-title' style={{paddingLeft:'0rem'}}>Send Request</h2>
              <br/>
              <form method='POST' className='register-form' id='register-form  '>

                <div className='form-group' style={{paddingLeft:'0rem',}} >
                  <label htmlFor='userid'>
                  UserID :
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="text" name="userid" id="userid" autoComplete="off"
                  value = {user.userid}
                  onChange ={handleInput}
                  placeholder='your UserID '
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }} />
                </div>
                <br/>
                 <div className='form-group' style={{paddingRight:'1rem'}}>
                  <label htmlFor='noOfTroops'>
                  Number of Troops :
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="text" name="noOfTroops" id="noOfTroops" autoComplete="off"
                  value = {user.noOfTroops}
                  onChange ={handleInput}
                  placeholder='Number of Troops'/>
                </div> 
                <br/>
                <div className='form-group' style={{paddingRight:'2rem'}}>
                  <label htmlFor='location'>
                 Location :
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="text" name="location" id="location" autoComplete="off"
                  value = {user.location}
                  onChange ={handleInput}
                  placeholder='Your Location'/>
                </div>
                <br/>
                <div className='form-group'>
                  <label htmlFor='description'>
                  Description :
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="text" name="description" id="description" autoComplete="off"
                  value = {user.description}
                  onChange ={handleInput}
                  placeholder='Description'/>
                </div>
                <div className='form-group form-button'>
                  <input type="submit" name="signup" id="signup" className="form-submit" value="register" onClick={PostData}></input>
                </div>
                <br/>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
      </div>
    </>

  )
}

export default UserRequest 