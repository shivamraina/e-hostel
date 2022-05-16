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
            <a href="/Student/HostelInfo" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>HOSTEL INFO</span>
            </a>
          </li>



          <li>
            <a href="/Student/BookHostel" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>BOOK HOSTEL</span>
            </a>
          </li>
          <li>
            <a href="/Student/MessBill" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>MESS BILL</span>
            </a>
          </li>
          <li>
            <a href="/Student/FeesHostel" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>FEES</span>
            </a>
          </li>

          <li>
            <a href="/Student/LeaveApplication" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>LEAVE APPLICATION</span>
            </a>
          </li>


          <li>
            <a href="/Student/Complaint" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>COMPLAINT</span>
            </a>
          </li>
          
        </ul>
      </nav>
    </div>
  </div>);
}

export default StudentSide;