import AttendantNav from "./AttendantNav";
import AttendantLogin from "./AttendantLogin";
import {useState} from 'react'
import { Link } from "react-router-dom";
import Hostel1 from './Hostel1.jpg';
import Hostel2 from './Hostel2.jpg';
import Hostel3 from './Hostel3.jpg';
import AttendantSide from "./AttendantSide";

function Gallery() {
    const [redirect, setRedirect] = useState(false);

    return (
        redirect ? <AttendantLogin /> :
        <>
        <AttendantNav setRedirect={setRedirect}/>
        <AttendantSide />
  <main class="mt-5 pt-3">
    <div class="container-fluid">
      <div class="row">
      </div>
      <div class="row">
        <div class="row-md-12 mb-12">
            <div class="global-container">
                <div class="card">
                    <img src={Hostel1} class="card-img-top" alt="" width="2000" height="550" />
                    <div class="card-body">
                    </div>
                  </div>
        </div>
      </div>
      <br />
      <div class="">
        <div class="row-md-12 mb-12">
            <div class="global-container">
                <div class="card">
                    <img src={Hostel2} class="card-img-top" alt="" width="200" height="550" />
                    <div class="card-body">
                    </div>
                  </div>
        </div>
        <br />
      </div>
      <div class="row">
        <div class="row-md-12 mb-12">
            <div class="global-container">
                <div class="card" >
                    <img src={Hostel3} class="card-img-top" alt="" width="2000" height="350" />
                    <div class="card-body">
                    </div>
                  </div>
        </div>
      </div>
    </div>
      </div>
      </div>
      </div>
  </main>
        </>
    );
}

export default Gallery;