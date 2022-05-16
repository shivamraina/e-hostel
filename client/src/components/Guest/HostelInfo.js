import Login from './Login'
import history from "../../history";
import {useState} from 'react'


function HostelInfo() {
    const [redirect, setRedirect] = useState(false)

  const signOutHandler = (e) => {
    e.preventDefault()
    history.push('Login')
    setRedirect(true)
  }
    return (
        redirect ? <Login />: 
    <>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar"
        aria-controls="offcanvasExample">
        <span class="navbar-toggler-icon" data-bs-target="#sidebar"></span>
      </button>
      <a class="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold" href="#">GUEST</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNavBar"
        aria-controls="topNavBar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="topNavBar">
        <button class="d-flex ms-auto my-3 my-lg-0" onClick={signOutHandler}>Sign Out</button>
      </div>
    </div>
  </nav>
  <div class="offcanvas offcanvas-start sidebar-nav bg-dark" tabindex="-1" id="sidebar">
    <div class="offcanvas-body p-0">
      <nav class="navbar-dark">
        <ul class="navbar-nav">
          <li class="my-4">
            <hr class="dropdown-divider bg-light" />
          </li>
          <li>
            <a href="/Guest/Application" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>Application for accomodation</span>
            </a>
          </li>
          <li>
            <a href="/Guest/HostelInfo" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>Hostels Info</span>
            </a>
          </li>
          <li>
          <a href="/Guest/Fees" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>Fees</span>
            </a>
          </li>
          <li>
          <a href="/Guest/Feedback" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>Feedback</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
    <main class="mt-5 pt-3">
        <div class="container-fluid">
            <div class="row">
                
                <div class="mt-4 alert alert-info pt-1 pb-0 rounded-0 pl-2">
                    <h1 class="font-size-1a"><i class="fa fa-building"></i> Hostel Manager / Asst.Manager</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 mt-2">
                <div><b>Name</b></div>
                Manoj Ram
            </div>
            <div class="col-md-3 mt-2">
                <div><b>E-mail</b></div>
                thostel@i.ac.in
            </div>
            <div class="col-md-3 mt-2">
                <div><b>Hostel Office No</b></div>
                044 - 2257 998710
            </div>
            <div class="col-md-3 mt-2">
                <div><b>Security No</b></div>
                04499 22578711
            </div>
        </div>
        <div class="mt-4 alert alert-success pt-1 pb-0 rounded-0 pl-2">
            <h1 class="font-size-1a"><i class="fa fa-user"></i> Hostel Warden</h1>
        </div>
        <div class="row">
            <div class="col-md-2 mt-2 text-center">
                <img src="#"
                    alt="Profile Image" class="img-thumbnail" />
            </div>
            <div class="col-md-5 mt-2">
                <div class="border-bottom pb-1 mb-2">
                    <div class="d-inline">Warden Name: </div>
                    Dr. Manish Kamboj 
                </div>
                <div class="border-bottom pb-1 mb-1">
                    <div class="d-inline">Email: </div>
                    <span class="text-primary">warden@smail.i.ac.in</span>
                </div>
                <div class="border-bottom pb-1 mb-1">
                    <div class="d-inline">Office Number: </div>
                    <span class="text-primary">0487 2257 8712</span>
                </div>

            </div>
        </div>


        <div class="row">
            <div class="col-xl-12">
                <div class="mt-4 alert alert-secondary pt-1 pb-0 rounded-0 pl-2 ">
                    <h1 class="font-size-1a"><i class="fa fa-users"></i> Hostel Secretary</h1>
                </div>
                <div class="row">
                    <span class="ml-2 pl-2 redText">Hostel Secretary Information will be added soon...</span>
                </div>
            </div>
        </div>
        <div class="mt-4 alert alert-warning pt-1 pb-0 rounded-0 pl-2">
            <h1 class="font-size-1a"><i class="fa fa-users"></i> Hostel Staff(s)</h1>
        </div>
        <div class="row">
            <div class="col-md-3 mt-2">
                <span class="fa fa-user"></span> VENKATA  <br />
                <p class="pl-3"><small>(HOSTEL ATTENDANT)</small></p>
            </div>
            <div class="col-md-3 mt-2">
                <span class="fa fa-user"></span> SUMATHI D <br />
                <p class="pl-3"><small>(HOSTEL ATTENDANT)</small></p>
            </div>
            <div class="col-md-3 mt-2">
                <span class="fa fa-user"></span> MALATHI A <br />
                <p class="pl-3"><small>(HOSTEL ATTENDANT)</small></p>
            </div>
        </div>
        <div>
            <span>
                <div class="bg-secondary">
                    <div class="container">
                        <div class="row pad2px text-light">
                            <div class="col-md-12 text-center">
                                <h4 class="marBot20px font-weight-normal">Contact us @</h4>
                                <address>
                                    <p class="font-size-1 marBot0px font-weight-bold ">Office of the Chairman Council of
                                        Wardens and Hostel Management</p>
                                    <p class="marBot10px-1">PEC, Chandigarh- 600 036</p>
                                    <p class="marBot10px-1">Phone: +91 44 9982257 8500, Email: <a class="text-white"
                                            href="mailto:ccwoffice@iitm.ac.in">office@i.ac.in</a></p>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>

        </span>
        </div>
    </main>
    </>)
}

export default HostelInfo;