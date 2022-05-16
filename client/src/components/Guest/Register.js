import React,  {useState, useEffect, useContext } from "react";
import axios from 'axios'
import Navbar from "../Home/Navbar";

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const nameHandler = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const emailHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const passwordHandler = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const confirmPasswordHandler = (e) => {
        e.preventDefault();
        setConfirmPassword(e.target.value);
    }

    const register = async (e) => {
        e.preventDefault();
        const body = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }

        const res = await axios.post('http://localhost:5000/api/guest/reg', body);
        alert(res.data)
    }


    return (
        <React.Fragment>
        <Navbar/>
    <div class="pt-5">
        <div class="global-container">
        <div class="card login-form">
            <div class="card-body">
            <h3 class="card-title text-center"> Guest Registration </h3>
            <div class="card-text">
                <form>
                <div class="form-row">
                    <div class="form-group col-md-12">
                    <label for="inputName4">Name</label>
                    <input type="text" class="form-control" id="inputName4" placeholder="Enter your Name" onChange={nameHandler} />
                    </div>
                </div>
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
                <div class="form-row">
                    <div class="form-group col-md-12">
                    <label for="inputCPassword4">Confirm Password</label>
                    <input type="password" class="form-control" id="inputCPassword4" onChange={confirmPasswordHandler}/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary col-md-12" onClick={register}>Register as Guest</button>
                </form>
            </div>
            </div>
            </div>
        </div></div>
    
        </React.Fragment>
    )
}

export default Register