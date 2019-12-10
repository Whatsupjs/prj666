import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import SidebarPrf from '../sidebar/SidebarPrf';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: props.highlight,
            hasSidebar: props.hasSidebar,
            hasSidebarPrf: props.hasSidebarPrf,
            isLoggedIn: false
        }

        this.logout=this.logout.bind(this);
    }

    componentDidMount() {
        // Check if the User is logged in - 'email' value state used to determine whether logged in or not 
        // Determines what to show/hide in the top container
        if (sessionStorage.getItem("email") != null) {
            this.setState({ isLoggedIn: true });
        }
    }

    logout() {
        sessionStorage.removeItem("email"); // Ensures the top container goes back to the logged out state
    }

    render() {
        return (

            <div className="container-fluid">

                <div className="row" id="with_bg">

                    <div className="row" id="search_login_top">
                        <div className="offset-md-1 col-md-4" id="search_bar">
                            <form className="form-inline md-form form-md mt-0">
                                <i className="fas fa-search" aria-hidden="true"></i>
                                <input className="form-control form-control-md ml-3 w-75" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>

                        <div className="offset-sm-5 col-sm-2" id="sign_in_up">
                            {/* Determines what to display based on whether a User is logged in or not */}
                            <a hidden={this.state.isLoggedIn === false ? false: true} href="/login"><b>Login&nbsp;/&nbsp;</b></a> {/* Logged Off - Display */}
                            <a hidden={this.state.isLoggedIn === false ? false: true} href="/signup"><b>Sign Up</b></a> {/* Logged Off - Display */}
                            <a hidden={this.state.isLoggedIn === true ? false: true} href="/user/profile"><b>User Settings</b></a> {/* Logged In - Display */}
                            <br/>
                            <a hidden={this.state.isLoggedIn === true ? false: true} onClick={() => {this.logout()}} href='/'><b>Logout</b></a> {/* Logged In - Display */}
                        </div>
                    </div>

                    <div className="row" id="title">
                        <div className="col-md-12"><h2><em>Quick Service</em></h2></div>
                    </div>

                    <div className="row" id="nav">
                        <div className="col-md-12">
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <a className={(this.state.highlight === "Home" ? 'nav-link active' : 'nav-link')} href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className={(this.state.highlight === "House Keeping" ? 'nav-link active' : 'nav-link')} href="/housekeeping">House Keeping</a>
                                </li>
                                <li className="nav-item">
                                    <a className={(this.state.highlight === "Plumbing" ? 'nav-link active' : 'nav-link')} href="/plumbing">Plumbing</a>
                                </li>
                                <li className="nav-item">
                                    <a className={(this.state.highlight === "Cooking" ? 'nav-link active' : 'nav-link')} href="/cooking">Cooking</a>
                                </li>
                                <li className="nav-item">
                                    <a className={(this.state.highlight === "All" ? 'nav-link active' : 'nav-link')} href="/all">All</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="row">
                    { this.state.hasSidebar && <div className="col-md-3"> <Sidebar/> </div> }
                    { this.state.hasSidebarPrf && <div className="col-md-3"> <SidebarPrf highlight={this.state.highlight}/> </div> }
                    <div className={(this.state.hasSidebar || this.state.hasSidebarPrf) ? "col-md-9" : " col-md-12"} style={{backgroundColor: 'lavender'}}>
                    {this.props.children}
                    </div>
                </div>

                <div className="row">
                    <Footer />
                </div>
            </div>

        );
    }
}

export default MainContainer;
