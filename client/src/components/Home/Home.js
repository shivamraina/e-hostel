import Administative from './Administative.png'
import Boyshostel from './Boyshostel.jpg'
import { Link, withRouter } from 'react-router-dom';
import facilites from './facilites.jpg'
import girlshostel from './girlshostel.jpg'
import Hostel1 from './Hostel1.jpg'
import Hostel2 from './Hostel2.jpg'
import Hostel3 from './Hostel3.jpg'
import Pec from './PEC-Logo.webp'
import Navbar from './Navbar'
import who from './who are we.jpg'


function Home() {
    return (
        <>
        <Navbar />

    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={Hostel1} class="d-block w-100" alt="" width="1600" height="650" />
                <div class="carousel-caption d-none d-md-block">
                    <h2>Welcome to e-Hostel </h2>
                    <p>A Better way of Managing Hostel</p>
                    <button class="btn btn-primary">Shivalik Hostel</button>
                </div>
            </div>
            <div class="carousel-item">
                <img src={Hostel2} class="d-block w-100" alt="" width="1600" height="650" />
                <div class="carousel-caption d-none d-md-block">
                    <h2>Welcome to e-Hostel </h2>
                    <p>A Better way of Managing Hostel</p>
                    <button class="btn btn-primary">Shivalik Hostel</button>
                    
                </div>
            </div>
            <div class="carousel-item">
                <img src={Hostel3} class="d-block w-100" alt="" width="1600" height="650" />
                <div class="carousel-caption d-none d-md-block">
                    <h2>Welcome to e-Hostel </h2>
                    <p>A Better way of Managing Hostel</p>
                   
                    <button class="btn btn-primary">Kurukshetra Hostel</button>
                    
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>


    <div class="container my-4">
        <div class="row mb-2">
            <div class="col-md-6">
                <div
                    class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">Hostel</strong>
                        <h3 class="mb-0">Boys Hostels</h3>
                        <div class="mb-1 text-muted"></div>
                        <p class="card-text mb-auto">Punjab Engineering College (Deemed to be University) has adequate hostel facilities for both boys and girls.
                            <br />
                            There are six hostels out of which four hostels are for boys namely:
                            
                            Shivalik,
                            Himalaya,
                            Kurukshetra,
                            Aravali</p>
                        <a href="https://pec.ac.in/hostels" class="stretched-link">Continue reading</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img class="bd-placeholder-img" width="200" height="250"
                            src={Boyshostel} alt=""/>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div
                    class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-success">Hostel</strong>
                        <h3 class="mb-0">Girls Hostels</h3>
                        <div class="mb-1 text-muted"></div>
                        <p class="mb-auto">Punjab Engineering College has adequate hostel facilities for both boys and girls.
                            There are six hostels out of which two hostels are for girls namely:
                            <br />
                            Kalpana Chawla
                            Vindhya hostels</p>
                        <a href="https://pec.ac.in/hostels" class="stretched-link">Continue reading</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img class="bd-placeholder-img" width="200" height="250"
                            src={girlshostel} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-md-6">
                <div
                    class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">facilities</strong>
                        <h3 class="mb-0">Facilities</h3>
                        <div class="mb-1 text-muted"></div>
                        <p class="card-text mb-auto">To provide residential facilities for Punjab Engineering College (Deemed to be University) students which fulfill the basic necessities and amenities to residents.<br />
                         </p>
                        <a href="https://pec.ac.in/hostels" class="stretched-link">Continue reading</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img class="bd-placeholder-img" width="200" height="250"
                            src={facilites} alt="" />
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div
                    class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-success">Management Body</strong>
                        <h3 class="mb-0">Administration</h3>
                        <div class="mb-1 text-muted"></div>
                        <p class="mb-auto">The Dean Student Affairs (DSA) is the overall in charge of all students
                            activities of the institution along with Associate Dean Student Affairs-I. Associate Dean
                            Student Affairs-I is the In-charge of all hostels organizations.</p>
                        <a href="https://pec.ac.in/hostels" class="stretched-link">Continue reading</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img class="bd-placeholder-img" width="200" height="250"
                            src={Administative} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="container my-4">
        <p class="float-right"><a href="/">Back to top</a></p>
        <p>© 2021-2022 e-Hostel, Inc. · 
        </p>
    </footer>
    </>
    );
  }
  
  export default Home;
  