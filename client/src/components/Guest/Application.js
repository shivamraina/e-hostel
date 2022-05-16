import { useState } from 'react'
import Login from './Login'
import history from "../../history";

function Application() {
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
        <div class="container">
  <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32">
        <use/>
      </svg>
      <span class="fs-4">Guest</span>
    </a>
  </header>
</div>
        <div class="form-row">
    <div class="input-group col-md-4 mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">Name</div>
      </div>
      <input type="text" class="form-control" id="Name" placeholder="Enter Name" required />

    </div>
    <div class="input-group col-md-4 mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">Email</div>
      </div>
      <input type="email" class="form-control" id="Email" placeholder="Enter Email" required />
    </div>
  </div>
  <div class="form-row">
    <div class="input-group col-md-4 mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">Mobile</div>
      </div>
      <input type="number" class="form-control" id="Mobile" placeholder="Enter Mobile" required />
    </div>
    <div class="input-group col-md-4 mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">Gender</div>
      </div>
      <select class="custom-select" required>
        <option value="">- Select Gender -</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="input-group col-md-4 mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">DOB</div>
      </div>
      <input type="date" name="bday" max="3000-12-31" min="1000-01-01" class="form-control" required />

    </div>
    <div class="input-group col-md-4 mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">City</div>
      </div>
      <input type="text" class="form-control" id="City" placeholder="Enter City" required />

    </div>
    <div class="input-group col-md-4 mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">From date</div>
      </div>
      <input type="date" name="bday" max="3000-12-31" min="1000-01-01" class="form-control" required />

    </div>
    <div class="input-group col-md-4 mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">To date</div>
      </div>
      <input type="date" name="bday" max="3000-12-31" min="1000-01-01" class="form-control" required />

    </div>
  </div>
  <div class="input-group">
    <span class="input-group-text">Reason</span>
    <textarea class="form-control" aria-label="Reason"></textarea>
  </div>
  <div class="input-group">
    <span class="input-group-text">Note if any</span>
    <textarea class="form-control" aria-label="Note if any"></textarea>
  </div>

  <button type="submit" class="btn btn-primary col-md-12">Click to Submit</button>

  </>
    )
}

export default Application