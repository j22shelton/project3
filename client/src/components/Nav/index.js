import React from "react";
import "./style.css";
// import { NavLink } from 'react-router-dom';


function Nav() {
    return (
    <div className="container-fluid sticky-top">
    <div className="row">
        <div className="col-xl-2 bg-white"></div>
          <div className="col-xl-8 px-0">
            <nav className="navbar navbar-expand-sm navbar-light bg-white"id="banner">  
                <h4 className="text-blue">Retirement Calculator</h4> 
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li> <a href="https://travel.state.gov/content/travel/en/international-travel/while-abroad/retirement-abroad.html" target="_blank" rel="noopener noreferrer"> Global Retirement Considerations </a></li>
                    </ul>   
                </div>
                <div className="google-btn-container">
                    <a href="/auth/google">
                      <div className="google-btn">
                        <div className="google-icon-wrapper">
                          <img
                            className="google-icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="signin"
                          />
                        </div>
                        <p className="btn-text">
                          <b>Log in with Google</b>
                        </p>
                      </div>
                    </a>
                  </div>
            </nav>
          </div>
        <div className="col-xl-2 bg-white"></div>
    </div>
  
</div>


    );
}

export default Nav;
