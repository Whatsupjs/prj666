import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import SidebarPrf from "../sidebar/SidebarPrf";
// import SidebarPrf from '../sidebar/SidebarPrf';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: props.highlight,
            hasSidebar: props.hasSidebar,
            hasSidebarPrf: props.hasSidebarPrf
        }
    }

    render() {
        return (

            <div className="container-fluid row">

                <div className="row" id="with_bg">

                    <div className="row" id="search_login_top">
                        <div className="offset-sm-1 col-sm-4" id="search_bar">
                            <form className="form-inline md-form form-sm mt-0">
                                <i className="fas fa-search" aria-hidden="true"></i>
                                <input className="form-control form-control-sm ml-3 w-75" type="search" placeholder="Search" aria-label="Search"/>
                            </form>
                        </div>

                        <div className="offset-sm-5 col-sm-2" id="sign_in_up">
                            <a href="/">Login</a> /
                            <a href="/signup">&nbsp;Sign&nbsp;Up</a>
                        </div>
                    </div>

                    <div className="row" id="title">
                        <div className="col-sm-12"><h2><em>Quick Service</em></h2></div>
                    </div>

                    <div className="row" id="nav">
                        <div className="col-sm-12">
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
                                    <a className={(this.state.highlight === "Cooking" ? 'nav-link active' : 'nav-link')} href="/">Cooking</a>
                                </li>
                                <li className="nav-item">
                                    <a className={(this.state.highlight === "Other" ? 'nav-link active' : 'nav-link')} href="/">Other</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Commented out this part since it keeps breaking sidebar CSS */}
                <div className="row col-sm-12 main">
                    {/* { this.state.hasSidebar && <div className="col-md-3"> <Sidebar/> </div> } */}
                    {/* { this.state.hasSidebarPrf && <div className="col-md-3"> <SidebarPrf/> </div> } */}
                    {/* <div className={(this.state.hasSidebar || this.state.hasSidebarPrf) ? " col-md-offset-2 col-md-7 main" : " col-sm-12 main"}> */}
                    {this.props.children}
                    {/* </div> */}
                </div>

                <Footer/>
            </div>

        );
    }
}

export default MainContainer;
