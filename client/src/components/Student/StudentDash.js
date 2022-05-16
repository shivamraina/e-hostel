import StudentLogin from "./StudentLogin";
import StudentNav from "./StudentNav";
import StudentSide from "./StudentSide";
import {useState} from 'react';
import Hostel2 from './Hostel2.jpg'
import Hostel3 from './Hostel3.jpg'

function StudentDash() {
    const [redirect, setRedirect] = useState(false);
    
    return (
        redirect? <StudentLogin />:
        <>
        <StudentNav setRedirect={setRedirect}/>
        <StudentSide />
        <main>
  
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
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
            </div>
        
        </main>
    </>
    );
}

export default StudentDash;