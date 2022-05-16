import StudentLogin from "./StudentLogin";
import StudentNav from "./StudentNav";
import StudentSide from "./StudentSide";
import {useState} from 'react';

function LeaveApplication() {
    const [redirect, setRedirect] = useState(false);
    
    return (
        redirect? <StudentLogin />:
        <>
        <StudentNav setRedirect={setRedirect}/>
        <StudentSide />
        <main class="mt-5 pt-3">
        <div class="container-fluid">
        <div class="pt-5">
        <div class="global-container">
            <div class="card login-form">
                <div class="card-body">
                    <h3 class="card-title text-center"> LEAVE APPLICATION</h3>
                    <div class="card-text">
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputname7">NAME</label>
                                    <input type="text" class="form-control" id="inputname7" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputsid">SID</label>
                                    <input type="text" class="form-control" id="inputsid" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputMobileNumber1">Mobile Number</label>
                                    <input type="tel" class="form-control" id="input12MobileNumber1"
                                        pattern="((\+)((0[ -])|((91 )))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputBlockType">BLOCK</label>
                                    <select id="inputBlockType" class="form-control">
                                        <option selected>SHIVALIK</option>
                                        <option selected>KALPANA CHAWLA</option>
                                        <option selected>KURUKSHETRA</option>
                                        <option selected>ARAVALI</option>
                                        <option selected>Vindhya Hostel</option>
                                        <option selected>Himalaya Hostel</option>


                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputroom2">ROOM NO</label>
                                    <input type="text" class="form-control" id="inputroom2" />
                                </div>
                            </div>

                            <div class="input-group col-md-4 mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">FROM DATE</div>
                                </div>
                                <input type="date" name="bday" max="3000-12-31" min="1000-01-01" class="form-control"
                                    />

                            </div>
                            <div class="input-group col-md-4 mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">TO DATE</div>
                                </div>
                                <input type="date" name="bday" max="3000-12-31" min="1000-01-01" class="form-control"
                                    />

                            </div>
                            <div class="input-group">
                                <span class="input-group-text">Reason</span>
                                <textarea class="form-control" aria-label="Reason"></textarea>
                            </div>



                            <button type="submit" class="btn btn-primary">SUBMIT</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </main>
        </>
    );
}

export default LeaveApplication;