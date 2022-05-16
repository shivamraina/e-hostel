import {Link} from 'react-router-dom';
import Pec from './PEC-Logo.webp'

function Navbar () {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">e-Hostel </a>
        <img src={Pec} class="img-fluid ml-auto" alt="" width="66.95" height="40" href="/index.html" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link px-40" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Student
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/Student/Register">Sign Up</a>
                        <a class="dropdown-item" href="/Student/Login">Login</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Guest
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/Guest/Register">Sign Up</a>
                        <a class="dropdown-item" href="/Guest/Login">Login</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Attendant/Login">Attendant</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;