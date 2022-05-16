import AttendantNav from "./AttendantNav";
import AttendantLogin from "./AttendantLogin";
import {useState} from 'react'
import { Link } from "react-router-dom";
import AttendantSide from "./AttendantSide";

function EmployeeDetails() {
    const [redirect, setRedirect] = useState(false);

    return (
        redirect ? <AttendantLogin /> :
        <>
        <AttendantNav setRedirect={setRedirect}/>
        <AttendantSide />
  <main class="mt-5 pt-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h4>EMPLOYEE RECORDS</h4>
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
                      
                                        <th>EMPLOYEE NAME</th>
                                        <th>DESIGNATION</th>
                                        <th>GENDER</th>
                                        <th>CONTACT NUMBER</th>
                                        <th>STATUS</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>MALE</td>
                                    <td>6389988</td>
                                    <td>ACTIVE</td>
                                    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                                    <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>MALE</td>
                                    <td>6389988</td>
                                    <td>ACTIVE</td>
                                    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                                    <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>MALE</td>
                                    <td>6389988</td>
                                    <td>ACTIVE</td>
                                    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                                    <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>MALE</td>
                                    <td>6389988</td>
                                    <td>ACTIVE</td>
                                    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                                    <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>MALE</td>
                                    <td>6389988</td>
                                    <td>ACTIVE</td>
                                    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                                    <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>MALE</td>
                                    <td>6389988</td>
                                    <td>ACTIVE</td>
                                    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                                    <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>MALE</td>
                                    <td>6389988</td>
                                    <td>ACTIVE</td>
                                    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                                    <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>MALE</td>
                                    <td>6389988</td>
                                    <td>ACTIVE</td>
                                    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                                    <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>MALE</td>
                                    <td>6389988</td>
                                    <td>ACTIVE</td>
                                    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                                    <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>MALE</td>
                                    <td>6389988</td>
                                    <td>ACTIVE</td>
                                    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                                    <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>MALE</td>
                                    <td>6389988</td>
                                    <td>ACTIVE</td>
                                    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                                    <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>MALE</td>
                                    <td>6389988</td>
                                    <td>ACTIVE</td>
                                    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                                    <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>MALE</td>
                                    <td>6389988</td>
                                    <td>ACTIVE</td>
                                    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                                    <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>MALE</td>
                                    <td>6389988</td>
                                    <td>ACTIVE</td>
                                    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                                    <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
                                </tr>

                                </tbody>
                                <tfoot>
                                    <tr>
                                        
                                        <th>EMPLOYEE NAME</th>
                                        <th>DESIGNATION</th>
                                        <th>GENDER</th>
                                        <th>CONTACT NUMBER</th>
                                        <th>STATUS</th>
                                        <th>ACTION</th>
                                        
                                    </tr>
                                </tfoot>
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

export default EmployeeDetails;