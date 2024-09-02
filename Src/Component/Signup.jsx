import React from 'react'
import './Signup.css';
import { Button } from '@mui/material'
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'


function SignUp() {
  return (
    <div className="Main">
       <h1>  <FaYoutube color="red" /></h1>
            <h1 id="join" style={{color:'black'}}>Join Youtube Today</h1>
            <Button id="google" sx={{color:"black", border:"2px black solid", width:"400px", height:"50px", borderRadius:"60px"}} variant="outlined">
        <FcGoogle className='googlelogo' />
        Sign up with Google
      </Button><br></br><br></br>
     
      <div className="ruler1">
            <hr /> <span>Or</span> <hr />
          </div>
      <Button id="create" sx={{ color: "black", border: "2px black solid", width: "400px", height: "50px", borderRadius: "50px" }}>

       <Link to="/singup"> Create Account </Link>

      </Button>
      <h5>By signing up, you agree to the <span style={{ color: 'blue' }}>Terms of Service</span> and <span style={{ color: 'blue' }}>Privacy Policy</span>, including <span style={{ color: 'blue' }}>Cookie Use</span>.</h5>
      <h4 className="log">Have an account already? <span style={{ color: 'blue' }}>
        <Link to="/">Log in</Link>
      </span></h4>
    </div>
  )
}

export default SignUp