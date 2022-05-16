import StudentLogin from "./StudentLogin";
import StudentNav from "./StudentNav";
import StudentSide from "./StudentSide";
import {useState} from 'react';
import { Link } from "react-router-dom";

function HostelInfo() {
    const [redirect, setRedirect] = useState(false);
    
    return (
        redirect? <StudentLogin />:
        <>
        <StudentNav setRedirect={setRedirect}/>
        <StudentSide />
        <main class="mt-5 pt-3">
        <div class="container-fluid">
            <div class="row">

                <div class="mt-4 alert alert-info pt-1 pb-0 rounded-0 pl-2">
                    <h1 class="font-size-1a"><i class="fa fa-building"></i> BOYS HOSTEL</h1>
                </div>
            </div>
            <div class="row">



                <span class="ml-2 pl-2 redText">Shivalik Hostel</span>

                <span class="ml-2 pl-2 redText"> Himalaya Hostel</span>
                <span class="ml-2 pl-2 redText"> Kurukshetra Hostel </span>
                <span class="ml-2 pl-2 redText">Aravali Hostel</span>


            </div>

        </div>
        <div class="container-fluid">
            <div class="row">

                <div class="mt-4 alert alert-info pt-1 pb-0 rounded-0 pl-2">
                    <h1 class="font-size-1a"><i class="fa fa-building"></i> GIRLS HOSTEL</h1>
                </div>
            </div>
            <div class="row">



                <span class="ml-2 pl-2 redText"> Vindhya Hostel </span>
                <span class="ml-2 pl-2 redText">Kalpana Chawla Hostel</span>


            </div>
            <br />
            <Link  style={{ textDecoration: 'none' , paddingLeft: '20px'}} class="btn btn-primary" to="/Student/StudentDash" role="button">Back</Link>
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
        </>
    );
}

export default HostelInfo;