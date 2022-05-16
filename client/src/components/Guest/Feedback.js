import { useState } from 'react'
import Login from './Login'
import history from "../../history";
import { Link } from 'react-router-dom';

function Feedback() {
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
            <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} to="/Guest/Application" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>Application for accomodation</span>
            </Link>
          </li>
          <li>
            <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} to="/Guest/HostelInfo" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>Hostels Info</span>
            </Link>
          </li>
          <li>
          <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} to="/Guest/Fees" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>Fees</span>
            </Link>
          </li>
          <li>
          <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} to="/Guest/Feedback" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>Feedback</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
        <div class="pt-5">
        <div class="global-container">
            <div class="card login-form">
                <div class="card-body">
                    <h3 class="card-title text-center"> PUBLISH FEEDBACK</h3>
                    <div class="card-text">
                        <form>


                            <div class="input-group">
                                <span class="input-group-text">FEEDBACK TITLE</span>
                                <textarea class="form-control" aria-label="Reason"></textarea>
                              </div>
                              <div class="input-group">
                                <span class="input-group-text">FEEDBACK MESSAGE</span>
                                <textarea class="form-control" aria-label="Reason"></textarea>
                              </div>


                            <button type="submit" class="btn btn-primary">SUBMIT</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
  </>
    )
}

export default Feedback