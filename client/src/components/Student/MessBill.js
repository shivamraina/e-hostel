import StudentLogin from "./StudentLogin";
import StudentNav from "./StudentNav";
import StudentSide from "./StudentSide";
import {useState} from 'react';

function MessBill() {
    const [redirect, setRedirect] = useState(false);
    
    return (
        redirect? <StudentLogin />:
        <>
        <StudentNav setRedirect={setRedirect}/>
        <StudentSide />
        <main class="mt-5 pt-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h4>VIEW MESS BILL</h4>
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
                                        <th>NAME</th>
                                        <th>CONTACT NUMBER</th>
                                        <th>TOTAL MESS BILL</th>
                                        <th>INVOICE DATE</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>BTECH</td>
                                        <td>GARRETT</td>
                                        <td>3356945566</td>
                                        <td>2000</td>
 
                                        <td>6-02-2022</td>
                                    </tr>



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

export default MessBill;