import React from 'react'
import { Link } from "react-router-dom";
import EmpInfoEditPage1 from '../pages/EmployeeInformationEdit/EmpInfoEditPage1'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="#">होम </a>
        </li>
        <li>
          <a className="nav-link active" aria-current="page" to="#">युजर </a>
        </li>
        
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            सेटअप 
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to="#">कर्मचारी वेतन आवाश्यक महिती </a></li>
            <li><a className="dropdown-item" to="#">कर्मचारी रजा काढणे </a></li>
            <li><Link  className="dropdown-item" to="/empinfoeditpage1" onClick={<EmpInfoEditPage1/>}>कर्मचारी माहिती दुरुस्ती </Link></li>
          </ul>
        </li>

        <li>
          <a className="nav-link active" aria-current="page" to="#">प्रशासन सेटअप </a>
        </li>
        <li>
          <a className="nav-link active" aria-current="page" to="#">संचालन </a>
        </li>
        <li>
          <a className="nav-link active" aria-current="page" to="#">पगार प्रक्रिया </a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar
