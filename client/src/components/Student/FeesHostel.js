import StudentLogin from "./StudentLogin";
import StudentNav from "./StudentNav";
import StudentSide from "./StudentSide";
import {useEffect, useState} from 'react';
import axios from "axios";

function FeesHostel() {
    const [redirect, setRedirect] = useState(false);
    
    const [fees, setFees] = useState();

    useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        const res = await axios.get('http://localhost:5000/api/fees')
        setFees(res.data)
    }

    return (
        redirect? <StudentLogin />:
        <>
        <StudentNav setRedirect={setRedirect}/>
        <StudentSide />
        <main class="mt-5 pt-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h4>VIEW HOSTEL FEES</h4>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 mb-3">
                <div class="card">
                    <div class="card-header">
                        <span><i class="bi bi-table me-2"></i></span> Data Table
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="example" class="table table-striped data-table" style={{width: "100%"}}>
                                <thead>
                                    <tr>
                                        <th>HOSTELLER TYPE</th>
                                        <th>HOSTEL NAME</th>
                                        <th>COST</th>
                                        <th>ROOM TYPE</th>
                                        <th>ROOM NO</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {fees !== undefined ?
                                        <tr>
                                            <td>{fees.hostellerType}</td>
                                            <td>{fees.hostel}</td>
                                            <td>{fees.cost}</td>
                                            <td>{fees.roomType}</td>
                                            <td>{Math.floor(Math.random() * 300)+100}</td>
                                        </tr> : null
                                    }
                                </tbody>
                               
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </main>
        </>
    );
}

export default FeesHostel;