import AttendantNav from "./AttendantNav";
import AttendantLogin from "./AttendantLogin";
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import AttendantSide from "./AttendantSide";
import axios from "axios";

function HostelDetails() {
    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState([])
    useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        const res = await axios.get('/api/bookhostel');
        setUser(res.data)
    }

    return (
        redirect ? <AttendantLogin /> :
        <>
        <AttendantNav setRedirect={setRedirect}/>
        <AttendantSide />
    <main class="mt-5 pt-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h4>HOSTELLER RECORD</h4>
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
                            <table id="example" class="table table-striped data-table">
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        <th>SID</th>
                                        <th>EMAIL ID</th>
                                        <th>DOB</th>
                                        <th>FATHER NAME</th>
                                        <th>ADDRESS</th>
                                        <th>CONTACT NUMBER</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        user!==undefined ? user.map(u => 
                                            <tr>
                                                <td>{u.name}</td>
                                                <td>{u.sid}</td>
                                                <td>{u.email}</td>
                                                <td>{u.dob}</td>
                                                <td>{u.fatherName}</td>
                                                <td>{u.city}</td>
                                                <td>{u.mobile}</td>
                                                </tr>)
                                    :null
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

export default HostelDetails;