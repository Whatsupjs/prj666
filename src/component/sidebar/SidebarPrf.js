import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SidebarPrf extends Component {
    render() {
        return (
            <div id="prf" className="sidebar">
                <br/><br/>
                <div className="Profile">
                    <ul className="nav-sidebar">
                        <li className={(this.props.highlight === "profile" ? 'active' : '')}><Link to="/user/profile">User Profile</Link> </li>
                    </ul>
                </div>
                <div className="Services">
                    <ul className="nav-sidebar">
                        <li className={(this.props.highlight === "service" ? 'active' : '')}><Link to="/user/service">Services</Link> </li>
                    </ul>
                </div>
                <div className="Bookings">
                    <ul className="nav-sidebar">
                        <li className={(this.props.highlight === "booking" ? 'active' : '')}><Link to="/user/booking">Bookings</Link> </li>
                    </ul>
                </div>
                <br/><br/>
            </div>
        );
    };
}

export default SidebarPrf;
