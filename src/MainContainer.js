import React, { Component } from 'react';
import Footer from './component/footer/Footer';
import Sidebar from './component/sidebar/Sidebar';
// import SidebarPrf from './component/sidebar/SidebarPrf';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: props.highlight,
            hasSidebar: props.hasSidebar
        }
    }
    
    render() {
        return (
            // <div>
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
                                        <a className={(this.props.highlight === "Home" ? 'nav-link active' : 'nav-link')} href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={(this.props.highlight === "House Keeping" ? 'nav-link active' : 'nav-link')} href="/housekeeping">House Keeping</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={(this.props.highlight === "Plumbing" ? 'nav-link active' : 'nav-link')} href="/plumbing">Plumbing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={(this.props.highlight === "Cooking" ? 'nav-link active' : 'nav-link')} href="/">Cooking</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={(this.props.highlight === "Other" ? 'nav-link active' : 'nav-link')} href="/">Other</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        {/* <div className={(this.props.hasSidebar ? "visible" : "invisible")}> <Sidebar/> </div>
                        <div className={(this.props.hasSidebar_prf ? "visible" : "invisible")}> <Sidebar_prf/> </div>
                        <div className={(this.props.hasSidebar ? " col-sm-offset-1 col-sm-7 main" : " col-sm-12 main")}> */}
                            {this.props.children}
                        {/* </div> */}
                    </div>

                <Footer/>
                </div>


            // </div>
        );
    }
}

export default MainContainer;
