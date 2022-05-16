import Hostel2 from './Hostel2.jpg'
import Hostel3 from './Hostel3.jpg'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import Login from './Login'
import history from "../../history";


function GuestDash() {

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
  <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="40000">
        <img src={Hostel3} class="d-block w-100" alt="..." />
      </div>

      <div class="carousel-item" data-bs-interval="40000">
        <img src={Hostel2} class="d-block w-100" alt="..." />
      </div>
    </div>
  </>
 )
}

export default GuestDash;