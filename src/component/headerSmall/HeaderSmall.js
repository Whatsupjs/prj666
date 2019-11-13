import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg'
import usericon from './usericon.png'

import "./HeaderSmall.css";

class HeaderSmall extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>

                <div>
                    <header>

                        <div className="row" id="headersmall">
                            <div className="offset-md-1 col-md-2" id="logo">
                                <Link to="/Home">
                                    <img src={logo} alt="logotest" />
                                </Link>
                            </div>


                            <div className="col-md-3" id="tab3">
                                <ul className="nav" >
                                    <li className="nav-item">
                                        <a className={(this.props.highlight === "Home" ? 'nav-link active' : 'nav-link')} href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={(this.props.highlight === "Discover" ? 'nav-link active' : 'nav-link')} href="./Discover">Discover</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={(this.props.highlight === "Booking" ? 'nav-link active' : 'nav-link')} href="./Booking">Booking</a>
                                    </li>

                                </ul>
                            </div>


                            <div className="col-md-3" id="searchbox">

                                <form className="form-inline" action="">
                                    <input className="form-control form-control-md-2" type="search" placeholder="Ask me" aria-label="Search" />
                                    <button className="offset-md-1" type="submit" value="Submit" id="go">Go</button>

                                </form>
                            </div>

                            <div className="offset-md-1 col-md-1" id="user">
                                <Link to="/Profile">
                                    <img src={usericon} alt="usericontest" />
                                </Link>
                            </div>

                        </div>

                    </header>
                </div>

                <br />
                <br />
                <br />
                <br />
            </>


        );
    }
}

export default HeaderSmall;
