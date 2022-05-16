import { Link } from "react-router-dom";
function AttendantSide() {
    return (
        <div class="offcanvas offcanvas-start sidebar-nav bg-dark" tabIndex="-1" id="sidebar">
          <div class="offcanvas-body p-0">
            <nav class="navbar-dark">
              <ul class="navbar-nav">

                <li class="my-4">
                  <hr class="dropdown-divider bg-light" />
                </li>
                <li>
                  <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} to="/Attendant/AttendantDashboard" class="nav-link px-3 active">
                    <span class="me-2"><i class="bi bi-speedometer2"></i></span>
                    <span>Dashboard</span>
                  </Link>
                </li>

                <li>
                  <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} to='/Attendant/HostelDetails' class="nav-link px-3">
                    <span class="me-2"><i class="bi bi-book-fill"></i></span>
                    <span>HOSTELLER DETAILS</span>
                  </Link>
                  </li>
                <li>
                  <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} to='/Attendant/EmployeeDetails' class="nav-link px-3">
                    <span class="me-2"><i class="bi bi-book-fill"></i></span>
                    <span>EMPLOYEE DETAILS</span>
                  </Link>
                </li>
                <li>
                  <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} to='/Attendant/Fees' class="nav-link px-3">
                    <span class="me-2"><i class="bi bi-book-fill"></i></span>
                    <span>FEES</span>
                  </Link>
                </li>
                <li>
                  <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} to='/Attendant/Gallery' class="nav-link px-3">
                    <span class="me-2"><i class="bi bi-book-fill"></i></span>
                    <span>GALLERY</span>
                  </Link>
                </li>
                <li>
                  <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} to='/Attendant/Complaint' class="nav-link px-3">
                    <span class="me-2"><i class="bi bi-book-fill"></i></span>
                    <span>COMPLAINTS</span>
                  </Link>
                </li>
                


              </ul>
            </nav>
          </div>
        </div>
    );
}

export default AttendantSide;