import { Link } from "react-router-dom";
function StudentSide() {
    return (
        <div class="offcanvas offcanvas-start sidebar-nav bg-dark" tabindex="-1" id="sidebar">
    <div class="offcanvas-body p-0">
      <nav class="navbar-dark">
        <ul class="navbar-nav">

          <li class="my-4">
            <hr class="dropdown-divider bg-light" />
          </li>
          <li>
            <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} to="/Student/HostelInfo" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>HOSTEL INFO</span>
            </Link>
          </li>



          <li>
            <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} to="/Student/BookHostel" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>BOOK HOSTEL</span>
            </Link>
          </li>
          <li>
            <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} to="/Student/MessBill" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>MESS BILL</span>
            </Link>
          </li>
          <li>
            <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} to="/Student/FeesHostel" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>FEES</span>
            </Link>
          </li>

          <li>
            <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} to="/Student/LeaveApplication" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>LEAVE APPLICATION</span>
            </Link>
          </li>


          <li>
            <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} to="/Student/Complaint" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>COMPLAINT</span>
            </Link>
          </li>
          
        </ul>
      </nav>
    </div>
  </div>);
}

export default StudentSide;