import Navbar from "../Home/Navbar";
import {useState} from 'react'
import axios from "axios";

function StudentRegister() {

    const [studentType, setStudentType] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [sid, setSid] = useState('')
    const [branch, setBranch] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [pincode, setPincode] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [motherName, setMotherName] = useState('')
    const [dob, setDob] = useState('')
    const [jee, setJee] = useState('')
    const [percent12, setPercent12] = useState('')
    const [percent10, setPercent10] = useState('')
    const [mobile, setMobile] = useState('')


    const studentTypeHandler = (e) => {
        e.preventDefault();
        setStudentType(e.target.value)
    }

    const nameHandler = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }

    const emailHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }

    const sidHandler = (e) => {
        e.preventDefault();
        setSid(e.target.value)
    }

    const branchHandler = (e) => {
        e.preventDefault();
        setBranch(e.target.value)
    }

    const addressHandler = (e) => {
        e.preventDefault();
        setAddress(e.target.value)
    }

    const cityHandler = (e) => {
        e.preventDefault();
        setCity(e.target.value)
    }

    const stateHandler = (e) => {
        e.preventDefault();
        setState(e.target.value)
    }

    const pincodeHandler = (e) => {
        e.preventDefault();
        setPincode(e.target.value)
    }

    const dobHandler = (e) => {
        e.preventDefault();
        setDob(e.target.value)
    }

    const jeeHandler = (e) => {
        e.preventDefault();
        setJee(e.target.value)
    }

    const percent12Handler = (e) => {
        e.preventDefault();
        setPercent12(e.target.value)
    }

    const percent10Handler = (e) => {
        e.preventDefault();
        setPercent10(e.target.value)
    }

    const mobileHandler = (e) => {
        e.preventDefault();
        setMobile(e.target.value)
    }

    const fatherHandler = (e) => {
        e.preventDefault();
        setFatherName(e.target.value)
    }

    const motherHandler = (e) => {
        e.preventDefault();
        setMotherName(e.target.value)
    }

    const register = async (e) => {
        e.preventDefault();
        const body = {
            studentType, name, email, password, sid, branch, address, city, state, pincode, fatherName, motherName, dob, jee, percent12, percent10, mobile
        }

        const res = await axios.post('/api/student/reg', body);
        alert(res.data)
    }

    return(
        <>
        <Navbar />
        <div class="pt-5">  
            <div class="global-container">  
                <div class="card login-form">  
                <div class="card-body">  
                    <h3 class="card-title text-center"> Hosteller Registration Panel </h3>  
                    <div class="card-text">
            <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputHostellerType">Hosteller Type</label>
                <select id="inputHostellerType" class="form-control" onChange={studentTypeHandler}>
                    <option selected>Student</option>
                    <option>Others</option>
                </select>
                </div>
                <div class="form-group col-md-6">
                <label for="inputName4">Name</label>
                <input type="text" class="form-control" id="inputName4" placeholder="Enter your Name" onChange={nameHandler}/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputEmail4">Email ID</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Enter your Email Address" onChange={emailHandler}/>
                </div>
                <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Enter your Password" onChange={passwordHandler}/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputEmail4">Student ID</label>
                <input type="number" class="form-control" id="inputEmail44" placeholder="Enter your SID" onChange={sidHandler}/>
                </div>
                <div class="form-group col-md-6">
                <label for="inputPassword44">Branch</label>
                <input type="text" class="form-control" id="inputPassword44" placeholder="Enter your Branch" onChange={branchHandler}/>
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" onChange={addressHandler}/>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" onChange={cityHandler}/>
                </div>
                <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control" onChange={stateHandler}>
                    <option selected>Uttar Pradesh</option>
                    <option>Bihar</option>
                    <option>Rajasthan</option>
                    <option>New Delhi</option>
                    <option>Jharkhand</option>
                    <option>Goa</option>
                    <option>Jammu and Kashmir</option>
                    <option>Punjab</option>
                    <option>Haryana</option>
                    <option>Karnataka</option>
                    <option>Himachal Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>Andhra Pradesh</option>
                    <option>Tamil Nadu</option>
                    <option>Assam</option>
                    <option>Kerala</option>
                    <option>Manipur</option>
                    <option>Nagaland</option>
                    <option>Madhya Pradesh</option>
                    <option>Chattisgarh</option>
                    <option>Gujarat</option>
                    <option>Orissa</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Telangana</option>
                    <option>West Bengal</option>
                    <option>Maharashtra</option>
                    <option>Out of India</option>
                </select>
                </div>
                <div class="form-group col-md-2">
                <label for="inputZip">PIN Code</label>
                <input type="text" class="form-control" id="inputZip"onChange={pincodeHandler} />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputFatherName4">Father's Name</label>
                <input type="text" class="form-control" id="inputFatherName4" placeholder="Father's Name" onChange={fatherHandler}/>
                </div>
                <div class="form-group col-md-6">
                <label for="inputMotherName4">Mother's Name</label>
                <input type="text" class="form-control" id="inputMotherName4" placeholder="Mother's Name" onChange={motherHandler}/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label class="control-label" for="dateOfBirth">Date of Birth</label>
                    <input class="form-control" id="dateOfBirth" name="date"  placeholder="MM/DD/YYYY" type="date" onChange={dobHandler}/>
                </div>
                <div class="form-group col-md-6">
                <label for="inputJEEScore">JEE Score</label>
                <input type="number" class="form-control" min="-300" max="300" id="inputJEEScore" onChange={jeeHandler}/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="input12Percentage">Class 12th Percentage</label>
                <input type="number" class="form-control" min="0" max="100" id="input12Percentage" onChange={percent12Handler}/>
                </div>
                <div class="form-group col-md-6">
                <label for="input10Percentage">Class 10th Percentage</label>
                <input type="number" class="form-control" min="0" max="100" id="input10Percentage" onChange={percent10Handler}/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputMobileNumber">Mobile Number</label>
                <input type="tel" class="form-control" id="input12MobileNumber" pattern="((\+)((0[ -])|((91 )))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}" onChange={mobileHandler}/>
                </div>
            </div>
            <button type="submit" class="btn btn-primary" onClick={register}>Click here to Register</button>
            </form>   
                </div>  
                </div>  
            </div>  
        </div>
        </div>
    </>
    );
}

export default StudentRegister;