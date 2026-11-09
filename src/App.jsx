import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import LandingPage from './Pages/LandingPage'
import CreateIssue from './user/Pages/CreateIssue'
import Feedback from './user/Pages/Feedback'
import IssueDetails from './user/Pages/IssueDetails'
import MyIssue from './user/Pages/MyIssue'
import Notifications from './user/Pages/Notifications'
import AdminDashboard from './admin/Pages/AdminDashboard'
import AdminProfile from './admin/Pages/AdminProfile'
import AllIssues from './admin/Pages/AllIssues'
import AssignIssue from './admin/Pages/AssignIssue'
import ManageCategories from './admin/Pages/ManageCategories'
import ManageTechnicians from './admin/Pages/ManageTechnicians'
import ManageUsers from './admin/Pages/ManageUsers'
import Reports from './admin/Pages/Reports'
import SLAMonitoring from './admin/Pages/SLAMonitoring'
import Pnf from './Pages/Pnf'
import Profile from './user/Pages/Profile'
import UserDashboard from './user/Pages/UserDashboard'
import TrackComplaintStatus from './user/Pages/TrackComplaintStatus'




function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='login' element={<Login/>}/>

//user
      <Route path='createissue' element={<CreateIssue/>}/>
      <Route path='feedback' element={<Feedback/>}/>
      <Route path='IssueDetails' element={<IssueDetails/>}/>
      <Route path='myissue' element={<MyIssue/>}/>
      <Route path='notification' element={<Notifications/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='userdashboard' element={<UserDashboard/>}/>
      <Route path='trackcomplaintstatus' element={<TrackComplaintStatus/>}/>




//admin
      <Route path='admindashbord' element={<AdminDashboard/>}/>
      <Route path='adminprofile' element={<AdminProfile/>}/>
      <Route path='allissues' element={<AllIssues/>}/>
      <Route path='assignissues' element={<AssignIssue/>}/>
      <Route path='managecategories' element={<ManageCategories/>}/>
      <Route path='managtechnicians' element={<ManageTechnicians/>}/>
      <Route path='manageusers' element={<ManageUsers/>}/>
      <Route path='reports' element={<Reports/>}/>
      <Route path='slamonnitoring' element={<SLAMonitoring/>}/>

      <Route path='/*' element={<Pnf/>} />

     </Routes>
    </>
  )
}

export default App
