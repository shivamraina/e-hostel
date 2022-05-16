import StudentLogin from "./StudentLogin";
import StudentNav from "./StudentNav";
import StudentSide from "./StudentSide";
import {useState} from 'react';
import axios from "axios";

function Complaint() {
    const [redirect, setRedirect] = useState(false);
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [complaint, setComplaint] = useState('')

    const nameH = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const mobileH = (e) => {
        e.preventDefault();
        setMobile(e.target.value);
    }

    const complaintH = (e) => {
        e.preventDefault();
        setComplaint(e.target.value)
    }   

    const submit = async (e) => {
        e.preventDefault();

        const body = {
            name, mobile, complaint
        }

        const res = await axios.post('/api/complaint', body)
        alert(res.data)
    }

    return (
        redirect? <StudentLogin />:
        <>
        <StudentNav setRedirect={setRedirect}/>
        <StudentSide />
        <main class="mt-5 pt-3">
        <div class="pt-5">
        <div class="global-container">
            <div class="card login-form">
                <div class="card-body">
                    <h3 class="card-title text-center"> COMPLAINT </h3>
                    <div class="card-text">
                        <form>


                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputCity">NAME</label>
                                    <input type="text" class="form-control" id="inputname9" onChange={nameH}/>
                                </div>
                            </div>
     
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputCity">CONTACT NUMBER</label>
                                    <input type="text" class="form-control" id="inputnumber8" onChange={mobileH}/>
                                </div>
                            </div>
                            <div class="input-group">
                                <span class="input-group-text">COMPLAINT</span>
                                <textarea class="form-control" aria-label="Reason" onChange={complaintH}></textarea>
                              </div>

                            <button type="submit" class="btn btn-primary" onClick={submit}>SUBMIT</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </main>
        </>
    );
}

export default Complaint;