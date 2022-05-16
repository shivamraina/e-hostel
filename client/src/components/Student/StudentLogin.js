import Navbar from "../Home/Navbar";
import {useState} from 'react'
import axios from "axios";
import history from "../../history";
import StudentDash from "./StudentDash";


function StudentLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const emailHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }

    const login = async (e) => {
        e.preventDefault();
        const body = {
            email, password
        }

        const res = await axios.post('http://localhost:5000/api/student/login', body);
        console.log(res.data)
        if(res.status === 200) {
            history.push('StudentDash')
            setRedirect(true)
        }
    }

    return(
        redirect? <StudentDash />:
        <>
        <Navbar />
        <div class="pt-5">
        <div class="global-container">
            <div class="card login-form">
                <div class="card-body">
                    <h3 class="card-title text-center"> Hosteller Login Portal </h3>
                    <div class="card-text">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1"> Email ID </label>
                                <input type="email" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" onChange={emailHandler}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password </label>
                                <input type="password" class="form-control form-control-sm" id="exampleInputPassword1" onChange={passwordHandler}/>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block" onClick={login}> Click here to Login </button>

                            <div class="sign-up">
                                Don't have an account? <a href="/Student/Register"> Create One </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
    );
}

export default StudentLogin;