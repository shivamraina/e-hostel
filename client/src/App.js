import Home from "./components/Home/Home";
import Register from "./components/Guest/Register";
import Login from "./components/Guest/Login";
import GuestDash from "./components/Guest/GuestDash";
import Application from "./components/Guest/Application";
import HostelInfo from "./components/Guest/HostelInfo";
import GuestFees from "./components/Guest/Fees";
import Feedback from "./components/Guest/Feedback";
import AttendantLogin from "./components/Attendant/AttendantLogin"
import AttendantDashboard from "./components/Attendant/AttendantDashboard"
import HostelDetails from "./components/Attendant/HostelDetails"
import EmployeeDetails from "./components/Attendant/EmployeeDetails"
import StudentLogin from "./components/Student/StudentLogin"
import StudentRegister from "./components/Student/StudentRegister"
import HostelInfoo from "./components/Student/HostelInfo"
import StudentDash from "./components/Student/StudentDash"
import BookHostel from "./components/Student/BookHostel"
import MessBill from "./components/Student/MessBill"
import FeesHostel from "./components/Student/FeesHostel"
import LeaveApplication from "./components/Student/LeaveApplication"
import StudentComplaint from "./components/Student/Complaint"

import Gallery from "./components/Attendant/Gallery"
import Fees from "./components/Attendant/Fees"
import Complaint from "./components/Attendant/Complaint"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import UserProvider from './providers/UserProvider';
import history from './history';

function App() {
  return (
    <UserProvider>
      <BrowserRouter history={history}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Guest/Register' element={<Register />} />
          <Route path='/Guest/Login' element={<Login />} />
          <Route path='/Guest/GuestDash' element={<GuestDash />} />
          <Route path='/Guest/Application' element={<Application />} />
          <Route path='/Guest/HostelInfo' element={<HostelInfo />} />
          <Route path='/Guest/Fees' element={<GuestFees />} />
          <Route path='/Guest/Feedback' element={<Feedback />} />
          <Route path='/Attendant/Login' element={<AttendantLogin />} />
          <Route path='/Attendant/AttendantDashboard' element={<AttendantDashboard />} />
          <Route path='/Attendant/HostelDetails' element={<HostelDetails />} />
          <Route path='/Attendant/EmployeeDetails' element={<EmployeeDetails />} />
          <Route path='/Attendant/Fees' element={<Fees />} />
          <Route path='/Attendant/Gallery' element={<Gallery />} />
          <Route path='/Attendant/Complaint' element={<Complaint />} />
          <Route path='/Student/Login' element={<StudentLogin />} />
          <Route path='/Student/Register' element={<StudentRegister />} />
          <Route path='/Student/HostelInfo' element={<HostelInfoo />} />
          <Route path='/Student/StudentDash' element={<StudentDash />} />
          <Route path='/Student/BookHostel' element={<BookHostel />} />
          <Route path='/Student/MessBill' element={<MessBill />} />
          <Route path='/Student/FeesHostel' element={<FeesHostel />} />
          <Route path='/Student/LeaveApplication' element={<LeaveApplication />} />
          <Route path='/Student/Complaint' element={<StudentComplaint />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
