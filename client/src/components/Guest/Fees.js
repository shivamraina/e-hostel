import Hostel2 from './Hostel2.jpg'
import Hostel3 from './Hostel3.jpg'
import { useState } from 'react'
import Login from './Login'
import history from "../../history";


function Fees() {

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
  <div class="col-md-6 offset-md-3">
        <span class="anchor" id="formPayment"></span>
        <hr class="my-5" />

        <div class="card card-outline-secondary">
            <div class="card-body">
                <h3 class="text-center">MAKE PAYMENT</h3>
                <hr/>
                
                <form class="form" role="form" autocomplete="off">
                    <div class="form-group">
                        <label for="cc_name">Card Holder's Name</label>
                        <input type="text" class="form-control" id="cc_name" pattern="\w+ \w+.*"
                            title="First and last name" />
                    </div>
                    <div class="form-group">
                        <label>Card Number</label>
                        <input type="text" class="form-control" autocomplete="off" maxlength="20" pattern="\d{16}"
                            title="Credit card number" />
                    </div>
                    <div class="form-group row">
                        <label class="col-md-12">Card Exp. Date</label>
                        <div class="col-md-4">
                            <select class="form-control" name="cc_exp_mo" size="0">
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <select class="form-control" name="cc_exp_yr" size="0">
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" autocomplete="off" maxlength="3" pattern="\d{3}"
                                title="Three digits at back of your card" required="" placeholder="CVC" />
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-md-12">Amount</label>
                    </div>
                    <div class="form-inline">
                        <div class="input-group">
                            <div class="input-group-prepend"><span class="input-group-text"></span></div>
                            <input type="text" class="form-control text-right" id="exampleInputAmount" placeholder="2000" />
                            <div class="input-group-append"><span class="input-group-text">.00</span></div>
                        </div>
                    </div>
                    <hr />
                    <div class="form-group row">
                        <div class="col-md-6">
                            <button type="reset" class="btn btn-default btn-lg btn-block">Cancel</button>
                        </div>
                        <div class="col-md-6">
                            <button type="submit" class="btn btn-success btn-lg btn-block">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
  </>
 )
}

export default Fees;