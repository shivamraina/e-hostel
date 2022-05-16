import AttendantNav from './AttendantNav';
import {Link} from 'react-router-dom'
import {useState} from 'react'
import AttendantLogin from './AttendantLogin';
import AttendantSide from './AttendantSide';

function AttendantDashboard() {
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
                <h4>Dashboard</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <div class="card bg-primary text-white h-100">
                  <div class="card-body py-5">ROOM RECORDS</div>
                  <p>88<br /></p>
                  <div class="card-footer d-flex">

                    <a class="btn btn-primary" href="roomrecord.html" role="button">VIEW DETAILS</a>
                    <span class="ms-auto">
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="card bg-warning text-dark h-100">
                  <div class="card-body py-5">HOSTELLER RECORDS</div>
                  <p>100<br /></p>
                  <div class="card-footer d-flex">
                    <a class="btn btn-primary" href="hostellerrecord.html" role="button">VIEW DETAILS</a>
                    <span class="ms-auto">
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="card bg-primary text-white h-100">
                  <div class="card-body py-5">EMPLOYEE RECORDS</div>
                  <p>25<br /></p>
                  <div class="card-footer d-flex">
                    <a class="btn btn-primary" href="empdetails.html" role="button">VIEW DETAILS</a>
                    <span class="ms-auto">
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="card bg-success text-white h-100">
                  <div class="card-body py-5">COMPLAINT RECORDS</div>
                  <p>5<br /></p>
                  <div class="card-footer d-flex">
                    <a class="btn btn-primary" href="complaint.html" role="button">VIEW DETAILS</a>
                    <span class="ms-auto">
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="card bg-warning text-dark h-100">
                  <div class="card-body py-5">ADD EVENT</div>
                  <p>5<br /></p>
                  <div class="card-footer d-flex">
                    <a class="btn btn-primary" href="event.html" role="button">VIEW DETAILS</a>
                    <span class="ms-auto">
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="card bg-danger text-white h-100">
                  <div class="card-body py-5">GUEST RECORDS</div>
                  <p>5<br /></p>
                  <div class="card-footer d-flex">
                    <a class="btn btn-primary" href="guestrecord.html" role="button">VIEW DETAILS</a>
                    <span class="ms-auto">
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="card bg-success text-white h-100">
                  <div class="card-body py-5">ADD FEE STRUCTURE</div>
                  <p>5<br /></p>
                  <div class="card-footer d-flex">
                    <a class="btn btn-primary" href="feestruct.html" role="button">VIEW DETAILS</a>
                    <span class="ms-auto">
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </main>
        </>
    );
}

export default AttendantDashboard