import React,  {useState} from "react";
import axios from 'axios'
import Navbar from "../Home/Navbar";
import GuestDash from "./GuestDash";
import history from "../../history";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const emailHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const passwordHandler = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }
    
    const login = async (e) => {
        e.preventDefault();
        const body = {
            email: email,
            password: password,
        }

        const res = await axios.post('/api/guest/login', body);
        console.log(res.data)
        if(res.status === 200) {
            history.push('GuestDash')
            setRedirect(true)
        }
    }


    return (
        redirect ? <GuestDash />:

        <React.Fragment>
        <Navbar/>
    <div class="pt-5">
        <div class="global-container">
        <div class="card login-form">
            <div class="card-body">
            <h3 class="card-title text-center"> Guest Login </h3>
            <div class="card-text">
            <form>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputEmail4">Email ID</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Enter your Email Address" onChange={emailHandler}/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputPassword4">Password</label>
                  <input type="password" class="form-control" id="inputPassword4" onChange={passwordHandler}/>
                </div>
              </div>
              <button type="submit" class="btn btn-primary col-md-12" onClick={login}>Click here to Login</button>
            </form>
            </div>
            </div>
            </div>
        </div></div>
    
        </React.Fragment>
    )
}

export default Login