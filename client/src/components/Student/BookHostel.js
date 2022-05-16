import StudentLogin from "./StudentLogin";
import StudentNav from "./StudentNav";
import StudentSide from "./StudentSide";
import {useState} from 'react';
import axios from "axios";

function BookHostel() {
    const [redirect, setRedirect] = useState(false);
    const [name, setName] = useState('');

    const nameHandler = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const submit = async (e) =>{
        e.preventDefault();
        const body = {name};
        const res = await axios.post('/api/bookhostel', body);
        alert(res.data);
    }
    
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
                        <h3 class="card-title text-center"> BOOK HOSTEL </h3>
                        <div class="card-text">
                            <form>
                            <div class="input-group col-md-4 mb-2 mr-sm-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">Name </div>
                                    </div>
                                    <input class="form-control" onChange={nameHandler}/>
                            
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputBlockType1">BLOCK</label>
                                        <select id="inputBlockType1" class="form-control">
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
                                        <label for="inputhosteller2">HOSTELLER TYPE</label>
                                        <select id="inputhosteller2" class="form-control">
                                            <option selected>BTECH</option>
                                            <option selected>MTECH</option>
                                            <option selected>PHD</option>


                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputROOM1">ROOM TYPE</label>
                                        <select id="inputROOM1" class="form-control">
                                            <option selected>SINGLE OCCUPANCY</option>
                                            <option selected>DOUBLE OCCUPANCY</option>


                                        </select>
                                    </div>
                                </div>

                                <div class="input-group col-md-4 mb-2 mr-sm-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">JOINING DATE</div>
                                    </div>
                                    <input type="date" name="bday" max="3000-12-31" min="1000-01-01" class="form-control" />
                            
                                </div>
                                <div class="input-group col-md-4 mb-2 mr-sm-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">END DATE</div>
                                    </div>
                                    <input type="date" name="bday" max="3000-12-31" min="1000-01-01" class="form-control" />
                            
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputSTATUS1">FOOD TYPE</label>
                                        <select id="inputSTATUS1" class="form-control">
                                            <option selected>VEG</option>
                                            <option selected>NON VEG</option>


                                        </select>
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary" onClick={submit}>SUBMIT</button>

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

export default BookHostel;