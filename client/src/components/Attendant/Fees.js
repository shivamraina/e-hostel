import AttendantNav from './AttendantNav';
import axios from 'axios'
import {useState} from 'react'
import AttendantLogin from './AttendantLogin';
import AttendantSide from './AttendantSide';

function Fees() {
    const [redirect, setRedirect] = useState(false);
    const [hostel, setHostel] = useState('')
    const [hostellerType, setHostellerType] = useState('')
    const [roomType, setRoomType] = useState('')
    const [cost, setCost] = useState('')

    const hostelH = (e) => {
        e.preventDefault();
        setHostel(e.target.value);
    }

    const hostellerTypeH = (e) => {
        e.preventDefault();
        setHostellerType(e.target.value);
    }

    const roomTypeH = (e) => {
        e.preventDefault();
        setRoomType(e.target.value);
    }

    const costH = (e) => {
        e.preventDefault();
        setCost(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();

        const body = {
            hostel,
            hostellerType,
            roomType,
            cost
        }

        const res = axios.post('http://localhost:5000/api/fees', body);
        alert(res.data);
    }

    return (
        redirect ? <AttendantLogin /> :
        <>
        <AttendantNav setRedirect={setRedirect}/>
        <AttendantSide />
        <main class="mt-5 pt-3">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 mb-12">
                        <div class="global-container">
                            <div class="card login-form">
                                <div class="card-body">
                                    <h3 class="card-title text-center"> FEE STRUCTURE </h3>
                                    <div class="card-text">
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="inputBlockType">HOSTEL</label>
                                                    <select id="inputBlockType" class="form-control" onChange={hostelH}>
                                                        <option selected>SHIVALIK</option>
                                                        <option selected>KALPANA CHAWLA</option>
                                                        <option selected>VINDHYA</option>
                                                        <option selected>KURUKSHETRA</option>
                                                        <option selected>ARAVALI</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <br />
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="inputhosteller">HOSTELLER TYPE</label>
                                                    <select id="inputhosteller" class="form-control" onChange={hostellerTypeH}>
                                                        <option selected>STUDENT</option>
                                                        <option selected>EMPLOYEE</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <br />
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="inputROOM">ROOM TYPE</label>
                                                    <select id="inputROOM" class="form-control" onChange={roomTypeH}>
                                                        <option selected>SINGLE OCCUPANCY</option>
                                                        <option selected>DOUBLE OCCUPANCY</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <br />
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="inputCOST">COST</label>
                                                    <input type="text" class="form-control" id="inputCOST" onChange={costH}/>
                                                </div>
                                            </div>
                                            <br />
                                            <button type="submit" class="btn btn-primary" onClick={submit}>SUBMIT</button>
                                        </form>
                                    </div>
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

export default Fees;