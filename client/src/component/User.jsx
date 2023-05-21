import React,{useState,useEffect} from 'react'
import { useHistory} from 'react-router-dom'
import {NavLink} from 'react-router-dom';
import axios from 'axios';

const  User = () => {
const [email, setEmail] = useState("")
const [login, setLogin] = useState(false)

const his=useHistory();
  axios.defaults.withCredentials = true;

  useEffect(() => {
     const checkLogin= async ()=>{
      let val= await axios.get("http://localhost:3001/login");
      setLogin(val.data.login)
      if(val.data.user)
      {
          //  console.log(val.data);
         
          setEmail(val.data.user[0].email)
      }
      else{
        his.push("/login")
      }
     }
     checkLogin();
  },[login])

  return (
    <>
    <section style={{
      backgroundColor:'royalblue',
      width:'100%',
      height:'90vh'
    }}>
     <div className="box">
      
      <h1>WELCOME TO REACT PROFILE ADMIN</h1>
      
     </div>
      <div>
      <button type="submit" className="btn btn-primary">Upload File</button>
      
      </div>
    <div>
    <NavLink to="/admin" className="nav-link text-white" >LogOut</NavLink>
    </div>
      
      </section>      
    </>
  )
}

export default User;
