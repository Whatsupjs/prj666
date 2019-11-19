import React, { Component } from 'react';

class SidebarPrf extends Component {
    render() {
        return(
            <div id="prf" className="sidebar">
            <br/>
                <div className="Profile">
                    <ul className="nav-sidebar">
                        <li><a href="#">User Profile</a> </li>
                    </ul>
                </div>
                <div className="Services">
                    <ul className="nav-sidebar">
                        <li><a href="#">Services</a></li>
                    </ul>
                </div>
                <div className="Bookings">
                    <ul className="nav-sidebar">
                        <li><a href="#">Bookings</a></li>
                    </ul>
                </div>
          </div>
        );
    };
}

export default SidebarPrf;
