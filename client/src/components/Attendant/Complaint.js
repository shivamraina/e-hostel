import AttendantNav from "./AttendantNav";
import AttendantLogin from "./AttendantLogin";
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import AttendantSide from "./AttendantSide";
import axios from "axios";

function Gallery() {
    const [redirect, setRedirect] = useState(false);
    const [complaints, setComplaints] = useState([]);


    useEffect(()=>{
      getData();
    }, [])

    const getData = async() => {
      const res = await axios.get('http://localhost:5000/api/complaint')
      setComplaints(res.data);
    }

    return (
        redirect ? <AttendantLogin /> :
        <>
        <AttendantNav setRedirect={setRedirect}/>
       <AttendantSide />
  <main class="mt-5 pt-3">
        <div class="container-fluid">
            <div class="row">
  
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 mb-3">
                <div class="card">
                    <div class="card-header">
                        <span><i class="bi bi-table me-2"></i></span> Data Table
                    </div>
                    <h4 class="card-title">COMPLAINTS</h4>
                    <div class="table-responsive">
                        <table class="table table-bordered border-primary">
                            <thead>
                                <tr>
                                    <th> Assignee </th>
                                    <th> Complaint </th>
                                    <th> Status </th>
                            
                                </tr>
                            </thead>
                            <tbody>
                              {complaints!== undefined ? complaints.map(c => 
                                <tr>
                                <td>
                                    {c.name}
                                </td>

                                <td> {c.complaint} </td>
                                <td>
                                    <label class="badge bg-danger">{c.status}</label>
                                </td>
                            </tr>
                                ) :null}
                                
                                
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </main>
        </>
    );
}

export default Gallery;